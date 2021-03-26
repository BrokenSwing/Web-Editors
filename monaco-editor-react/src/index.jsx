import React from 'react';
import ReactDOM from 'react-dom';
import Editor from '@monaco-editor/react';

function App() {
    return (
        <Editor
            height="100vh"
            defaultLanguage="javascript"
            theme="vs-dark"
        />
    );
}

ReactDOM.render(<App />, document.getElementById('root'));