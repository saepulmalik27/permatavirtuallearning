import React, { useState } from "react"
import Section from "components/molecules/Section"
import Card from "components/templates/Card"
import Illu from "components/molecules/Illu"
import * as styles from './with-illu.module.scss'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Modal from 'components/templates/Modal'

const IndividualLearning = ({title, description, src, reverse, cta, section, term}) => {

  const [showTerm, setshowTerm] = useState(false)
  const []
  const handleTerm = (e) => {
    setshowTerm(e.term)
    fetch(e.url, {
      method : "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"email": "saepulalmalik@gmail.com",
      "dob": null,
      "name": "(mandiri) - saepul malik",
        "gender": null})
    })
    .then(response => response.json())
    .then(data => console.log(data.data));
  }

  
  
  return (
    <Section className={cx(styles.withillu, reverse ? styles.reverse : null)} id={section.name}>      
      <Card title={title} description={description} cta={cta} term={term} handleTerm={e => {handleTerm(e)}} />
      <Illu src={src} className={styles.withillu_illu} imgClass={styles.withillu_illu__img} />
      { term ?  <Modal hide={!showTerm}>
        <Card className={styles.withillu__modal} title={term.title} description={term.description} cta={term.cta} />
      </Modal>  : null}
    </Section>
  )
}

WithIllu.defaultProps = {
  reverse : false
}

WithIllu.propTypes = {
  reverse : PropTypes.bool
}

export default IndividualLearning
