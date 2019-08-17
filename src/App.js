import React from 'react';
import { Route, Link } from 'react-router-dom';
import NoteList from './NoteList/NoteList';
import './App.css';
import Folder from './Folder/Folder';
import dummyStore from './dummy-store';
import FolderPage from './FolderPage/FolderPage';
import NotePage from './NotePage/NotePage';
import NotefulContext from './NotefulContext';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...dummyStore
    }
  }

  render() {
    const contextValue = {
      ...dummyStore
    }
    
    return (
      <NotefulContext.Provider value={contextValue}>
        <div className='mainPage'>

          <header className='header'>
            <Link className='title' style={{ textDecoration: 'none' }} to='/'>Noteful</Link>
          </header>

          <Folder />

          <section>
            <Route 
              exact
              path='/folderpage/:id'
              component={FolderPage} />
          </section>

          <main>
            <Route 
              exact
              path='/' 
              component={NoteList} />
            <Route 
              exact
              path='/notepage/:id'
              component={NotePage} />  
          </main>

        </div>
      </NotefulContext.Provider>
      
    )
  }
}