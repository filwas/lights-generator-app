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

  const [value, setValue] = useState(0)

  const handleIncrement = () => {
    setValue(value+1);
  };

  const handleDecrement = () => {
    if (value > 0) setValue(value-1)
  };


  return (
    <div className={styles.wrapper}>
      <Text>
        {value} {props.text}
      </Text>
      <nav>
        <IconAdd onClick={handleIncrement}/>
        <IconMinus onClick={handleDecrement}/>
      </nav>
    </div>
  );
};
