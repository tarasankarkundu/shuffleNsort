(function(){
    const numbers = [1,2,3,4,5,6,7,8,9];
    //Can be replaced with an object with key as number and value as color code to make stronger relation between numer and a color in a card
    const colors = ['#6f98a8', '#2b8ead', '#2f454e', '#2b8ead', '#2f454e', '#bfbfbf', '#bfbfbf','#6f98a8', '#2f454e'] 

    const cardContainer = document.getElementById('cardContainer');
    const btnContainer = document.getElementById('buttonContainer');

    // Utility methods
    const shuffleArr = array => {
        let arrLength = array.length;
        for (let i = arrLength - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const sortArr = array => array.sort((a, b) => a - b);

    const clearChilds = elem => {
        while(elem.firstChild) { 
            elem.removeChild(elem.firstChild); 
        } 
    }

    // creates cards dynamically and updated the DOM
    const populateCards = (numbers) => {
        clearChilds(cardContainer);
        numbers.forEach((item)=>{
            let number = document.createElement('div');            
            let card = document.createElement('div');
            number.className = 'number';
            number.innerText = item;
            card.className = 'card';            
            card.style.backgroundColor = colors[item-1];
            card.appendChild(number);
            cardContainer.appendChild(card);
        })
    }

    //Generate cards when page loads
    populateCards(numbers);

    // evant capturing throgh event deligation
    btnContainer.addEventListener('click', (e) => {
        switch(e.target.id) {
            case 'shuffle' : 
                populateCards(shuffleArr(numbers));
                 break;
            case 'sort' : 
                populateCards(sortArr(numbers));
                break;
        }
    })
    
})()