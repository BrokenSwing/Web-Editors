import React from 'react';
import ReactDOM from 'react-dom';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

function App() {
    return (
        <AceEditor
            mode="javascript"
            theme="github"
            onChange={(value) => {
                console.log(`Value changed !`);
                console.log(value);
            }}
        />
    )
}

ReactDOM.render(<App />, document.getElementById('root'))