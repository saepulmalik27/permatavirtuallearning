import React from "react"
import Section from "components/molecules/Section"
import Card from "components/templates/Card"
import Illu from "components/molecules/Illu"
import * as styles from './with-illu.module.scss'
import cx from 'classnames'
import PropTypes from 'prop-types'

const WithIllu = ({title, description, src, reverse, cta, section}) => {


  return (
    <Section className={cx(styles.withillu, reverse ? styles.reverse : null)} id={section.name}>      
      <Card title={title} description={description} cta={cta} isLogin />
      <Illu src={src} className={styles.withillu_illu} imgClass={styles.withillu_illu__img} />
    </Section>
  )
}

WithIllu.defaultProps = {
  reverse : false
}

WithIllu.propTypes = {
  reverse : PropTypes.bool
}

export default WithIllu
