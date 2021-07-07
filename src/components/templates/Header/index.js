import React, { useState, useLayoutEffect } from "react"

import Logo from "components/atoms/Logo"
import Navbar from "components/templates/Navbar"
import permata_logo from "src/images/logo/logo-permata.svg"
import * as styles from "./header.module.scss"
import Humberger from "components/atoms/Humberger"
import { disableScroll } from "src/utils/helpers"

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [size, setSize] = useState([0, 0])

  const updateSize = () => {
    setSize([window.innerWidth, window.innerHeight])
  }

  useLayoutEffect(() => {
    window.addEventListener("resize", updateSize)
    updateSize()
    return () => {
      return () => window.removeEventListener("resize", updateSize)
    }
  }, [])

  const handleClick = e => {
    e.preventDefault()
    setShowSidebar(!showSidebar)
    // setTimeout(() => {
    //   !showSidebar ? disableScroll.on() : disableScroll.off()
    // }, 500)
  }
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo src={permata_logo} alt={"permata_logo"} />
      </div>
      <div className={styles.navbar}>
        <Navbar hide={false} cta={false} />
      </div>
      <div className={styles.sidebar}>
        <Humberger
          hide={false}
          open={showSidebar}
          toggleNav={e => handleClick(e)}
        />
        <Navbar hide={!showSidebar} direction={"column"} cta={false}/>
      </div>
    </header>
  )
}

export default Header
