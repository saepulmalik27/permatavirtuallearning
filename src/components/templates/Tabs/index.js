import React, { useState, useEffect } from "react"
import * as styles from "./tabs.module.scss"
import cx from 'classnames'

const Tabs = ({ children, initialTab }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label)

  const handleClick = (e, newActiveTab) => {
    e.preventDefault()
    setActiveTab(newActiveTab)
  }

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab)
    }
  }, [])

  return (
    <div className={styles.tabs}>
      <ul className={styles.tabs_list}>
        {children.map(tab => {
          const label = tab.props.label
          return (
            <li key={label} onClick={e => handleClick(e, label)} className={cx(label === activeTab ?  styles.current : "", styles.tabs_list__item)}>
              {label}
            </li>
          )
        })}
      </ul>

      <div className={styles.tabs_content}>
        {children.map(one => {
          if (one.props.label === activeTab) {
            return <div key={one.props.label} >{one.props.children}</div>
          }
        })}
      </div>
    </div>
  )
}

export default Tabs
