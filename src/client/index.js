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

const btnInput = document.getElementById('btnSubmit');

btnInput.addEventListener("click", () => {
    handleSubmit();
})

async function getArticleData() {
    const response = await fetch('/getData');
    try {
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("ERORR", error);
    }
}

