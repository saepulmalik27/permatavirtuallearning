import React from "react"
import Interweave from "interweave"
import cx from "classnames"
import * as styles from "./card.module.scss"
import * as Typo from "src/scss/modules/Typo.module.scss"
import Illu from "components/molecules/Illu"
import Button from "components/atoms/Button"
import PropTypes from 'prop-types'

const Card = ({ title, description, cta, align }) => {
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

  let title_style = Typo.neon
  if (title.style) {
    switch (title.style) {
      case "neon":
        title_style = Typo.neon
        break;
      default:
        title_style = null
        break;
    }
  }

  const renderTitle = () => {
    if (title.type === "image") {
      return <Illu src={title.content} className={styles.card_title__illu} />
    } else {
      return <h1 className={cx(Typo.lh_150, title_style)}>{title.content}</h1>
    }
  }

  const renderCTA = (cta) => {
    return cta.map((val, key) => {
      return <Button type={"primary"} size={"small"} key={key} cta={() => {window.open(val.url, '_blank')}} >{val.title}</Button>
    })
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
         {renderCTA(cta)}
        </div> : null
        }
        
      </div>
    </div>
  )
}

Card.defaultProps = {
  title : {"type" : "text", "content" : "lorem", "style" : null},
  description : "<p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus omnis aut quae non et illo in fuga, amet voluptates esse eaque ea repellat, aspernatur tempora vero iusto itaque, praesentium facilis. </p>",
  cta : [],
  align : null
}

Card.propTypes = {
  title : PropTypes.object,
  description: PropTypes.string,
  cta : PropTypes.array,
  align : PropTypes.string
}

export default Card
