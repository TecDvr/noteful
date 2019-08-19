import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import './Folder.css';
import NotefulContext from '../NotefulContext';

class Folder extends React.Component {
    static contextType = NotefulContext;
    render() {
        return (
                    <div className='folderList'>
                        {this.context.folders.map(folder => <NavLink to={`/folder/${folder.id}`}>{folder.name}</NavLink>)}
                        <button>Add Folder</button>
                        <Route path='/note' render={() => <button onClick={() => this.props.history.goBack()}>Go Back</button>}/>
                    </div>       
        )
    }
}

export default withRouter(Folder);