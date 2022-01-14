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

