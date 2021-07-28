import React from 'react';
import * as styles from "./button.module.scss";
import cx from 'classnames'

 const Button = ({children, type, size, cta, id}) => {
     let typeOfButton, sizeOfButton;
     switch (type) {
         case "primary":
            typeOfButton = styles.button_primary;    
             break;
         case "secondary":
            typeOfButton = styles.button_secondary;
                break;
         default:
             typeOfButton = ""
             break;
     }

     switch (size) {
        case "small":
           sizeOfButton = styles.button_sm;    
            break;
        case "large":
           sizeOfButton = styles.button_lg;
               break;
        case "xsmall": 
            sizeOfButton = styles.button_xsm;
            break;
        default:
            sizeOfButton = ""
            break;
    }

    return <button className={cx(styles.button, typeOfButton, sizeOfButton)} onClick={cta} id={id||''} >{children}</button>
}

export default Button;