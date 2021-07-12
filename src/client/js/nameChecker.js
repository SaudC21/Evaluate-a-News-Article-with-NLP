function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    const validURL = new RegExp(/^(http|https):\/\/[^ "]+$/);
    return validURL.test(inputText);
}

export { checkForName }
