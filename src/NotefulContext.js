import React from 'react';
import dummyStore from './dummy-store';

const NotefulContext = React.createContext({
    ...dummyStore,
    folders: [],
    notes: [],
})

export default NotefulContext