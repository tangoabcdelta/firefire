import React from 'react';
import { EventEmitter } from 'events';
import dispatcher from './dispatcher';

class ToDoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id: 1,
        text: 'Go Shopping',
        complete: false
      },
      {
        id: 2,
        text: 'Pay Bills',
        complete: false
      },
      {
        id: 3,
        text: 'Pay Water Bill',
        complete: false
      }
    ];
  }
  
  getAll() {
    return this.todos;
  }
  
  createToDo(text) {
    this.todos.push({
        text,
        complete: false,
        id: Date.now()
    });
    
    
    // console.log('createToDo called', arguments, this.todos);
    this.emit('change');
  }
  
  deleteToDo(id) {
    console.log('delete called', id);
  }
  
  handleActions({type, data}) {
    console.log('Todo store received an action:', type, data);
    switch(type) {
        case 'CREATE':
        this.createToDo(data);
        break;
        
        case 'DELETE':
        this.deleteToDo(data);
        break;

        case 'GETALL':
        this.getAll();
        break;
        
    }
  }

}


const toDoStore = new ToDoStore;
dispatcher.register(toDoStore.handleActions.bind(toDoStore));
//dispatcher.dispatch;

export default toDoStore;
