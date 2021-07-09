import React,{useRef} from "react"
import cx from "classnames"
import * as styles from "./carousel.module.scss"
import arrow_left from "src/images/icons/left.svg"
import arrow_right from "src/images/icons/right.svg"

const Carousel = ({ children, className, title }) => {
  const ref = useRef(null)
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <div>
      <div className={styles.header_container}>
        <h3 className={styles.header_container__title}>{title}</h3>
        <div className={styles.header_container__navigation}>
          <div
            className={styles.header_container__navigation___item}
            onClick={() => scroll(-600)}
          >
            <img src={arrow_left} alt="" />
          </div>
          <div
            className={styles.header_container__navigation___item}
            onClick={() => scroll(600)}
          >
            <img src={arrow_right} alt="" />
          </div>
        </div>
      </div>
      <div className={cx(styles.carousel, className)} ref={ref} >{children}</div>
    </div>
  )
}

export default Carousel
