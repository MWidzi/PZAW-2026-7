import type { ComponentProps } from "react";
import GalleryRenderer from "./galleryRenderer.tsx";
import Movie from "./Movie.tsx";
import Book from "./Book.tsx";
import Album from "./Album.tsx";

function App() {
    let movieData: ComponentProps<typeof Movie>[] = [
        {
            "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPW9gKvK5FIipVRNnfeIOTH_GW8h4bu0RPiTAma6NS2ZFNDsF51yYbtrxfeB_YfpqEGfiIPg&s=10",
            "title": "Suzume",
            "release_date": 2022,
            "rating": 8.5
        },
        {
            "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKnqljhomUl21gL9DD26rtcKhOozFSaN2Eqqw1OHSYgkHAg2ZS8MKkUzcu7eJZBAT-PE_aZM_PnS5kXer6jn-nsxn4CId_ByVWlijNr2U&s=10",
            "title": "The Matrix",
            "release_date": 1999,
            "rating": 8
        },
        {
            "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNsBuU4tpA_ap_kNzP0k_N_e3AiaF3CNYc9X3kdDHPzthAd42HqeXMKeBdKAxJK4kWHq7aOQ&s=10",
            "title": "Monty Python and the Holy Grail",
            "release_date": 1975,
            "rating": 7.5
        }
    ];

    let booksData: ComponentProps<typeof Book>[] = [
        {
            "cover": "https://booktime.pl/img/products/18/28/05/1_max.jpg?v=1727252015",
            "title": "Pan Tadeusz",
            "release_date": 1834,
            "page_count": 1000
        },
        {
            "cover": "https://www.hachettebookgroup.com/wp-content/uploads/2025/05/9780813319513.jpg",
            "title": "The Art of War",
            "release_date": -500,
            "page_count": 500
        },
        {
            "cover": "https://m.media-amazon.com/images/I/91HjK3oSJwL._AC_UF1000,1000_QL80_.jpg",
            "title": "Reincarnated as a slime",
            "release_date": 2014,
            "page_count": 300
        }
    ];

    let albumsData: ComponentProps<typeof Album>[] = [
        {
            "cover": "https://i.ebayimg.com/images/g/GOwAAOSwPZBnTnbc/s-l400.jpg",
            "title": "specter",
            "release_date": 2023,
            "artist": "Hoshimachi Suisei",
            "genre": "j-pop",
            "songs": [
                { "title": "灼熱にて純情(wii-wii-woo)", "duration": 228 },
                { "title": "TEMPLATE", "duration": 187 },
                { "title": "みちづれ", "duration": 193 },
                { "title": "褪せたハナミドリ", "duration": 217 }
            ]
        },
        {
            "cover": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/330px-FullMoon2010.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
            "title": "no songs test",
            "release_date": 2026,
            "artist": "Unknown",
            "genre": "Unknown",
            "songs": []
        },
    ];


    let movieElements = movieData.sort((a, b) => {
        return a.title.localeCompare(b.title);
    }).map(data => {
        return (
            <Movie poster={data.poster} title={data.title} release_date={data.release_date} rating={data.rating} />
        );
    });

    let booksElements = booksData.sort((a, b) => {
        return a.title.localeCompare(b.title);
    }).map(data => {
        return (
            <Book cover={data.cover} title={data.title} release_date={data.release_date} page_count={data.page_count} />
        );
    });

    let albumsElements = albumsData.sort((a, b) => {
        return a.title.localeCompare(b.title);
    }).map(data => {
        return (
            <Album cover={data.cover} title={data.title} release_date={data.release_date} artist={data.artist} genre={data.genre} songs={data.songs} />
        );
    });

    let movieAfter2010Elements = movieData.filter((movie) => movie.release_date > 2010).sort((a, b) => {
        return a.title.localeCompare(b.title);
    }).map(data => {
        return (
            <Movie poster={data.poster} title={data.title} release_date={data.release_date} rating={data.rating} />
        );
    });

    let booksByDateElements = booksData.sort((a, b) => {
        return a.release_date - b.release_date;
    }).map(data => {
        return (
            <Book cover={data.cover} title={data.title} release_date={data.release_date} page_count={data.page_count} />
        );
    });

    let mostSongsAlbum = [albumsData.sort((a, b) => {
        return b.songs.length - a.songs.length;
    }).map(data => {
        return (
            <Album cover={data.cover} title={data.title} release_date={data.release_date} artist={data.artist} genre={data.genre} songs={data.songs} />
        );
    })[0]];


    return (
        <>
            <div className="container">
                <GalleryRenderer title="Filmy" elements={movieElements} />
                <GalleryRenderer title="Książki" elements={booksElements} />
                <GalleryRenderer title="Albumy" elements={albumsElements} />
                <GalleryRenderer title="Filmy wydane po 2010 roku" elements={movieAfter2010Elements} />
                <GalleryRenderer title="Książki w kolejności wydania" elements={booksByDateElements} />
                <GalleryRenderer title="Album z największą ilością piosenek" elements={mostSongsAlbum} />
            </div>
        </>
    );
}

export default App
