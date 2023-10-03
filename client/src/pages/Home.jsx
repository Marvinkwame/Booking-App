import React from 'react'
import Hero from '../components/Home/Hero/Hero'
import Search from '../components/Home/Search/Search'
import Package from '../components/Home/Package/Package'
import Value from '../components/Home/Value/Value'
import Recommendation from '../components/Home/Recommendations/Recommendation'
import Article from '../components/Home/Article/Article'
import Subscribe from '../components/Home/Subscribe/Subscribe'
import PropertyType from '../components/Home/Property/PropertyType'

const Home = () => {
  return (
    <div>
      <Hero />
      <Search />
      <Package />
      <PropertyType />
      <Value />
      <Recommendation />
      <Article />
      <Subscribe />
    </div>
  )
}

export default Home