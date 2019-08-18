import React from 'react';
import { NavLink } from 'react-router-dom';
import './Folder.css';
import NotefulContext from '../NotefulContext';

export default class Folder extends React.Component {
    static contextType = NotefulContext;
    render() {
        return (
                    <div>
                        {this.context.folders.map(folder => <NavLink to={`/folder/${folder.id}`}>{folder.name}</NavLink>)}
                        <button>Add Folder</button>
                    </div>       
        )
    }
}