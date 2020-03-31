import Head from "next/head";
import css from "./Header.module.less";
import React, { useEffect } from "react";

//component
import Nav from './Nav'

type Props = {
  title?: string
}

const Header: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title'
}) => {
  useEffect(() => {
    console.log("process.env.SERVER_URL::", process.env.SERVER_URL);
  }, []);

  return (
    <div>
      <h2>
        header
    </h2>
      <Nav />
    </div>
  );
};

export default Header;
