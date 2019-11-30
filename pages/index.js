import React, { useContext, useEffect } from "react";
import graphql from "babel-plugin-relay/macro";
import { ReactRelayContext } from "react-relay";
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
    <>
      <h1>Items</h1>
      <ItemsContainer items={agencies} />
    </>
  );
};

export default withData(IndexPage, {
  query: rootQuery
});
