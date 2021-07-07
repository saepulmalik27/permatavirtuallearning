import React from 'react';
import * as styles from './section.module.scss'
import cx from 'classnames';


const Section = ({children, className, id}) => {
    return <section className={cx(styles.section, className)} id={id}>{children}</section>
}

export default Section;