import React from "react"
import Section from "components/molecules/Section"
import Tabs from "components/templates/Tabs"
import CardEvent from "components/templates/CardEvent"
import Card from "components/templates/Card"


const EventList = ({title, description, eventList}) => {
  return (
    <Section>
      <Card title={title} description={description} />
      <br /><br />
      <Tabs initialTab={eventList?.initialTab}>
        {
          eventList.tabs.map((tab, key) => 
          (<div label={tab.label} key={key}>
            {tab.tab_content.map((content, id) => (<CardEvent key={id}
            src={content.src}
            event={content.event}
          />))}
          
        </div>))
        }
      </Tabs>
    </Section>
  )
}
export default EventList
