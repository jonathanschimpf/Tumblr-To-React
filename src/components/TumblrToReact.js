import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PhotoCard from './PhotoCard';
import data from '../captions-and-images.json';
import './TumblrToReact.css'; // stylesheet

function TumblrToReact() {
  return (
    <InfiniteScroll
      className="infinite-scroll-container" // styling
      dataLength={data.length}
      next={() => {}}
      hasMore={false}
      endMessage={
        <p className="end-message">
          The end! You have made it all the way to photos that were made in 2010. Thank you.
        </p>
      }
    >
      {data.map((item, index) => (
        <PhotoCard key={index} src={item.image} caption={item.caption} />
      ))}
    </InfiniteScroll>
  );
}

export default TumblrToReact;
