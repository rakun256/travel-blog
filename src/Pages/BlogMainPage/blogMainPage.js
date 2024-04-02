import React from 'react'
import BlogCard from '../../Components/BlogCard/blogCard'
import { Helmet } from 'react-helmet'

const BlogMainPage = () => {
  return (
    <div>
      <Helmet>
      <title>Blog - Adventurista</title>
        <meta name="description" content="Welcome, adventurers! We are Adventurista, a group of mathematics
          engineering students who have embarked on journeys to explore the
          world. We have a passion for discovering the captivating beauty of
          nature, the profound traces of history, and the richness of cultures.
          Every moment we open the door to a new adventure, we feel the
          excitement in our hearts, and we're here to share that excitement with
          you. Adventurista was founded with the aim of sharing our adventures
          that take us to unique destinations around the globe. Here you can
          find our experiences, inspiring stories, and practical tips gathered
          during our travels. Our articles serve as guides for travel
          enthusiasts, designed to inspire those who wish to explore new places.
          We emphasize not only the importance of geographical exploration but
          also the significance of building bridges between people and engaging
          in cultural exchange. Because we believe that traveling not only
          allows us to see new places but also brings us closer together as
          global citizens. Welcome to Adventurista. Are you ready to explore the
          world together?" />
      </Helmet>
        <BlogCard />
    </div>
  )
}

export default BlogMainPage