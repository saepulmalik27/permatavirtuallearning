import React from 'react';
import cx from 'classnames';
import * as styles from './carousel.module.scss'

const Carousel = ({ children, className, title}) => (
    <div>
        <h3>{title}</h3>
         <div className={cx(styles.carousel, className)}>
        {children}
    </div>
    </div>
   
)

export default Carousel;