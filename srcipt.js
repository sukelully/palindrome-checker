const resultSpan = document.getElementById('result');
const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');

// Returns a string with non-alphabetic characters removed
const parseString = (str) => {
    return str.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
}

// Checks if the text input element is empty
const isEmpty = () => {
    return textInput.value.trim() === "";
}

// Returns true if the given string is a palindrome, false otherwise
const isPalindrome = (str) => {
    const parsedString = parseString(str);
    const sliceIndex = Math.floor(parsedString.length / 2);
    const compareStr = parsedString.split('').slice(-sliceIndex).reverse();

    for (let i = 0; i < sliceIndex; i++) {
        if (parsedString[i] !== compareStr[i]) {  // Use parsedString instead of str
            return false;
        }
    }
    return true;
}

// Updates the result span element
const updateResult = () => {
    if (isEmpty()) {
        alert("Please input a value");
        resultSpan.style.display = 'none';
    } else {
        resultSpan.style.display = 'block';

        resultSpan.innerHTML = isPalindrome(textInput.value) ? 
        `<strong>${textInput.value}</strong> is a palindrome.` : 
        `<strong>${textInput.value}</strong> is not a palindrome.`;
    }
}

// Event listeners
checkBtn.addEventListener('click', updateResult);
window.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        updateResult();
    }
});