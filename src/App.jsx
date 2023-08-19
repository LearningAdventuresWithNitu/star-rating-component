import { useState } from 'react';

import './App.css'

import StarRating from './star-rating.component.jsx'

export default function App() {
  const [productRating, setProductRating] = useState(0);
  
  return (
    <main>
      Current Product Rating: {productRating}
      <StarRating maxRating={5} onChange={setProductRating}/>
    </main>
  )
}