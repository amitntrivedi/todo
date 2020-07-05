import { createStore } from 'redux';
import todoApp from './reducers';

const myStore =() =>{

    const store = createStore(todoApp); 
}

export default myStore; 