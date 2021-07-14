import { checkForName } from '../js/nameChecker'
let formText, apiKey

async function getApiKey() {
    const response = await fetch('/getApiKey');
    try {
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("ERORR", error);
    }
}

// 1- check url
function checkURL(url) {
    if (checkForName(url)) {
        return url;
    } else {
        console.log("Invalid url")
        return url;
    }
}

// 2- fetch api (article)
async function getApiCall(apiKey) {
    const apiCall = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=auto&url=${formText}`;
    const response = await fetch(apiCall);
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
    formText = document.getElementById('name').value;
    const urlCheck = checkURL(formText);

    if (urlCheck) {
        try {
            getApiKey()
            .then(function (apiKey) {
                return getApiCall(apiKey.api)
            })
            .then(function (data) {
                postArticle('/postData', data);
            })
        } catch (error) {
            console.log("invalid url", error)
        }
        
    } else {
        alert("Please double check the URL");
    }

}

export { handleSubmit }










// try {
//     const lastEntry = await request.json();
//     // document.getElementById('text').innerHTML = 'Text: ' + res.model;
//     // document.getElementById('agreement').innerHTML = 'Agreement: ' + res.agreement;
//     // document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + res.subjectivity;
//     // document.getElementById('confidence').innerHTML = 'Confidence: ' + res.confidence;
//     // document.getElementById('irony').innerHTML = 'Irony: ' + res.irony;
//     // document.getElementById('score_tag').innerHTML = 'Score: ' + res.score_tag;
// } catch (error) {
//     console.log('Error: ', error);
// }
// alert('Please enter a valid URL');