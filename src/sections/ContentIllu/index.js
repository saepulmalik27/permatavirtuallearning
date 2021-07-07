import React from "react"
import cx from 'classnames'

import Section from "components/molecules/Section"
import Illu from "components/molecules/Illu"
import Button from "components/atoms/Button"

import * as Typo from 'src/scss/modules/Typo.module.scss'
import * as styles from './content-illu.module.scss'

const ContentIllu = ({ title, subtitle, cta, content, section }) => {

  const renderCTA = (cta) => {
    return cta.map((val, key) => {
      return <Button type="primary" size="small" key={key}>{val.title}</Button>
    })
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

  return (
    <Section id={section.name}>
      <div className={cx(Typo.text_center, styles.contentillu_title)}>
        <h1 className={cx(Typo.lh_150, title_style )}>{title.content}</h1>
      </div>
      <div className={cx(Typo.text_center, styles.contentillu_subtitle)}>
        <h4 className={cx()}>{subtitle}</h4>
      </div>

      <div className={styles.contentillu_content}>
        {content.map((val, key) => {
          return <Illu className={styles.contentillu_content_illu} src={val.src} key={key} />
        })}
      </div>
      <div className={styles.contentillu_cta}>
        {renderCTA(cta)}
      </div>
    </Section>
  )
}

export default ContentIllu
