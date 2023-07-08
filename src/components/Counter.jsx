import { Text } from "./Text";
import { IconAdd } from "./icons/IconAdd";
import { IconMinus } from "./icons/IconMinus";

import styles from "./Counter.module.css";
import { useState } from "react";

/**
 *
 * @param {*} props
 * @returns
 */
export const Counter = (props) => {



  return (
    <div className={styles.wrapper}>
      <Text>
        {props.count} {props.text}
      </Text>
      <nav>
        <IconAdd onClick={props.onIncrement}/>
        <IconMinus onClick={props.onDecrement}/>
      </nav>
    </div>
  );
};
