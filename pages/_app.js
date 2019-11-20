import React from "react";
import App from "next/app";
import { initEnvironment } from "../relay/environment";
import { RelayProvider } from "../relay/Provider";

class MyApp extends App {
  environment = initEnvironment({
    records: this.props.queryRecords
  });

  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext);

    return { ...appProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <RelayProvider environment={this.environment} variables={{}}>
        <Component {...pageProps} />
      </RelayProvider>
    );
  }
}

export default MyApp;
