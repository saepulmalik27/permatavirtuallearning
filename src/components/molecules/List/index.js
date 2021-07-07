import React from "react"
import Link from "gatsby-link"
import * as styles from "./list.module.scss"
import scrollTo from 'gatsby-plugin-smoothscroll';
import cx from "classnames"
const List = ({ direction, navigation }) => {
  let contentDirection = ""
  switch (direction) {
    case "column":
      contentDirection = styles.column
      break
    default:
      contentDirection = null
      break
  }
  return (
    <ul className={cx(styles.list, contentDirection)}>
      {navigation.map((val, key) => (
        <li key={key} onClick={() => scrollTo(`#${val.id}`) }>
          {val.title}
        </li>
      ))}
    </ul>
  )
}

export default List
