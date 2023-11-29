const MyHeading = document.getElementById('MyHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const listItems = document.getElementsByTagName('li');
const listDiv =document.querySelector('.listDiv')
const listUl = listDiv.querySelector('ul');
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;
firstListItem.style.backgroundColor ='lightskyblue';
// getting element using their tag name
const news = document.getElementsByTagName('h1');
// addEventListener is used to allow javascript to listen to user event and perform what it is required.
MyHeading.addEventListener('click', () => {
    MyHeading.style.color ='green'
});

myButton.addEventListener('click', () => {
    MyHeading.style.color = myTextInput.value;
});
for (let i = 0; i < news.length; i++) {
    news[i].style.color = 'purple';
    
}
// const even= document.querySelectorAll('li:nth-child(even)');
// for (let i = 0; i < even.length; i++) {
//     even[i].style.color = 'purple';
//     even[i].style.backgroundColor = 'grey' 
    
// }

// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].addEventListener('mouseover', () => {
//         listItems[i].textContent = listItems[i].textContent.toUpperCase();
//         listItems[i].style.color = 'red'
//     });
//     listItems[i].addEventListener('mouseout', () => {
//         listItems[i].textContent = listItems[i].textContent.toLowerCase();
//         listItems[i].style.color = 'black'
//     });
// }
listUl.addEventListener('click',(event) => {
    if (event.target.tagName == 'BUTTON'){
        if(event.target.className == 'Li'){
            let li = event.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        }
        if(event.target.className == 'Up'){
            let li = event.target.parentNode;
            let prev = li.previousElementSibling;
            let ul = li.parentNode;
            if(prev){
                ul.insertBefore(li,prev);
            }
          
        }
        if(event.target.className == 'down'){
            let li = event.target.parentNode;
            let nxt = li.nextElementSibling;
            let ul = li.parentNode;
            if(nxt){
                ul.insertBefore(nxt,li);
            }
          
        }
    }
});

