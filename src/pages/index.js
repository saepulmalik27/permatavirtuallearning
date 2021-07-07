import * as React from "react"
import About from "src/sections/About"
import WithIllu from "src/sections/WithIllu"
import ContentIllu from "src/sections/ContentIllu"
import EventList from "src/sections/EventList"
import Layout from "src/hoc/layout"
import Seo from "src/hoc/seo"
import permataJson from "content/permata.json"

const {
  hero, about, askSpeaker, permataGotTalent, virtualPhotoBoot
} = permataJson;
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <WithIllu
      title={hero.title}
      description={hero.description}
      src={hero.src}
      reverse={false}
      cta={hero.cta}
    />
    <About
      title={about.title}
      description={about.description}
      align={about.align}
    />
    <WithIllu
      title={askSpeaker.title}
      description={askSpeaker.description}
      src={askSpeaker.src}
      reverse={true}
      cta={askSpeaker.cta}
    />
    <WithIllu
      title={permataGotTalent.title}
      description={permataGotTalent.description}
      src={permataGotTalent.src}
      reverse={true}
    />
     <ContentIllu
      title={virtualPhotoBoot.title}
      subtitle={virtualPhotoBoot.subtitle}
      content={virtualPhotoBoot.content}
      cta={virtualPhotoBoot.cta}
    />
  </Layout>
)

export default IndexPage
