import React from "react";
import Head from "next/head";

import BEBODYWISE_PIXEL from "./facebook/pixel";

export default ({ name }) => {
  return (
    <Head>
      <BEBODYWISE_PIXEL />
    </Head>
  );
};
