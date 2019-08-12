import React from 'react';
import { Route, Link } from 'react-router-dom';
import NoteList from './NoteList/NoteList';
import './App.css';
import FolderList from './FolderList/FolderList';
import dummyStore from './dummy-store';
import FolderPage from './FolderPage/FolderPage';

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
          <Route 
            exact
            path='/folderpage/:id'
            render={ () => <FolderPage folders={this.state.folders} notes={this.state.notes}/>} />
          <Route 
            exact
            path='/' 
            render={ () => <FolderList folders={this.state.folders} />} />
        </section>
        <main>
          <Route 
            exact
            path='/' 
            render={ () => <NoteList notes={this.state.notes} />} />
        </main>
      </div>
    )
  }
}