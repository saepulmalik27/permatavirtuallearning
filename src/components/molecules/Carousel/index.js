import React from "react"
import cx from "classnames"
import * as styles from "./carousel.module.scss"
import arrow_left from "src/images/icons/left.svg"
import arrow_right from "src/images/icons/right.svg"
import Illu from 'components/molecules/Illu'

const Carousel = ({ children, className, title }) => (
  <div>
    <div className={styles.header_container}>
      <h3 className={styles.header_container__title}>{title}</h3>
      <div className={styles.header_container__navigation}>
       <Illu src={arrow_left} className={styles.header_container__navigation___item} />
       <Illu src={arrow_right} className={styles.header_container__navigation___item} />
      </div>
    </div>
    <div className={cx(styles.carousel, className)}>{children}</div>
  </div>
)

export default Carousel
