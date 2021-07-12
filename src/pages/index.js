import React, {useState, useCallback, useEffect} from "react"
import About from "src/sections/About"
import WithIllu from "src/sections/WithIllu"
import ContentIllu from "src/sections/ContentIllu"
import EventList from "src/sections/EventList"
import Layout from "src/hoc/layout"
import Seo from "src/hoc/seo"
import Modal from "components/templates/Modal";
import { permata } from "content/permata.js"
import {getFromLocalStorage} from 'src/utils/helpers'
import Faq from "src/sections/Faq"
import Login from "components/templates/Login";


const IndexPage = () => {
  const [closeModal, setcloseModal] = useState(true)
  const [isLogin, setisLogin] = useState(false)
  const [user, setuser] = useState(null)
  const renderSections = (val, key) => {
    if (val.section) {
      switch (val.section.component) {
        case "WithIllu":
          return <WithIllu {...val} key={key} user={user} />
        case "ContentIllu":
          return <ContentIllu {...val} key={key}  />
        case "About":
          return <About {...val} key={key} />
        case "EventList":
          return <EventList {...val} key={key}/>
        case "Faq" : 
        return <Faq {...val} key={key} />
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
    <Layout navigation={permata.navigation}>
      <Seo title="Home" />
      {permata.sections.map((val, key) => {
        if (user && (val.section.name === 'askSpeaker' || val.section.name === 'hero')) {
          val.cta[0].url = val.cta[0].url.replace(`{{npk}}`,user.NPK)
          val.cta[0].url = val.cta[0].url.replace(`{{name}}`,user.name)
          val.cta[0].url = val.cta[0].url.replace(`{{email}}`,user.email)
        }
        return renderSections(val, key)
      })}
     
      <Modal hide={closeModal} >
      <Login closed={ hanldeClosed }/>
      </Modal>
    </Layout>
  )
}


export default IndexPage
