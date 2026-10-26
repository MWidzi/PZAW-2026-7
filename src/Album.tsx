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
            <tr><Song title={song.title} duration={song.duration} /></tr>
        );
    })

    return (
        <>
            <Media image={cover} name={title} release_date={release_date} artist={artist} genre={genre} optionalTag={
                songComponents.length > 0 ?
                    <>
                        <h4 className="fg-info">Songs:</h4>
                        <table className="table table-sm table-striped">
                            <tbody>
                                {songComponents}
                            </tbody>
                        </table>
                    </> :
                    <div className="alert alert-secondary" role="alert">Brak utworów</div>
            } />
        </>
    );
}

export default Album
