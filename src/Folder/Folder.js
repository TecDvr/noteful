import React from 'react';
import { NavLink } from 'react-router-dom';
import './Folder.css';

export default class Folder extends React.Component {
    render() {
        return (
            <div className='folder'>
                <NavLink to='/folderpage/:id'>{this.props.name}</NavLink>
            </div>
        )
    }
}