import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import useTvShowsApi from '../hooks/useTvShowsApi';
import '../assets/styles/App.scss';

//import useInitialState from '../hooks/useInitialState';

// const API = 'https://api.jsonbin.io/b/5ea16a131299b9374234b2de/2/';

const Home = ({ myList, trends, originals}) => {
  // const initialState = useInitialState(API);
  return (
    <>
      <Search />
      {myList.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {myList.map(item =>
              <CarouselItem 
              key={item.id} 
              {...item} 
              isList
              />
            )}
          </Carousel>
        </Categories>
      )}
      <Categories title="Tendencias">
        <Carousel>
          {trends.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platfix">
        <Carousel>
          {originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
    </>
  );
}

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
