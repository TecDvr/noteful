import React from 'react';
import { Link } from 'react-router-dom';
import './Folder.css';

export default class Folder extends React.Component {
    render() {
        return (
            <div className='folder'>
                <Link to='/'>Folder</Link>
            </div>
        )
    }
}