export function reducerForm(state,action){
    // console.log('state',state);
    // console.log('action',action);
    switch (action.type){
        case 'incremented_age': {
            return {
              name: state.name,
              age: state.age + 1
            };
          }
          case 'changed_name': {
            return {
              name: action.name,
              age: state.age
            };
          }
    }
    throw Error('Unknown action: ' + action.type);
}