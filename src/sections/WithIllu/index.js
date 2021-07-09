import React, { useState } from "react"
import Section from "components/molecules/Section"
import Card from "components/templates/Card"
import Illu from "components/molecules/Illu"
import * as styles from './with-illu.module.scss'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Modal from 'components/templates/Modal'

const WithIllu = ({title, description, src, reverse, cta, section, term, user}) => {

  const [showTerm, setshowTerm] = useState(false)
  const [token, settoken] = useState(null)
  const handleTerm = (e) => {
    getToken(e.url, e)
  }

  const getToken = (url, e) => {

    let data = {
      "email" : user.email,
      "dob" : null,
      "name" : `${user.name} - (${user.NPK})`,
      "gender" : null
    }

    fetch(url, {
      method : "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data =>{ settoken(data.data.token); setshowTerm(e.term)});
  }
  
  return (
    <Section className={cx(styles.withillu, reverse ? styles.reverse : null)} id={section.name}>      
      <Card title={title} description={description} cta={cta} term={term} handleTerm={e => {handleTerm(e)}} />
      <Illu src={src} className={styles.withillu_illu} imgClass={styles.withillu_illu__img} />
      { term ?  <Modal hide={!showTerm} closed={() => {setshowTerm(false)} } >
        <Card className={styles.withillu__modal} title={term.title} description={term.description} cta={[{
          ...term.cta[0],
          "url" : term.cta[0].url.replace(`{{token}}`,token)
        }]} />
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

export default WithIllu
