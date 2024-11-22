import { useRef, useState, useEffect, useCallback } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import NewModal from './components/NewModal.jsx';

import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';

import {sortPlacesByDistance} from './loc.js';

const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
const storedPlaces = storedIds.map((id)=>AVAILABLE_PLACES.find((place)=>place.id === id));

function App() {

  //const modal = useRef(); //to be replaced by effect
  const selectedPlace = useRef();
  const [modalIsOpen,setModalIsOpen] = useState(false);
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );
      setAvailablePlaces(sortedPlaces);
      // console.log(position.coords.latitude);
      // console.log(position.coords.longitude);
    });
  }, []);

  function handleStartRemovePlace(id) {
    //modal.current.open(); //to be replaced by effect
    setModalIsOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    //modal.current.close(); //to be replaced by effect
    setModalIsOpen(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });
    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    if (storedIds.indexOf(id)===-1){
      localStorage.setItem('selectedPlaces',JSON.stringify([id, ...storedIds]))
    }
    
  }

  const handleRemovePlace = useCallback(
        function handleRemovePlace() {
            setPickedPlaces((prevPickedPlaces) =>
            prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
        );
        //modal.current.close(); //to be replaced by effect
        setModalIsOpen(false);
        const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
        localStorage.setItem('selectedPlaces',JSON.stringify(storedIds.filter((id)=> id != selectedPlace.current)));
  },[]);

  return (
    <>
      {/* <Modal ref={modal}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal> */}

      {
        /*
        Modal is replaced by NewModal (effect version)
        */
      }

      <NewModal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}  //less elegant solucion
          onConfirm={handleRemovePlace}
        />
      </NewModal>

      {/* <NewModal open={modalIsOpen} onClose={handleStopRemovePlace}>
        {modalIsOpen && <DeleteConfirmation
          onCancel={handleStopRemovePlace}  //less elegant solucion
          onConfirm={handleRemovePlace}
        />}
      </NewModal> */}

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText="Sorting places by distance..."
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
