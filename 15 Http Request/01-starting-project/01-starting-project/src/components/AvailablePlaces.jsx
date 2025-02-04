import Places from './Places.jsx';
import { useState, useEffect } from 'react';
import ErrorPage from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {

  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState(false);

  useEffect(()=>{
    async function fetchPlaces() {
      try{
        setIsFetching(true);
        const places = await fetchAvailablePlaces();
        
        navigator.geolocation.getCurrentPosition((position)=>{
          const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude,position.coords.longitude);
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        setError({message: error.message || 'Could not fetch places, please try again later'});
        setIsFetching(false);
      }
      // if (!response.ok){
      //   throw new Error('')
      // }
      
    }
    fetchPlaces();

    // fetch('http://localhost:3000/places').then((response)=>{
    //   return response.json()
    // }).then((resData)=>{
    //   setAvailablePlaces(resData.places)
    // });
  },[]);

  // fetch('http://localhost:3000/places').then((response)=>{
  //   return response.json()
  // }).fetch((resData)=>{
  //   setAvailablePlaces(resData.places)
  // });
  //This will create an infinite loop because we updated the state
  //it needs to be changed for an effect


  if (error){
    return <ErrorPage title="An Error occurred!" message={error.message} />
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading = {isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
