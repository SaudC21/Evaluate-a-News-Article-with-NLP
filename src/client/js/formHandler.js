import { checkForName } from '../js/nameChecker'
let formText, apiKey

// Function to GET the api key from server side
async function getApiKey() {
    const response = await fetch('/getApiKey');
    try {
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("ERORR", error);
    }
}

// Function to check the url if it's valid
function checkURL(url) {
    if (checkForName(url)) {
        return url;
    } else {
        console.log("Invalid url")
        return url;
    }
}

// Function to fetch api data
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

// Function to POST data to server
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

// Function to deal input when it's submitted
async function handleSubmit() {
    formText = document.getElementById('name').value;
    const urlCheck = checkURL(formText); // Call the checkURL function

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