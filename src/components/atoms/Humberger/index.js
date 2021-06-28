import React ,{ useState } from "react"
import * as styles from "./humberger.module.scss";
import cx from 'classnames'


const Humberger = () => {
    const [open, setOpen] = useState(false)
    const handleCLick = e => {
      e.preventDefault()
        setOpen(!open)
    }
  return (
    <div className={cx(styles.humberger, open ? styles.open : "")} onClick={ e => handleCLick(e) } >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
export default Humberger
