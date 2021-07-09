import React from "react"
import * as styles from "./modal.module.scss"


const Modal = props => {
  const { hide, children } = props
  return hide ? null : (
    <div className={styles.modal} >
      <div className={styles.modal__backdrop}></div>
      <div className={styles.modal__wraper}>
        {children}
      </div>
    </div>
  )
}

export default Modal
