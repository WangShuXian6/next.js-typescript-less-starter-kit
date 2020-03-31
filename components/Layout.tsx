import css from "./Layout.module.less";
import React, { useEffect } from "react";

import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

import {
  DEV, SITE_DESCRIPTION, SITE_IMAGE,
  SITE_NAME, SITE_TITLE
} from '@/constants/site'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title'
}) => {
  useEffect(() => {
    console.log("process.env.SERVER_URL::", process.env.SERVER_URL);
  }, []);

  return (
    <div id="layout">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={SITE_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SITE_NAME} />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta property="twitter:image" content={SITE_IMAGE} />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
          integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
          crossOrigin="anonymous"
        />
        <link rel="shortcut icon" href="./favicon.ico" />
      </Head>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
