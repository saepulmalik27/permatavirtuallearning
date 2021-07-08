// React & Libraries
import React from 'react'
import cx from 'classnames'



// Styles
import * as styles from './accordion.module.scss'
import * as typo from 'src/scss/modules/Typo.module.scss'
import Illu from "components/molecules/Illu";

// Assets
import chevron_icon from 'src/images/icons/chevron.svg'


const Accordion = ({ index, activeQuestionIndex, object, clicked }) => {
    const isActive = index === activeQuestionIndex

    return (
        <div 
            className={styles.accordion} 
            role="button" 
            tabIndex={0} 
            onKeyDown={e => e.key === 'Enter' && clicked()} 
            onClick={clicked}
        >
            <div className={styles.header}>
                <div className={styles.title}>
                    <h5 className={cx( typo.fw_600, typo.lh_150)}>{object.title}</h5>
                </div>

                <div className={cx(styles.icon,isActive && styles.show)}>
                    <Illu src={chevron_icon} />
                </div>
            </div>

            <div className={cx(styles.description, isActive && styles.show)}>
                <h5 className={cx( typo.fw_400, typo.lh_150)} dangerouslySetInnerHTML={{ __html: object.description }}></h5>
            </div>
        </div>
    )
}

export default Accordion