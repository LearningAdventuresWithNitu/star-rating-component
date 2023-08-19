import { useState } from 'react';

import './star-rating.styles.css'

// functional component for star rating
const StarRating = ({maxRating = 5}) => {
  // we get access to the value that we are trying to store as well as the setter
  // intial value should be zero -- like the intial rating will be zero and the users sets it after
  // long term values - for example - a user has already given the rating and we don't want it to reset when they come back - we don't have session management or long term management at this point. Can be done in future, can be passed into the component and use it.
  // added reset 
  // now hover rating
  const [currentRating, setCurrentRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const setCurrentRatingClickHandler = (ratingValue) => {
    currentRating === ratingValue 
    ? setCurrentRating(0)
    : setCurrentRating(ratingValue);
  }

  // store what is being clicked
  // store the rating value - capture it on click and store it in the component itself
  // we use useState hook to store any kind of local component state
  
  return (
    <div className='star-rating-container'>
      current rating: { currentRating }
      {
        // stars
        // map over an array to show the stars
        // values are undefined, but we aren't using them and instead using the index
        [...Array(maxRating)].map((_, idx) => {
          const ratingValue = idx + 1;
          
          return (
            <p 
              key={idx} 
              className={`star ${ratingValue <= (hoverRating || currentRating)? 'active': ''}`}
              onClick={() => setCurrentRatingClickHandler(ratingValue)}
              onMouseEnter = {() => setHoverRating(ratingValue)}
              onMouseLeave = {() => setHoverRating(0)}
              >
              {ratingValue}
            </p>
          )
        })
      }
    </div>
  )
}

export default StarRating