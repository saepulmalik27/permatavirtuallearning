import React from 'react';
import * as styles from './footer.module.scss'

const Footer = ({creator}) => {
    return (
        <footer className={styles.footer}>
            {/* © {new Date().getFullYear()}, {creator} */}
             </footer>
    )
}

export default Footer;