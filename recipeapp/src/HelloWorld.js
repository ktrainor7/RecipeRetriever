import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HelloWorld() {
    const [message, setmessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/hello-world/')
            .then(response => {
                setmessage(response.data.message);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h1>Hello, World!</h1>
            <p>{message}</p>
        </div>
    );
}

export default HelloWorld;