/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

/*
 export function addTodo(text) {
  return { type: ADD_TODO, text }
}
*/

export function addTodo(text) {
  return dispatch =>{
    fetch('https://prydancart.firebaseio.com/todos.json',{
      method: 'POST',
      headers:{'Content-Type' : 'application/json' }, 
      body: JSON.stringify({ 
        text: text,
        completed: false
      }) 
        


    }); 

    dispatch( { type: ADD_TODO, text }); 
  }; 

  
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}