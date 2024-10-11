import {forwardRef,useImperativeHandle, useRef} from 'react';

const NewForm = forwardRef(function Form({},ref) {
    const formHandle = useRef();
    useImperativeHandle(ref, () => {
        return{
            clear(){ 
                formHandle.current.reset();
            }
        };
    });

    return (
      <form ref={formHandle}>
        <p>
          <label>Name</label>
          <input type="text" />
        </p>
  
        <p>
          <label>Email</label>
          <input type="email" />
        </p>
        <p id="actions">
          <button>Save</button>
        </p>
      </form>
    );
  });
export default NewForm;