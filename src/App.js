import React from 'react';
import { Route, Link } from 'react-router-dom';
import NoteList from './NoteList/NoteList';
import './App.css';
import Folder from './Folder/Folder';
import dummyStore from './dummy-store';
import FolderPage from './FolderPage/FolderPage';
import NotePage from './NotePage/NotePage';

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

        <Folder folders={this.state.folders} />
      
        <section>
          <Route 
            exact
            path='/folderpage/:id'
            render={ (rprops) => <FolderPage folders={this.state.folders} notes={this.state.notes} {...rprops}/>} />
        </section>

        <main>
          <Route 
            exact
            path='/' 
            render={ (rprops) => <NoteList folders={this.state.folders} notes={this.state.notes} {...rprops} />} />
          <Route 
            exact
            path='/notepage/:id'
            render={ (rprops) => <NotePage folders={this.state.folders} notes={this.state.notes} {...rprops}/>} />  
          
        </main>

      </div>
    )
  }
}