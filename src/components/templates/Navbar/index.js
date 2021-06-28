import React from 'react';
import Button from 'components/atoms/Button'
import List from 'components/molecules/List'

import * as styles from './navbar.module.scss'

const Navbar = () => {
    return <nav className={styles.navbar}>
        <List/>
        <Button type={"primary"} size={"small"}>Daftar</Button>
        
    </nav>
}

export default Navbar;