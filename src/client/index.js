import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

export {
    checkForName,
    handleSubmit
}

let modelId = document.getElementById('model');
let agreementId = document.getElementById('agreement');
let subjectivityId = document.getElementById('subjectivity');
let confidenceId = document.getElementById('confidence');
let ironyId = document.getElementById('irony');
let scoreTagId = document.getElementById('score_tag');
const btnInput = document.getElementById('btnSubmit');

btnInput.addEventListener("click", () => {
    handleSubmit()
    updateUI()
})

// async function getArticleData() {
//     const response = await fetch('/data');
//     try {
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.log("Error getArticleData: ", error);
//     }
// }

const updateUI = async () => {
    let request = await fetch('/getData');
    modelId.innerHTML = '';
    agreementId.innerHTML = '';
    subjectivityId.innerHTML = '';
    confidenceId.innerHTML = '';
    ironyId.innerHTML = '';
    scoreTagId.innerHTML = '';
    try {
        let lastEntry = await request.json();
        console.log(`
        LastEntry ${lastEntry}
        `)
        modelId.innerHTML = 'Model: ' + lastEntry.model;
        agreementId.innerHTML = 'Agreement: ' + lastEntry.agreement;
        subjectivityId.innerHTML = 'Subjectivity: ' + lastEntry.subjectivity;
        confidenceId.innerHTML = 'Confidence: ' + lastEntry.confidence;
        ironyId.innerHTML = 'Irony: ' + lastEntry.irony;
        scoreTagId.innerHTML = 'Score tag: ' + lastEntry.score_tag;
    } catch (error) {
        console.log("Error updateUI: ", error);
    }
}