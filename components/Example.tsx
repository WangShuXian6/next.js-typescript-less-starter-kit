import css from "./Example.module.less";
import React, { useEffect } from "react";
import { NextPage } from 'next'

type Props = {
  title?: string
}

const Example: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title'
}) => {
  useEffect(() => {
    //console.log("process.env.SERVER_URL::", process.env.SERVER_URL);
  }, []);

  return (
    <footer>
      <h2>footer</h2>
    </footer>
  );
};

export default Example;
