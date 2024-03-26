import React from 'react'
import MainSegment from '../../Segments/MainSegment/mainSegment'
import LastPosts from '../../Segments/LastPosts/lastPosts'
import './mainPage.css'
import Footer from '../../Components/Footer/footer'

const MainPage = () => {
  return (
    <div className='main-page-cover'>
        <MainSegment />
        <div className='lastposts-cover'>
        <LastPosts />
        </div>
        <Footer />
        
    </div>
  )
}

export default MainPage