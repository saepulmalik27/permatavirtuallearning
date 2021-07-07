import React from "react"
import Link from "gatsby-link"
import * as styles from "./list.module.scss"
import cx from "classnames"
const List = ({ type, data, direction }) => {
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
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link>Ask Speaker</Link>
      </li>
      <li>
        <Link>Webinar</Link>
      </li>
      <li>
        <Link>Challange</Link>
      </li>
      <li>
        <Link>Photobooth</Link>
      </li>
    </ul>
  )
}

export default List
