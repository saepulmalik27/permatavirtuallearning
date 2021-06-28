import React from "react";
import Link from 'gatsby-link';
import * as styles from './list.module.scss'
const List = ({tyoe, data}  ) => {
  return (
    <ul className={styles.list}>
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

export default List;
