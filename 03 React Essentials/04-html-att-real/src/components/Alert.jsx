import React from 'react';

export default function Alert(){
    const [deleteSelected, setDeleteSelected] = React.useState();

    let info = <div></div>
    
    if (deleteSelected){
        info = (<div data-testid="alert" id    ="alert">
                    <h2>Are you sure?</h2>
                    <p>These changes can't be reverted!</p>
                    <button>Proceed</button>
                </div>)
    }

    function handleDelete(v){
        React.setDeleteSelected(v);
    }

    return (
        <div>
          {info}
          <button onClick={()=>handleDelete(true)}>Delete</button>
        </div>    
      );
}