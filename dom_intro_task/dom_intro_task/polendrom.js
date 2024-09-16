
function checkPalindrome() {
    
    const textArea = document.getElementById('textArea').value.trim();
    
    const resultElement = document.getElementById('result');
    
   
    const normalizedString = textArea.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    const reversedString = normalizedString.split('').reverse().join('');
    
    
    if (normalizedString === reversedString && normalizedString.length > 0) {
       
        resultElement.textContent = `"${textArea}" is a palindrome!`;
        resultElement.className = 'result palindrome';
    } else {
       
        resultElement.textContent = `"${textArea}" is not a palindrome.`;
        resultElement.className = 'result not-palindrome';
    }
}
