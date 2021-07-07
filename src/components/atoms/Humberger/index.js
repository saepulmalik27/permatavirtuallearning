import React from "react"
import * as styles from "./humberger.module.scss";
import cx from 'classnames'


const Humberger = ({hide, open,toggleNav}) => {
  if (hide) {
    return null;
  }else{
    return (
      <div className={cx(styles.humberger, open ? styles.open : "")} onClick={ toggleNav } >
        <span></span>
        <span></span>
        <span></span>
      </div>
    )
  }
  
}
export default Humberger
