import React, { useContext, useEffect } from "react";
import graphql from "babel-plugin-relay/macro";
import { ReactRelayContext } from "react-relay";
import { Button, Jumbotron } from "reactstrap";
import { withData } from "../relay/withData";
import ItemsContainer from "../containers/ItemsContainer";

const rootQuery = graphql`
  query pagesRootQuery {
    agencies {
      ...ItemsContainer_items
    }
  }
`;

const IndexPage = ({ agencies, operationToRetain }) => {
  const { environment } = useContext(ReactRelayContext);

  useEffect(() => {
    const reference = environment.retain(operationToRetain);

    return () => reference();
  }, []);

  return (
    <div className="p-3">
      <Jumbotron>
        <h1 className="display-3">NextJS with Relay Modern</h1>
        <p className="lead">
          We use{" "}
          <a href="https://api.digitransit.fi/graphiql/finland" target="_blank">
            GraphQL API
          </a>{" "}
          to display a list of items.
        </p>
        <hr className="my-3" />
        <p className="lead">
          <Button
            color="primary"
            href="https://github.com/thibaultboursier/nextjs-with-relay-modern"
            tag="a"
          >
            See GitHub project
          </Button>
        </p>
      </Jumbotron>
      <ItemsContainer items={agencies} />
    </div>
  );
};

export default withData(IndexPage, {
  query: rootQuery
});
