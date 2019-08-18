import React from 'react';

const NotefulContext = React.createContext({
    folders: [],
    notes: [],
    handleNoteDelete: () => {}
})

export default NotefulContext