import React from "react"
import * as styles from "./decoration.module.scss"

import bubletriangle from "src/images/decoration/bubletriangle.svg"
import bublegreenblue from "src/images/decoration/bublegreenblue.png"
// import horizontalline from 'src/images/decoration/horizontalline.svg'
import triangletriple from "src/images/decoration/triangletriple.svg"
import verticalline from "src/images/decoration/verticalline.svg"
import Illu from "components/molecules/Illu"

const Decoration = () => {
  return (
    <div className={styles.decoration}>
      <div className="decoration_wrapper">
        <Illu className={styles.decoration_bubletriangle} src={bubletriangle} />
        <Illu
          className={styles.decoration_triangletriple}
          src={triangletriple}
        />
        <Illu
          className={styles.decoration_bublegreenblue}
          src={bublegreenblue}
        />
        <Illu className={styles.decoration_verticalline} src={verticalline} />
      </div>
    </div>
  )
}

export default Decoration
