import React, { useState } from "react"
import Input from "components/atoms/Input"
import Button from "components/atoms/Button"
import Illu from "components/molecules/Illu"
import * as styles from "./login.module.scss"
import userData from "content/user/permata.json"
import {saveToLocalStorage} from 'src/utils/helpers'
import cx from "classnames";

const Login = ({closed}) => {
  const [name, setName] = useState("")
  const [NPK, setNPK] = useState("")
  const [error, seterror] = useState("")
  const [email, setEmail] = useState("")
  const [success, setsuccess] = useState("")
  const [user, setuser] = useState(null)

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
      setuser(user)
      setName(user.name)
      setEmail(user.email)
      seterror("")
      setsuccess("NPK benar, silahkan lanjutkan")
    } else {
      setName("")
      setEmail("")
      seterror("NPK salah, silahkan input NPK yang benar")
      setsuccess("")
    }
  }

  const saveLogin = data => {
    data.email = email;
    saveToLocalStorage(data)
    closed()
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
            className={cx(error ? styles.error : null, success ? styles.success : null)}
          />
          {error ? <p className={styles.label_error}>{error}</p> : null}
          {success ? <p className={styles.label_success}>{success}</p> : null}
          <Input
            label="Nama"
            icon={"https://ik.imagekit.io/saepulmalik/PLW/user_pEogm2atW.svg"}
            value={name}
            onChange={e => handleChange(e, "name")}
            disabled={true}
          />
{success ? <p className={styles.label_warning}>update email (optional)</p> : null}
          <Input
            label="email"
            icon={"https://ik.imagekit.io/saepulmalik/PLW/email_iqZq1N-9j.svg"}
            value={email}
            onChange={e => handleChange(e, "email")}
            className={success ? styles.warning : null}
          />
          
        </div>
        
        {success ? <Button
          size={"large"}
          type={"secondary"}
          cta={() => {
            saveLogin(user)
          }}
        >
          Lanjutkan
        </Button> : <Button
          size={"large"}
          type={"secondary"}
          cta={() => {
            login(NPK)
          }}
        >
          Masuk
        </Button>}
        
      </div>
    </div>
  )
}

export default Login
