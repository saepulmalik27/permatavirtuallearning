import React from "react"
import Section from "components/molecules/Section"
import Tabs from "components/templates/Tabs"
import CardEvent from "components/templates/CardEvent"
import Card from "components/templates/Card"
import Carousel from "components/molecules/Carousel"

const EventList = ({ title, description, contentType, contents }) => {
  const tabComponent = data => (
    <Tabs initialTab={data?.initialTab}>
      {data.tabs.map((tab, key) => (
        <div label={tab.label} key={key}>
          {tab.tab_content.map((content, id) => (
            <CardEvent key={id} {...content} />
          ))}
        </div>
      ))}
    </Tabs>
  )

  const listComponent = data =>
    data.map((list, key) => {
      return (
        <Carousel title={list.title} key={key}>
          {list.list_content.map((content, id) => {
            return (
                <CardEvent  {...content} direction={"column"} key={id} />
            )
          })}
        </Carousel>
      )
    })

  const renderContentType = (type, data) => {
    switch (type) {
      case "tabs":
        return tabComponent(data)
      case "lists":
        return listComponent(data)
      default:
        return null
    }
  }
  return (
    <Section>
      <Card title={title} description={description} />
      <br />
      <br />
      {renderContentType(contentType, contents)}
    </Section>
  )
}
export default EventList
