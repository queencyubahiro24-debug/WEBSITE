/* style.css */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    color: #333;
    transition: background-color 0.3s, color 0.3s;
}

header {
    background-color: #4CAF50;
    color: white;
    padding: 20px;
    text-align: center;
}

header button {
    margin-top: 10px;
    padding: 10px 20px;
    cursor: pointer;
    border: none;
    font-size: 16px;
}

main {
    padding: 20px;
}

form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin-bottom: 30px;
}

input {
    margin: 5px 0 15px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button:hover {
    background-color: #45a049;
    color: white;
}

#interactiveImage {
    cursor: pointer;
    transition: transform 0.3s;
}

#interactiveImage:hover {
    transform: scale(1.05);
}

/* Dark Theme */
body.dark {
    background-color: #333;
    color: #f5f5f5;
}

body.dark header {
    background-color: #222;
}
