import React from 'react';
import * as styles from './section.module.scss'
import cx from 'classnames';


const Section = ({children, className}) => {
    return <section className={cx(styles.section, className)}>{children}</section>
}

export default Section;