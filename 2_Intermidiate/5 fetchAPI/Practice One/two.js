const url = 'https://api.thecatapi.com/v1/images/0XYvRd7oD'
const xhr = new XMLHttpRequest();
xhr.open('GET', url);

// console.log(xhr);

xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
}
xhr.send();