import React from 'react';
import { Route, Link } from 'react-router-dom';
import NoteList from './NoteList/NoteList';
import './App.css';
import Folder from './Folder/Folder';
import FolderPage from './FolderPage/FolderPage';
import NotePage from './NotePage/NotePage';
import NotefulContext from './NotefulContext';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: [],
      notes: []
    }
  }

  componentDidMount() {
    Promise.all([
        fetch('http://localhost:9090/folders'),
        fetch('http://localhost:9090/notes')
    ])
        .then(([foldersData, notesData]) => {
            return Promise.all([foldersData.json(), notesData.json()])
        })
        .then(([folders, notes]) => {
            this.setState({
              folders,
              notes
            })
            console.log(this.state.folders, this.state.notes)
        })
        .catch(e => {
          console.error({e})
        })
  };

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes
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