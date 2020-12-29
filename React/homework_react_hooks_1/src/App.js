import {useState, useEffect, useReducer} from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER': {
            return action.payload;
        }
        case 'CHANGE_USER_NAME': {
            return {...state, name: action.payload};
        }
        default: {
            console.error('Not valid action', action.type);
            return state;
        }
    }
}

const initialState = null;

function App() {
  let [counter, setCounter] = useState(0);
  let [user, dispatcher] = useReducer(reducer, initialState);

  let counterInc = () => {
    setCounter(currentValue => currentValue + 1);
  }

  let counterDecr = () => {
    setCounter(currentValue => currentValue - 1);
  }

  let counterReset = () => {
    setCounter(0);
  }

  let fetchUser = async id => {
      let user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
          .then(response => response.json());
      dispatcher({type: 'SET_USER', payload: user});
  }

  let changeUserName = () => {
      dispatcher({type: 'CHANGE_USER_NAME', payload: 'This is new name'});
  }
  useEffect(() => {
      fetchUser(counter);
  }, [counter]);

  return (
    <div>
      <button onClick={counterInc}>Increment</button>
      <button onClick={counterDecr}>Decrement</button>
      <button onClick={counterReset}>Reset</button>
      <button onClick={changeUserName}>Change User Name</button>
      <h1>Counter: {counter}</h1>
        {!!user && (
            <div>{user.id} - {user.name} - {user.email}</div>
        )}
    </div>
  );
}

export default App;
