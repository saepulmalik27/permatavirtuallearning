import React from "react"
import Interweave from "interweave"
import cx from "classnames"
import * as styles from "./card.module.scss"
import * as Typo from "src/scss/modules/Typo.module.scss"
import Illu from "components/molecules/Illu"
import Button from "components/atoms/Button"

const Card = ({ title, description, cta, align }) => {
    console.log(description);
  let text_align = Typo.text_center
  switch (align) {
    case "center":
      text_align = Typo.text_center
      break
    case "right":
      text_align = Typo.text_right
      break
    default:
      text_align = null
      break
  }

  const renderTitle = () => {
    if (title.type === "image") {
      return <Illu src={title.content} className={styles.card_title__illu} />
    } else {
      return <h1 className={cx(Typo.lh_150, Typo.secondary)}>{title.content}</h1>
    }
  }

  return (
    <div className={styles.card}>
      <div className={cx(styles.card_title, text_align)}>
          {renderTitle()}
      </div>
      <div className={styles.card_body}>
        <article className={cx(Typo.size_20, Typo.lh_150, text_align)}>
          <Interweave content={description} />
        </article>
        {
          cta ? <div className={styles.card_body__cta}>
          <Button type={"primary"} size={"small"}>{cta}</Button>
        </div> : null
        }
        
      </div>
    </div>
  )
}

export default Card
