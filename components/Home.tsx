import css from "./Home.module.less";
import React, { useEffect } from "react";
import classnames from 'classnames'

type Props = {
  title?: string
}

const Home: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title'
}) => {
  useEffect(() => {
    //console.log("process.env.SERVER_URL::", process.env.SERVER_URL);
  }, []);

  return (
    <div className={classnames("test", css.home)}>
      <ul>
        <li>usage classnames in Home.tsx</li>
        <li>
          Layout.tsx set background-color hot-pink using global styled jsx
        </li>
      </ul>
    </div>
  );
};

export default Home;
