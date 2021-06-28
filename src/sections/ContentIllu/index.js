import React from "react"
import cx from 'classnames'

import Section from "components/molecules/Section"
import Illu from "components/molecules/Illu"
import Button from "components/atoms/Button"

import * as Typo from 'src/scss/modules/Typo.module.scss'
import * as styles from './content-illu.module.scss'

const ContentIllu = ({ title, subtitle, cta, content }) => {
  return (
    <Section>
      <div className={cx(Typo.text_center, styles.contentillu_title)}>
        <h1 className={cx(Typo.lh_150, Typo.secondary)}>{title}</h1>
      </div>
      <div className={cx(Typo.text_center, styles.contentillu_subtitle)}>
        <h4>{subtitle}</h4>
      </div>

      <div className={styles.contentillu_content}>
        {content.map((val, key) => {
          console.log(val)
          return <Illu className={styles.contentillu_content_illu} src={val.src} key={key} />
        })}
      </div>
      <div className={styles.contentillu_cta}>
        <Button type="primary" size="small">{cta}</Button>
      </div>
    </Section>
  )
}

export default ContentIllu
