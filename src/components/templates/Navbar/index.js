import React from "react"
import Button from "components/atoms/Button"
import List from "components/molecules/List"
import cx from "classnames"
import PropTypes from 'prop-types'

import * as styles from "./navbar.module.scss"

const Navbar = ({ hide, direction, cta, navigation }) => {
  if (hide) {
    return null;
  } else {
    return (
      <nav className={cx(styles.navbar, direction === 'column' ? styles.column : "" )}>
        <List direction={direction} navigation={navigation}/>
        {cta ? <Button type={"primary"} size={"small"}>
          Daftar
        </Button> :  null}
      </nav>
    )
  }
}

Navbar.defaultProps = {
  direction : "row",
  hide : false,
  cta : false
}

Navbar.propTypes = {
  direction : PropTypes.string,
  hide: PropTypes.bool,
}

export default Navbar
