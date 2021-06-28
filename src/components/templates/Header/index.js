import React from "react"

import Logo from "components/atoms/Logo"
import Navbar from 'components/templates/Navbar';
import permata_logo from "src/images/logo/permata-logo.svg"
import * as styles from './header.module.scss'
import Humberger from "components/atoms/Humberger";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo src={permata_logo} alt={"permata_logo"} />
      <Navbar  />
      <Humberger/>
    </header>
  )
}

export default Header
