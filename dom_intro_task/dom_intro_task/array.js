
function checkArrayLength() {
   
    const input = document.getElementById('arrayInput').value;
    console.log("input value ===>", input)
    const array = input.split(',').map(item => item.trim());
    console.log("array value====>",array)
    
    
   
    const lengthLimit = 5; 
    
   
    const resultElement = document.getElementById('result');
    
   
    if (array.length > lengthLimit) {
        resultElement.textContent = `Array length (${array.length}) false.`;
        resultElement.className = 'result false';
    } else {
        resultElement.textContent = `Array length (${array.length}) true.`;
        resultElement.className = 'result true';
    }
}
