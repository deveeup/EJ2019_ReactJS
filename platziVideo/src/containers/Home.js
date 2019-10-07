import React, { useState, useEffect } from 'react';
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import Item from '../components/CarouselItem'
import '../assets/styles/App.scss';
import initialState from '../hooks/useInitialState'

const Home = () => {
  const data = initialState('http://localhost:3000/initialState');
  return (
    <>
      <Search/>
      {data.mylist.length > 0 &&
        <Categories title="Mi lista">
          <Carousel>
            <Item/>
          </Carousel>
        </Categories>
      }
      <Categories title="Tendencias">
        <Carousel>
          {
          data.trends.map(item => 
            <Item key={item.id} {...item}/>
          )

          }
        </Carousel>
      </Categories>
    </>
  )
}

export default Home;