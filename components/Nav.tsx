import React, { useEffect } from "react";
import Link from "next/link";

import css from "./Nav.module.less";

type Props = {
  title?: string
}

const Nav: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title'
}) => {
  useEffect(() => {
    console.log("process.env.SERVER_URL::", process.env.SERVER_URL);
  }, []);

  return (
    <nav>
      <h4>samples</h4>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/SSR">
            <a>SSR</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
