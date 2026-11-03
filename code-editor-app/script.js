
// Get HTML elements
const codeEditor = document.getElementById("code-editor");
const highlightedCode = document.getElementById("highlighted-code");
const previewContent = document.getElementById("preview-content");
const runButton = document.getElementById("run-button");
const exportButton = document.getElementById("export-button");
const languageSelector = document.getElementById("language-selector");
const suggestionBox = document.getElementById(
    "autocompletesuggestions"
);

const errorMessage = document.getElementById("error-message");

let htmlCode = `<h1>Hello World!</h1>`;
let cssCode = "";
let jsCode = "";

// 1. Syntax highlighting
function highlightCode() {

    const selectedLanguage = languageSelector.value;

    console.log("Highlighting:", selectedLanguage);

    highlightedCode.className = "language-" + selectedLanguage;

    highlightedCode.textContent = codeEditor.value;

    Prism.highlightElement(highlightedCode);

}

languageSelector.addEventListener("change", function() {

    console.log("Selected language:", languageSelector.value);

    highlightCode();

});

// 2. Autocomplete keyword list
const keywords = [
    "function",
    "let",
    "const",
    "for",
    "if",
    "return"
];


// 3. Find matching suggestions
function showSuggestions() {

    const code = codeEditor.value;

    const lastWord = code.match(/[a-zA-Z]+$/);

    suggestionBox.innerHTML = "";

    if (!lastWord) {
        suggestionBox.style.display = "none";
        return;
    }

    const typedWord = lastWord[0];

    const filteredKeywords = keywords.filter(function(keyword) {

        return keyword.startsWith(typedWord) &&
               keyword !== typedWord;

    });

    displaySuggestions(filteredKeywords);

}


// 4. Display suggestions
function displaySuggestions(suggestions) {

    suggestionBox.innerHTML = "";

    if (suggestions.length === 0) {
        suggestionBox.style.display = "none";
        return;
    }

    suggestions.forEach(function(keyword) {

        const suggestion = document.createElement("div");

        suggestion.textContent = keyword;
        suggestion.classList.add("suggestion-item");

        // 5. Click-to-complete
        suggestion.addEventListener("click", function() {

            const code = codeEditor.value;

            const updatedCode = code.replace(
                /[a-zA-Z]+$/,
                keyword
            );

            codeEditor.value = updatedCode;

            suggestionBox.style.display = "none";

            highlightCode();

            codeEditor.focus();

        });

        suggestionBox.appendChild(suggestion);

    });

    suggestionBox.style.display = "block";

}


// 6. Basic syntax error checking
function checkSyntaxErrors() {

    const code = codeEditor.value;

    const brackets = {
        "(": ")",
        "{": "}",
        "[": "]"
    };

    const stack = [];

    for (let character of code) {

        if (brackets[character]) {

            stack.push(brackets[character]);

        } else if (["}", ")", "]"].includes(character)) {

            if (stack.length === 0 ||
                stack.pop() !== character) {

                errorMessage.textContent =
                    "Error: Mismatched brackets or braces!";

                errorMessage.classList.add("visible");

                return;
            }
        }
    }

    if (stack.length > 0) {

        errorMessage.textContent =
            "Error: Missing closing bracket or brace!";

        errorMessage.classList.add("visible");

    } else {

        errorMessage.textContent = "";

        errorMessage.classList.remove("visible");

    }

}


// 7. Input event listener
codeEditor.addEventListener("input", function() {

    highlightCode();

    showSuggestions();

    checkSyntaxErrors();

});


// 8. Synchronize scrolling
codeEditor.addEventListener("scroll", function() {

    const pre = highlightedCode.parentElement;

    pre.scrollTop = codeEditor.scrollTop;
    pre.scrollLeft = codeEditor.scrollLeft;

});


// 9. Run Code button
function runCode() {

    const selectedLanguage = languageSelector.value;
    const code = codeEditor.value;

    // Save code according to selected language
    if (selectedLanguage === "markup") {
        htmlCode = code;
    } 
    else if (selectedLanguage === "css") {
        cssCode = code;
    } 
    else if (selectedLanguage === "javascript") {
        jsCode = code;
    }

    // Create complete webpage
    const completeCode = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                ${cssCode}
            </style>
        </head>
        <body>
            ${htmlCode}

            <script>
                ${jsCode}
            <\/script>
        </body>
        </html>
    `;

    const iframe = document.createElement("iframe");

    iframe.style.width = "100%";
    iframe.style.height = "300px";
    iframe.style.border = "1px solid #ccc";

    previewContent.innerHTML = "";

    previewContent.appendChild(iframe);

    iframe.srcdoc = completeCode;

}

runButton.addEventListener("click", runCode);


// 10. Export Code button
function exportCode() {

    const code = codeEditor.value;

    const blob = new Blob(
        [code],
        { type: "text/html" }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "my_code.html";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);

}

exportButton.addEventListener("click", exportCode);


// Initial setup
highlightCode();
runCode();
