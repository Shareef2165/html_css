
const start_limit = 2;
const stop_limit = 40

const  evenNumber = document.getElementById("evenNumber")

    for (let i = start_limit; i <= stop_limit; i++) {
        if( i % 2 == 0){

            const listItem = document.createElement("li");
            listItem.textContent = i;
            evenNumber.appendChild(listItem);
        }

       
        
    }





