// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
import axios from 'axios';

const topics = document.querySelector('.topics')

function addTopic (obj) {
    const top = document.createElement('div');
    
    top.classList.add('tab');
      
    top.textContent = obj;

    return top;
}

axios.get(`https://lambda-times-api.herokuapp.com/topics`)
.then((response) => {
    const array = response.data.topics
    
    var i;
    for (i = 0; i < array.length; i++){
        console.log(response.data.topics[i])
        topics.appendChild(addTopic(response.data.topics[i]))
    }
})

.catch((err) => console.log(err));
