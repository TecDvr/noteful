import React from 'react';
import { Route, Link } from 'react-router-dom';
import NoteList from './NoteList/NoteList';
import './App.css';
import FolderList from './FolderList/FolderList';
import dummyStore from './dummy-store';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: 'this is a folder',
      notes: 'this is a note'
    }
  }

  render() {
    return (
      <div className='mainPage'>
        <header className='header'>
          <Link className='title' style={{ textDecoration: 'none' }} to='/'>Noteful</Link>
        </header>
          <section>
            <FolderList folderInfo={this.state.folders} />
            <Route 
              exact
              path='/folderlist' 
              render={ () => <FolderList folderInfo={this.state.folders} />} />
          </section>
          <main>
            <NoteList noteInfo={this.state.notes}/>
            <Route 
              exact
              path='/notelist' 
              render={ () => <NoteList noteInfo={this.state.notes} />} />
          </main>
      </div>
    )
  }
}