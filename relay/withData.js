import React from "react";
import { fetchQuery, ReactRelayContext } from "react-relay";
import { initEnvironment } from "./environment";
import { getQueryRecordsFromEnvironment, getOperationFromQuery } from "./utils";

export const withData = (ComposedComponent, options = {}) => {
  return class WithData extends React.Component {
    static displayName = `WithData(${ComposedComponent.displayName ||
      "ComposedComponent"})`;

    static async getInitialProps(ctx) {
      let composedInitialProps = {};

      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx);
      }

      const environment = initEnvironment();
      let queryProps = {};
      let queryRecords = {};
      let operationToRetain;

      if (options.query) {
        queryProps = await fetchQuery(
          environment,
          options.query,
          options.variables || {}
        );
        queryRecords = getQueryRecordsFromEnvironment(environment);
        operationToRetain = getOperationFromQuery(
          options.query,
          options.variables
        );
      }

      return {
        ...composedInitialProps,
        ...queryProps,
        queryRecords,
        operationToRetain
      };
    }

    constructor(props) {
      super(props);
      this.environment = initEnvironment({
        records: props.queryRecords
      });
    }

    render() {
      return (
        <ReactRelayContext.Provider
          value={{ environment: this.environment, variables: {} }}
        >
          <ComposedComponent {...this.props} />
        </ReactRelayContext.Provider>
      );
    }
  };
};
