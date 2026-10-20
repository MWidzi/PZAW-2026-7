import Book from "./Book.tsx";

function Books() {
    return (
        <>
            <h1>Ksiązki</h1>
            <br />
            <Book cover="https://booktime.pl/img/products/18/28/05/1_max.jpg?v=1727252015" title="Pan Tadeusz" release_date={1834} page_count={1000} />
            <Book cover="https://www.hachettebookgroup.com/wp-content/uploads/2025/05/9780813319513.jpg" title="The art of war" release_date={-500} page_count={500} />
            <Book cover="https://m.media-amazon.com/images/I/91HjK3oSJwL._AC_UF1000,1000_QL80_.jpg" title="Reinkarnowany jako galareta" release_date={2014} page_count={300} />
            <br />
        </>
    );
}

export default Books
