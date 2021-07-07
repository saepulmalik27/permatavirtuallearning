import React from 'react';
import * as styles from './section.module.scss'
import cx from 'classnames';
import PropTypes from 'prop-types'

const Section = ({children, className}) => {
    return <section className={cx(styles.section, className)}>{children}</section>
}

export default Section;