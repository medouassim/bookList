var bookList = document.getElementById('book-form');
bookList.addEventListener("submit", addB);

function addB(e) {
    e.preventDefault();
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var isbn = document.getElementById("isbn").value;

    var tbody = document.querySelector("table").getElementsByTagName('tbody')[0];
    var newRow = tbody.insertRow();
    var titleCell = newRow.insertCell();
    titleCell.appendChild(document.createTextNode(title));
    
    var authorCell = newRow.insertCell();
    authorCell.appendChild(document.createTextNode(author));
    var isbnCell = newRow.insertCell();
    isbnCell.appendChild(document.createTextNode(isbn))
}

