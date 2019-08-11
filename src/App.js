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
      ...dummyStore
    }
  }

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    return (
      <div className='mainPage'>
        <header className='header'>
          <Link className='title' style={{ textDecoration: 'none' }} to='/'>Noteful</Link>
        </header>
          <section>
            <FolderList folders={this.state.folders}/>
            <Route 
              exact
              path='/folderlist' 
              render={ () => <FolderList folders={this.state.folders} />} />
          </section>
          <main>
            <Route 
              exact
              path='/notelist' 
              render={ () => <NoteList notes={this.state.notes} />} />
          </main>
      </div>
    )
  }
}