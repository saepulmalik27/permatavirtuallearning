import React, {Component} from 'react'
import Illu from "components/molecules/Illu";
import * as styles from "./input.module.scss";
import cx from 'classnames'
 class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onChange && this.props.onChange(e.target.value);
  }
  render() {
    const {type, value, label, icon, disabled} = this.props
    return (
      <div className={cx(styles.inputgroup, this.props.className)}>
              <Illu src={icon} className={styles.inputgroup_illu}/>
               <input type={type} value={value} name={label} placeholder={label} onChange={this.handleChange} disabled={disabled} />
           </div>
    )
  }
}

export default Input;
