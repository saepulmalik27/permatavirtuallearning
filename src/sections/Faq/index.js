import React, {useState} from 'react'
import Accordion from 'components/molecules/Accordion'
import * as typo from "src/scss/modules/Typo.module.scss"
import Section from 'components/molecules/Section'
import * as styles from "./faq.module.scss";

const Faq = ({section, questions}) => {
    const [activeQuestionIndex, setactiveQuestionIndex] = useState(-1)
    return (
        <Section id={section?.name}>
            <div className={styles.faq_title}>
            <h1 className={typo.neon}>Frequently Asked Question</h1>
            </div>
            <div className={styles.faq_content}>
                {questions.map((question,key) => {
                   return <Accordion index={key} key={key} activeQuestionIndex={activeQuestionIndex} object={question} clicked={() => ( setactiveQuestionIndex( activeQuestionIndex === key ? -1 : key) )}  />
                })}
            </div>
            
        </Section>
    )
}

export default Faq;
