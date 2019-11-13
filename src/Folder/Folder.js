import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import './Folder.css';
import NotefulContext from '../NotefulContext';
import AddFolder from '../AddFolder/AddFolder';
import AddNote from '../AddNote/AddNote';

class Folder extends React.Component {
    static contextType = NotefulContext;
    render() {
        return (
                    <div className='folderList'>
                        {this.context.folders.map((folder,index) => <NavLink key={`folder-nav-link-${index}`} to={`/folder/${folder.id}`}>{folder.name}</NavLink>)}
                        <AddFolder />
                        <AddNote />
                        <Route path='/note' render={() => <button onClick={() => this.props.history.goBack()}>Go Back</button>}/>
                    </div>      
        ) 
    }
}

export default withRouter(Folder);