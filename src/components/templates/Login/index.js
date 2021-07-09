import React, { useState } from "react"
import Input from "components/atoms/Input"
import Button from "components/atoms/Button"
import Illu from "components/molecules/Illu"
import * as styles from "./login.module.scss"
import userData from "content/user/permata.json"
import {saveToLocalStorage} from 'src/utils/helpers'
import iconemail from 'src/images/icons/email.svg'
import iconuser from 'src/images/icons/user.svg'
import iconlist from 'src/images/icons/userid.svg'
import iconwarning from 'src/images/icons/warning.svg'


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
      setsuccess("Update Email (Optional)")
    } else {
      setName("")
      setEmail("")
      seterror("NPK tidak terdaftar")
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
              iconlist
            }
            value={NPK}
            onChange={e => handleChange(e, "npk")}
            disabled={success ? true : false}
          />
          {error ? <p className={styles.label_error}> <img src={iconwarning} alt="" /> {error}</p> : null}
          <br />
          <Input
            label="Nama"
            icon={iconuser}
            value={name}
            onChange={e => handleChange(e, "name")}
            disabled={true}
          />

          <Input
            label="email"
            icon={iconemail}
            value={email}
            onChange={e => handleChange(e, "email")}
          />
          {success ? <p className={styles.label_warning}>{success}</p> : null}
          
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
