import { useState } from 'react';
import Places from './Places.jsx';
import { useEffect } from 'react';

export default function AvailablePlaces({ onSelectPlace }) {

  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching,setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(()=>{
    async function fetchPlaces(){
      setIsFetching(true);
      try{
        const response = await fetch('http://localhost:3000/places');
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error('Failed to fetch places');
        }
        setAvailablePlaces(responseData.places);
        
      } catch (error) {
        setError({
          message:
            error.message || 'Could not fetch places, please try again later.',
        });
      }
      setIsFetching(false);      
    }
    fetchPlaces();
    // fetch('http://localhost:3000/places').then((response)=>
    // {
    //   return response.json()
    // }).then((responseData)=>{
    //   setAvailablePlaces(responseData.places)
    // })
  },[]);
  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading = {isFetching}
      fallbackText="No places available."
      loadingText="Fetching place data..."
      onSelectPlace={onSelectPlace}
    />
  );
}
