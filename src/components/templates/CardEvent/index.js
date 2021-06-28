import React from "react"
import Illu from "components/molecules/Illu"
import Interweave from "interweave"
import Button from "components/atoms/Button"
import * as styles from "./card-event.module.scss"

const CardEvent = ({ src, event }) => {
  return (
    <div className={styles.cardevent}>
      <Illu src={src} className={styles.cardevent_illu} />
      <div className={styles.cardevent_event}>
        <div className={styles.cardevent_event__title}>
          <h6>{event.title}</h6>
        </div>
        <article className={styles.cardevent_event__description}>
          <Interweave content={event.content} />
        </article>
      </div>
      <div className={styles.cardevent_cta}>
        <Button size={"small"}>Join Room</Button>
        <br />
        <Button size={"small"}>Take Quiz</Button>
      </div>
    </div>
  )
}

export default CardEvent
