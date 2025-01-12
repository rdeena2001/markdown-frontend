// File: App.js (React Frontend)
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [markdown, setMarkdown] = useState('');
    const [html, setHtml] = useState('');

    const handleMarkdownChange = async (e) => {
        const input = e.target.value;
        setMarkdown(input);

        try {
            const response = await axios.post('http://localhost:5000/convert', { markdown: input });
            setHtml(response.data.html);
        } catch (error) {
            console.error('Error converting Markdown:', error);
        }
    };

    return (
        <div className="App">
            <h1>Real-Time Markdown Editor</h1>
            <div className="editor-container">
                <textarea
                    className="markdown-editor"
                    value={markdown}
                    onChange={handleMarkdownChange}
                    placeholder="Type Markdown here..."
                />
                <div
                    className="html-preview"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </div>
    );
}

export default App;