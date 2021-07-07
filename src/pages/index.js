import * as React from "react"
import About from "src/sections/About"
import WithIllu from "src/sections/WithIllu"
import ContentIllu from "src/sections/ContentIllu"
import EventList from "src/sections/EventList"
import Layout from "src/hoc/layout"
import Seo from "src/hoc/seo"
import dataJson from "content/permata.json"

const IndexPage = () => {
  const renderSections = (val, key) => {
    if (val.section) {
      switch (val.section.component) {
        case "WithIllu":
          return <WithIllu {...val} key={key} />
        case "ContentIllu":
          return <ContentIllu {...val} key={key}  />
        case "About":
          return <About {...val} key={key} />
        case "EventList":
          return <EventList {...val} key={key}/>
        default:
          return null
      }
    } else {
      return null
    }
  }

  
  return (
    <Layout navigation={dataJson.navigation}>
      <Seo title="Home" />
      {dataJson.sections.map((val, key) => {
        return renderSections(val, key)
      })}
    </Layout>
  )
}


export default IndexPage
