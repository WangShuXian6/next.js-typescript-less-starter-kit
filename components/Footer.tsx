import css from "./Footer.module.less";
import React, { useEffect } from "react";

type Props = {
  title?: string
}

const Footer:React.FunctionComponent<Props> = ({
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

export default Footer;
