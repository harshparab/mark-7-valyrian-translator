var btnTranslate = document.querySelector("#btn-translate")

var txtInput = document.querySelector("#txt-input")

var divOutput = document.querySelector("#output")

var url = "https://api.funtranslations.com/translate/valyrian.json"

function getTranslationURL(text) {
    return url + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error", error)
}

function clickEventHandler() {
    var inputText = txtInput.value

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated
            divOutput.innerHTML = translatedText;
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener('click', clickEventHandler)