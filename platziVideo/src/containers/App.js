import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import Item from '../components/CarouselItem'
import Footer from '../components/Footer'
import '../assets/styles/App.scss';
import initialState from '../hooks/useInitialState'

const App = () => {
  const data = initialState('http://localhost:3000/initialState');
  return (
    <div className="App">
      <Header/>
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
      <Footer/>
    </div>
  )
}

export default App;