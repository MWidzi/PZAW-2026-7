import Movie from "./Movie.tsx";
import Book from "./Book.tsx";
import Album from "./Album.tsx";
import Song from "./Song.tsx";

function App() {
    const songs: React.JSX.Element[] = [
        <Song title="灼熱にて純情(wii-wii-woo)" duration={228} />,
        <Song title="TEMPLATE" duration={187} />,
        <Song title="みちづれ" duration={193} />,
        <Song title="褪せたハナミドリ" duration={217} />
    ];

    return (
        <>
            <h1>Filmy</h1>
            <br />
            <Movie poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPW9gKvK5FIipVRNnfeIOTH_GW8h4bu0RPiTAma6NS2ZFNDsF51yYbtrxfeB_YfpqEGfiIPg&s=10" title="Suzume" release_date={2022} />
            <Movie poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKnqljhomUl21gL9DD26rtcKhOozFSaN2Eqqw1OHSYgkHAg2ZS8MKkUzcu7eJZBAT-PE_aZM_PnS5kXer6jn-nsxn4CId_ByVWlijNr2U&s=10" title="The Matrix" release_date={1999} />
            <Movie poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNsBuU4tpA_ap_kNzP0k_N_e3AiaF3CNYc9X3kdDHPzthAd42HqeXMKeBdKAxJK4kWHq7aOQ&s=10" title="Monty Python and the Holy Grail" release_date={1975} />
            <br />
            <h1>Ksiązki</h1>
            <br />
            <Book cover="https://booktime.pl/img/products/18/28/05/1_max.jpg?v=1727252015" title="Pan Tadeusz" release_date={1834} page_count={1000} />
            <Book cover="https://www.hachettebookgroup.com/wp-content/uploads/2025/05/9780813319513.jpg" title="The art of war" release_date={-500} page_count={500} />
            <Book cover="https://m.media-amazon.com/images/I/91HjK3oSJwL._AC_UF1000,1000_QL80_.jpg" title="Reinkarnowany jako galareta" release_date={2014} page_count={300} />
            <br />
            <h1>Albumy</h1>
            <br />
            <Album cover="https://i.ebayimg.com/images/g/GOwAAOSwPZBnTnbc/s-l400.jpg" title="specter" release_date={2023} artist="Hoshimachi Suisei" genre="j-pop" songs={songs} />
        </>
    );
}

export default App
