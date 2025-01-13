import React from 'react'
import "../pages/Home.css"
import { Sidebar } from '../components/Sidebar'
import Feed from '../components/Feed'

export const Home = ({sidebar}) => {
  return (
    <>
        <Sidebar sidebar={sidebar}/>
        <div className={`container ${sidebar?"":"larfe-conatiner"}`}>
          <Feed/>
        </div>
    
    </>
  )
}
