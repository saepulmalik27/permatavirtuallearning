import * as React from "react"
import About from "src/sections/About"
import WithIllu from "src/sections/WithIllu"
import ContentIllu from "src/sections/ContentIllu"
import EventList from "src/sections/EventList"
import Layout from "src/hoc/layout"
import Seo from "src/hoc/seo"

import askspeakersrc from "src/images/illu/speaker_illu.png"
import digitalaudiosrc from "src/images/illu/audio_illu.png"
import herosrc from "src/images/illu/hero_illu.png"
import herotitle from "src/images/illu/hero-title_illu.png"
import vpb_1 from "src/images/illu/virtual-photoboot1_illu.png"
import vpb_2 from "src/images/illu/virtual-photoboot2_illu.png"
import dummy_1 from "src/images/dummy_1.png"
import dummy_2 from "src/images/dummy_2.png"
import dummy_3 from "src/images/dummy_3.png"

const hero = {
  title: { type: "image", content: herotitle },
  description:
    "<p> Permata Virtual Learning Week <br/> Lorem Ipsum  </p> <br/> <p><b>13 - 15 July 2021 | 10.00 - 17.00 WIB </b></p> ",
  src: herosrc,
}

const about = {
  title: { type: "text", content: "Tentang Permata Virtual Learning Week" },
  description:
    "<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sed nec at. Mauris mattis malesuada urna, aliquam sit adipiscing dui egestas. Eget sit dui dictumst consectetur commodo sit mauris in. Nunc, sed arcu urna ut ultrices nunc elit, arcu. Integer sit diam neque orci purus a urna. Quisque id nascetur sit et eget sollicitudin non. Quis cursus pellentesque ut orci tristique tristique rutrum faucibus.</p> <br/> <br/> <p>Cursus aliquet in duis sit sed. Aenean est quis varius tempus vel amet euismod et. Tempus amet congue adipiscing nunc amet blandit adipiscing. Turpis senectus ultrices ornare dui etiam. Lectus eget a ipsum at sed egestas faucibus tellus velit. </p>",
  align: "center",
}

const askSpeaker = {
  title: { type: "text", content: "Ask Speaker" },
  description:
    "<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sed nec at. Mauris mattis malesuada urna, aliquam sit adipiscing dui egestas. Eget sit dui dictumst consectetur commodo sit mauris in. Nunc, sed arcu urna ut ultrices nunc elit, arcu. Integer sit diam neque orci purus a urna. Quisque id nascetur sit et eget sollicitudin non. Quis cursus pellentesque ut orci tristique tristique rutrum faucibus.</p> ",
  src: askspeakersrc,
  cta : "Submit"
}

const agendaWebinar = {
  title: {type : "text" ,content : "Agenda Webinar"},
  description:
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sed nec at. Mauris mattis malesuada urna, aliquam sit adipiscing dui egestas. Eget sit dui dictumst consectetur commodo sit mauris in. Nunc, sed arcu urna ut ultrices nunc elit, arcu.</p>",
  eventList: {
    initialTab: "13 July 2021",
    tabs: [
      {
        label: "13 July 2021",
        tab_content: [
          {
            src: dummy_1,
            event: {
              title:
                "Nama Event MLC 001 Maximum copy untuk judul dalam 2 baris",
              content:
                "<p> <b> Tanggal & Waktu </b> : 3 June 2021, 13.00 -14.00 WIB <br/>  <b>Speaker</b> : Speaker Name & Name </p>",
            },
          },
          {
            src: dummy_3,
            event: {
              title:
                "Nama Event MLC 001 Maximum copy untuk judul dalam 2 baris",
              content:
                "<p> <b> Tanggal & Waktu </b> : 3 June 2021, 13.00 -14.00 WIB <br/>  <b>Speaker</b> : Speaker Name & Name </p>",
            },
          },
          {
            src: dummy_2,
            event: {
              title:
                "Nama Event MLC 001 Maximum copy untuk judul dalam 2 baris",
              content:
                "<p> <b> Tanggal & Waktu </b> : 3 June 2021, 13.00 -14.00 WIB <br/>  <b>Speaker</b> : Speaker Name & Name </p>",
            },
          },
        ],
      },
      {
        label: "14 July 2021",
        tab_content: [
          {
            src: dummy_2,
            event: {
              title:
                "Nama Event MLC 001 Maximum copy untuk judul dalam 2 baris",
              content:
                "<p> <b> Tanggal & Waktu </b> : 3 June 2021, 13.00 -14.00 WIB <br/>  <b>Speaker</b> : Speaker Name & Name </p>",
            },
          },
        ],
      },
      {
        label: "15 July 2021",
        tab_content: [
          {
            src: dummy_3,
            event: {
              title:
                "Nama Event MLC 001 Maximum copy untuk judul dalam 2 baris",
              content:
                "<p> <b> Tanggal & Waktu </b> : 3 June 2021, 13.00 -14.00 WIB <br/>  <b>Speaker</b> : Speaker Name & Name </p>",
            },
          },
        ],
      },
    ],
  },
}

const digitalAudio = {
  title: { type: "text", content: "Digital Audio" },
  description:
    "<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sed nec at. Mauris mattis malesuada urna, aliquam sit adipiscing dui egestas. Eget sit dui dictumst consectetur commodo sit mauris in. Nunc, sed arcu urna ut ultrices nunc elit, arcu. Integer sit diam neque orci purus a urna. Quisque id nascetur sit et eget sollicitudin non. Quis cursus pellentesque ut orci tristique tristique rutrum faucibus.</p> ",
  src: digitalaudiosrc,
  cta : "Submit"
}

const permataGotTalent = {
  title: { type: "text", content: "Permata Got Talent" },
  description:
    "<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sed nec at. Mauris mattis malesuada urna, aliquam sit adipiscing dui egestas. Eget sit dui dictumst consectetur commodo sit mauris in. Nunc, sed arcu urna ut ultrices nunc elit, arcu. Integer sit diam neque orci purus a urna. Quisque id nascetur sit et eget sollicitudin non. Quis cursus pellentesque ut orci tristique tristique rutrum faucibus.</p> ",
  src: digitalaudiosrc,
}

const virtualPhotoBoot = {
  title: "Give Your Best Smile",
  subtitle: "Try virtual photobooth",
  content: [{ src: vpb_1 }, { src: vpb_2 }],
  cta: "Take Your Photo",
}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <WithIllu
      title={hero.title}
      description={hero.description}
      src={hero.src}
      reverse={false}
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
    <EventList title={agendaWebinar.title} description={agendaWebinar.description} eventList={agendaWebinar.eventList} />
    <WithIllu
      title={digitalAudio.title}
      description={digitalAudio.description}
      src={digitalAudio.src}
      reverse={false}
      cta={digitalAudio.cta}
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
