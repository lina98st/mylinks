import { useState } from 'react'
import Header from "./components/Header"
import ProfilePhoto from "./components/ProfilePhoto"
import ThemeToggle from "./components/ThemeToggle"
import LinksList from "./components/LinksList"
import "./App.css"


  return (
    <>
      <div className="app">
   <Header />
     <ProfilePhoto />
       <ThemeToggle />
         <LinksList />
      </div>
    </>
  )
}

export default App
