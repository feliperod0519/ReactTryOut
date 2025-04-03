import { useEffect } from "react";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  
  useEffect(()=>{
      console.log('TIMER SET');
      setTimeout(()=>{
        onConfirm()
      },3000)
  },[])
  
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
    </div>
  );
}
