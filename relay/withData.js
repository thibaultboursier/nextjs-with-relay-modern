import React from "react";
import { fetchQuery, ReactRelayContext } from "react-relay";
import { initEnvironment } from "./environment";

export const withData = (ComposedComponent, options = {}) => {
  return class WithData extends React.Component {
    static displayName = `WithData(${ComposedComponent.displayName})`;

    static async getInitialProps(ctx) {
      let composedInitialProps = {};

      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx);
      }

      let queryProps = {};
      let queryRecords = {};
      const environment = initEnvironment();

      if (options.query) {
        queryProps = await fetchQuery(
          environment,
          options.query,
          options.variables || {}
        );
        queryRecords = environment
          .getStore()
          .getSource()
          .toJSON();
      }

      return {
        ...composedInitialProps,
        ...queryProps,
        queryRecords
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
