

let Books = [{
        book: "The Man with the Golden Arm",
        year: 1950,
        author: "Nelson Algren",
        price: 20.5,
        currency: "US Dollars",
        pages: 100,
    },
    {
        book: "The Collected Stories of William Faulkner",
        year: 1951,
        author: "William Faulkner",
        price: 60,
        currency: "Australian Dollars",
        pages: 30,
    },
    {
        book: "Form here to Eternity",
        year: 1952,
        author: "James Jones",
        price: 120.5,
        currency: "US Dollars",
        pages: 200,
    },
    {
        book: "Invisible Man",
        year: 1953,
        author: "Ralph Ellison",
        price: 150,
        currency: "US dollar",
        pages: 300,
    },
    {
        book: "The Adventures of Augie March",
        year: 1954,
        author: "Saul Bellow",
        price: 300,
        currency: "US dollar",
        pages: 500,
    }
];

let content = document.getElementById('content');

(initBooks = () => {
    content.innerHTML = "";
    Books.forEach((v, i) =>{
        content.innerHTML += `
        <tr>
                <td>${i+1}</td>
                <td>${v.book}</td>
                <td>${v.year}</td>
                <td>${v.author}</td>
                <td>
                    <button onclick="editBook(${i})" type="button" class="btn btn-primary divider">
                        <i class="fas fa-pencil-alt">
                    </i></button>

                    <button onclick="deleteBook(${i})" type="button" class="btn btn-danger">
                        <i class="fas fa-trash">
                    </i></button>
                </td>
        </tr>
        `;
    });
})();


    // console.log(book);
let editBook = (index) => {
    alert(index);
}
let deleteBook = (index) => {
    Books.splice(index, 1);
    initBooks();
}
//alert(myList[2].year);