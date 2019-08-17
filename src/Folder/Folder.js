import React from 'react';
import { NavLink } from 'react-router-dom';
import './Folder.css';
import NotefulContext from '../NotefulContext';

export default class Folder extends React.Component {
    render() {
        return (
            <NotefulContext.Consumer>
                {(value) => (
                    <div>
                        {value.state.folders.map(folder => <NavLink to={`/folderpage/${folder.id}`}>{value.state.folder.name}</NavLink>)}
                        <button>Add Folder</button>
                    </div>
                )}
            </NotefulContext.Consumer>        
        )
    }
}