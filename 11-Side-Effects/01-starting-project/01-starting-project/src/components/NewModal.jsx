import { useRef, useEffect} from 'react';
import { createPortal } from 'react-dom';

function NewModal({ open,children }) {
  
  const dialog = useRef();

  useEffect(()=>{
    if (open){
        dialog.current.showModal();
    }
    else{
        dialog.current.close();
    }
  },[open])

  return createPortal(
    <dialog className="modal" ref={dialog}>  
    {/* open={open}> will not gray out the back because dialog.current.showModal */}
      {open ? children: null}
    </dialog>,
    document.getElementById('modal')
  );
}

export default NewModal;