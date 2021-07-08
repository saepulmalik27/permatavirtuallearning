import React, {useState, useCallback, useEffect} from "react"
import About from "src/sections/About"
import WithIllu from "src/sections/WithIllu"
import ContentIllu from "src/sections/ContentIllu"
import EventList from "src/sections/EventList"
import Layout from "src/hoc/layout"
import Seo from "src/hoc/seo"
import Modal from "components/templates/Modal";
import dataJson from "content/permata.json"
import {getFromLocalStorage} from 'src/utils/helpers'

const IndexPage = () => {
  const [closeModal, setcloseModal] = useState(true)
  const [isLogin, setisLogin] = useState(false)
  const [user, setuser] = useState(null)
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

  useEffect(() => {
    getLoginData()
  }, [isLogin])

  const  getLoginData = () => {
    let isLogin = getFromLocalStorage();

    if (isLogin != null) {
      
      setisLogin(true)
      setcloseModal(true)
      setuser(isLogin)
    }else{
      setisLogin(false)
      setcloseModal(false)
      setuser(null)
    }
  }

  const hanldeClosed =  useCallback(
    () => {
      setcloseModal(true)
      setisLogin(true)
    },
    [closeModal],
  )
  
  return (
    <Layout navigation={dataJson.navigation}>
      <Seo title="Home" />
      {dataJson.sections.map((val, key) => {
        if (user && (val.section.name === 'askSpeaker' || val.section.name === 'hero')) {
          console.log("hallo");
          val.cta[0].url = val.cta[0].url.replace(`{{npk}}`,user.NPK)
          val.cta[0].url = val.cta[0].url.replace(`{{name}}`,user.name)
          val.cta[0].url = val.cta[0].url.replace(`{{email}}`,user.email)
        }
        return renderSections(val, key)
      })}
      <Modal hide={closeModal} closed={ hanldeClosed }/>
    </Layout>
  )
}


export default IndexPage
