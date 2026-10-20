import Media from "./MediaDisplay.tsx";

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
    songs: Array<React.JSX.Element>;
}

function Album(props: Props) {
    const { cover, title, release_date, artist, genre, songs } = props;

    return (
        <>
            <Media image={cover} name={title} release_date={release_date} artist={artist} genre={genre} />
            <h3>Piosenki:</h3>
            {songs}
        </>
    );
}

export default Album
