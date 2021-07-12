import { checkForName } from './nameChecker'

const formText = document.getElementById('name').value;

async function getApi(api_key) {
    const res = await fetch(api_key);
    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

// 1- check url
async function checkURL(url) {
    if (checkForName(url)) {
        return url;
    }
}

// 2- fetch api (article)
async function articleGeneration() {
    const apiKey = getApi('/apiCall');
    const response = await fetch(apiKey);
    try {
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("error: ", error);
    }
}

/* Function to POST data */ // 3- post to server
const postArticle = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log(error);
    }
}

async function handleSubmit() {
    console.log("::: Get data from server :::")
    const request = await fetch('/getData');
    try {
        const lastEntry = await request.json();
        document.getElementById('text').innerHTML = 'Text: ' + res.model;
        document.getElementById('agreement').innerHTML = 'Agreement: ' + res.agreement;
        document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + res.subjectivity;
        document.getElementById('confidence').innerHTML = 'Confidence: ' + res.confidence;
        document.getElementById('irony').innerHTML = 'Irony: ' + res.irony;
        document.getElementById('score_tag').innerHTML = 'Score: ' + res.score_tag;
    } catch (error) {
        console.log('Error: ', error);
    }
    // alert('Please enter a valid URL');
}

export { handleSubmit }
