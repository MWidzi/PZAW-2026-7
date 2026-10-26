import type { ComponentProps } from "react";
import Album from "./Album.tsx";
import Song from "./Song.tsx";

function Albums() {
    const songs: ComponentProps<typeof Song>[] = [
        { "title": "灼熱にて純情(wii-wii-woo)", "duration": 228 },
        { "title": "TEMPLATE", "duration": 187 },
        { "title": "みちづれ", "duration": 193 },
        { "title": "褪せたハナミドリ", "duration": 217 }
    ];

    let data: ComponentProps<typeof Album>[] = [
        {
            "cover": "https://i.ebayimg.com/images/g/GOwAAOSwPZBnTnbc/s-l400.jpg",
            "title": "specter",
            "release_date": 2023,
            "artist": "Hoshimachi Suisei",
            "genre": "j-pop",
            "songs": songs
        }
    ];

    let elements = data.map(data => {
        return (
            <Album cover={data.cover} title={data.title} release_date={data.release_date} artist={data.artist} genre={data.genre} songs={data.songs} />
        );
    });

    return (
        <>
            <h1>Albumy</h1>
            {elements}
        </>
    );
}

export default Albums
