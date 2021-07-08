import React, { useState } from "react"
import Input from "components/atoms/Input"
import Button from "components/atoms/Button"
import Illu from "components/molecules/Illu"
import * as styles from "./login.module.scss"
import userData from "content/user/permata.json"
import {saveToLocalStorage} from 'src/utils/helpers'

const Login = ({closed}) => {
  const [name, setName] = useState("")
  const [NPK, setNPK] = useState("")
  const [error, seterror] = useState("")
  const [email, setEmail] = useState("")

  const handleChange = (e, val) => {
    switch (val) {
      case "name":
        setName(e)
        break
      case "npk":
        setNPK(e)
        break
      case "email":
        setEmail(e)
        break
      default:
        break
    }
  }

  const login = data => {
    const user = userData.users.find(val => val.NPK === data)
    if (user) {
      setName(user.name)
      setEmail(user.email)
      seterror("")
      saveToLocalStorage(user)
      closed()
    } else {
      setName("")
      setEmail("")
      seterror("NPK salah, silahkan input NPK yang benar")
    }
  }

  return (
    <div className={styles.login}>
      <Illu
        src={
          "https://ik.imagekit.io/saepulmalik/PLW/login-banner_RYC1wBnYM.png"
        }
        className={styles.login_illu}
      />
      <div className={styles.login_body}>
        <div className={styles.login_body__title}>
          <h4>Login</h4>
        </div>
        <div className={styles.login_body__form}>
          <Input
            label="NPK"
            icon={
              "https://ik.imagekit.io/saepulmalik/PLW/userid_pVMM6xiqit9j_.svg"
            }
            value={NPK}
            onChange={e => handleChange(e, "npk")}
            className={error ? styles.error : null}
          />
          {error ? <p>{error}</p> : null}
          <Input
            label="Nama"
            icon={"https://ik.imagekit.io/saepulmalik/PLW/user_pEogm2atW.svg"}
            value={name}
            onChange={e => handleChange(e, "name")}
            disabled={true}
          />

          <Input
            label="email"
            icon={"https://ik.imagekit.io/saepulmalik/PLW/email_iqZq1N-9j.svg"}
            value={email}
            onChange={e => handleChange(e, "email")}
          />
        </div>
        <Button
          size={"large"}
          type={"secondary"}
          cta={() => {
            login(NPK)
          }}
        >
          Masuk
        </Button>
      </div>
    </div>
  )
}

export default Login
