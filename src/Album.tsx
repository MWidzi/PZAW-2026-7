import Media from "./MediaDisplay.tsx";
import type { ComponentProps } from "react";
import Song from "./Song.tsx";

interface Props {
    /**
    * obrazek z okladka albumu
    */
    cover: string;
    /**
    * tytuł albumu
    */
    title: string;
    /**
    * data wydania albumu
    */
    release_date: number;
    /**
    * wykonawca albumu
    */
    artist: string;
    /**
    * gatunek albumu
    */
    genre: string;
    /**
    * tablica elementów piosenek
    */
    songs: Array<ComponentProps<typeof Song>>;
}

function Album(props: Props) {
    const { cover, title, release_date, artist, genre, songs } = props;
    let songComponents = songs.map(song => {
        return (
            <Song title={song.title} duration={song.duration} />
        );
    })

    return (
        <>
            <Media image={cover} name={title} release_date={release_date} artist={artist} genre={genre} />
            <h3>Piosenki:</h3>
            {songComponents}
        </>
    );
}

export default Album
