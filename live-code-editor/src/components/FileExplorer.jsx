import React from 'react';

const FileExplorer = ({ setEditorCode }) => {
    const files = {
        "App.js": "export default function App() { return <h1>Hello world</h1>; }",
        "index.js": "import React from 'react'; import { createRoot } from 'react-dom'; import App from './App'; createRoot(document.getElementById('root')).render(<App />);"
    };

    return (
        <div className="file-explorer">
            <h3>Files</h3>
            {Object.keys(files).map((file) => (
                <div key={file} onClick={() => setEditorCode(files[file])} className="file-item">
                    {file}
                </div>
            ))}
        </div>
    );
};

export default FileExplorer;
