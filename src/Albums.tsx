import Album from "./Album.tsx";
import Song from "./Song.tsx";

function Albums() {
    const songs: React.JSX.Element[] = [
        <Song title="灼熱にて純情(wii-wii-woo)" duration={228} />,
        <Song title="TEMPLATE" duration={187} />,
        <Song title="みちづれ" duration={193} />,
        <Song title="褪せたハナミドリ" duration={217} />
    ];

    return (
        <>
            <h1>Albumy</h1>
            <br />
            <Album cover="https://i.ebayimg.com/images/g/GOwAAOSwPZBnTnbc/s-l400.jpg" title="specter" release_date={2023} artist="Hoshimachi Suisei" genre="j-pop" songs={songs} />
        </>
    );
}

export default Albums
