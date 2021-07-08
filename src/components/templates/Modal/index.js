import React from "react"
import * as styles from "./modal.module.scss"
import Login from "components/templates/Login"

const Modal = props => {
  const { closed, hide } = props
  return hide ? null : (
    <div className={styles.modal} >
      <div className={styles.modal__backdrop}></div>
      <div className={styles.modal__wraper}>
        <Login closed={closed}/>
      </div>
    </div>
  )
}

export default Modal
