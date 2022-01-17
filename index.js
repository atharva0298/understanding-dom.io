// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.all);
// console.log(document.forms);


// GETELEMENTBYID //

// var mainId = console.log(document.getElementById('main'));
// console.log(mainId);
// mainId.innerText = "Goodbye";


// GETELEMENTSBYCLASSNAME //

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello 2"
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // This won't work - items.style.backgroundColor = 'light-grey';

// for(var i=0;i<items.length;i++){
//     items[i].backgroundColor = "#f4f4f4";
// }

// GETELEMENTSBYCLASSNAME //

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello 2"
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // This won't work - items.style.backgroundColor = 'light-grey';

// for(var i=0;i<li.length;i++){
//     li[i].backgroundColor = "#f4f4f4";
// }


// QUERYSELECTOR //
// You can put anything you want in query selector, it can be class, id or an html tag format
// var header = document.querySelector('#title')
// header.style.borderBottom = 'solid 4px #ccc'

// var input = document.querySelector('input');
// input.value = 'Hello World'


// QUERYSELECTORALL //

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = "Hello"

// var odd = document.querySelectorAll('li:nth-child(odd)')

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
// }


// TRAVERSING THE DOM //

var itemList = document.querySelector('#items');
// Parent Node Property
// console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode);


// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentNode);

// // Child Nodes - Not suggested
// console.log(itemList.childNodes);
// // Children - suggested
// console.log(itemList.children);
// console.log(itemList.children[0]);
// // itemList.children[0].style.backgroundColor = '#f4f4f4';
// // First Child
// console.log(itemList.firstChild);
// // First Element Child
// console.log(itemList.firstElementChild);
// // Same goes for Last Child and LastChildElement
// console.log(itemList.lastChild);
// // Last Element Child
// console.log(itemList.lastElementChild);

// // Next sibling
// console.log(itemList.nextSibling);
// // Next Element Sibling
// console.log(itemList.nextElementSibling);

// // Previous sibling
// console.log(itemList.previousSibling);
// // Previous Element Sibling
// console.log(itemList.previousElementSibling);

// createElement

// // create a Div
// var newDiv = document.createElement('div');
// // addding a class
// newDiv.className = 'hello';
// // Add Id
// newDiv.id = 'hello1';
// // Set attribute
// newDiv.setAttribute('title','Hello Div');

// // create Text Node
// var newDivText = document.createTextNode('Hello World');

// // Add text to div
// newDiv.appendChild(newDivText);
// console.log(newDiv);

// // Make it a reality :)
// var container = document.querySelector('header, container');
// var h1 = document.querySelector('header h1');
// container.insertBefore(newDiv,h1);
// // Changing the fontsize
// newDiv.style.fontSize = '30px';


// EVENTS //

// var button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e){
//     // console.log('button clicked');
//     // document.getElementById('header-title').textContent = "Changed";
//     // document.querySelector('#main').style.backgroundColor = "#f4f4f4";
//     console.log(e);
// }

// var button = document.getElementById('button');
// button.addEventListener('dbclick', runEvent);

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');

// itemInput.addEventListener('keydown', runEvent);

// function runEvent(e){
//     console.log(`EVENT TYPE: `+e.type);
//     console.log(e.target.value);
//     document.getElementById('output').innerHTML = '<h3>'
//     +e.target.value+'<h3>'
// }

// Important Mouse events:
//click, dbclick, mousecenter, mouseleav e, mousedown, mouseup,mouseover, mouseout, mousemove



// PORJECT CODE

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit',addItem);
// delete Event
itemList.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup', filterItems);

// Add Item

function addItem(e){
    e.preventDefault();

    // Get Input value
    var newitem =  document.getElementById('item').value; 

    // create Element Li
    var li = document.createElement('li');
    // add class
    li.className = 'list-group-item';
    // add textNode with input value
    li.appendChild(document.createTextNode(newitem));
    // create delete button element
    var deleteButton = document.createElement('button');
    // add classes
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';
    // textNode
    deleteButton.appendChild(document.createTextNode('X'));
    // append button
    li.appendChild(deleteButton);

    // append li to the list
    itemList.appendChild(li);
}

// delete function

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            // This line I did not understand
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }

    }

}

// filter Items function

function filterItems(e){
    // convert text to lower case
    var text = e.target.value.toLowerCase();
    // get List tags
    var items = itemList.getElementsByTagName('li');
    // We need to convert the HTML collection to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display =  'block';
        } else {
            item.style.display = 'none';
        }
    });
}

