function checkBrackets() {
    let inputText = document.getElementById("qavsInput").value;
    let stack = [];

    for (let i = 0; i < inputText.length; i++) {
        if (inputText[i] === '(') {
            stack.push('(');
        } else if (inputText[i] === ')') {
            if (stack.length === 0 || stack.pop() !== '(') {
                document.getElementById("result").innerText = "False";
                return;
            }
        }
    }

    if (stack.length === 0) {
        document.getElementById("result").innerText = "True";
    } else {
        document.getElementById("result").innerText = "False";
    }
}