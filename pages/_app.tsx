import App from "next/app";

import React from "react";
import "core-js/stable";
import "regenerator-runtime/runtime";

import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";

import { store } from "../redux/store";
import { SWRConfig } from "swr";
import Axios from "axios";

Axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <SWRConfig value={{ shouldRetryOnError: true, dedupingInterval: 10000, fetcher: (url) => Axios(url).then(res => res.data) }}  >
          <Component {...pageProps}></Component>
        </SWRConfig>
      </Provider>
    );
  }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
