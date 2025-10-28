import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Categories from './Categories'
import LatestJobs from './Latestjobs'
import Footer from './Footer'

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Categories/>
        <LatestJobs/>
        <Footer/>
    </div>
  )
}
