import { useCallback, useState, useEffect } from 'react';

import './star-rating.styles.css'

const StarRating = ({maxRating = 5, onChange = () => {}}) => {
  const [currentRating, setCurrentRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const setCurrentRatingClickHandler = useCallback((ratingValue) => {
    currentRating === ratingValue
      ? setCurrentRating(0)
      : setCurrentRating(ratingValue);
  }, [currentRating]);

  useEffect(() => { 
    onChange(currentRating);
  }, [currentRating, onChange])

  return (
    <div className='star-rating-container'>
      {
        [...Array(maxRating)].map((_, idx) => {
          const ratingValue = idx + 1;

          return (
            <p
              key={idx}
              className={`star ${ratingValue <= (hoverRating || currentRating) ? 'active' : ''}`}
              onClick={() => setCurrentRatingClickHandler(ratingValue)}
              onMouseEnter={() => setHoverRating(ratingValue)}
              onMouseLeave={() => setHoverRating(0)}
            >
              &#9733;
            </p>
          )
        })
      }
    </div>
  )
}

export default StarRating