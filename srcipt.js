const resultSpan = document.getElementById('result');
const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');

isEmpty = () => {
    if (textInput.value = null)
        return false;
}

updateResult = () => {
    resultSpan.innerText = 'Test';
    resultSpan.style.display = `${isEmpty()}`;
}

checkBtn.addEventListener('click', updateResult);