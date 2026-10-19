import Media from "./MediaDisplay.tsx";

interface Props {
    cover: string;
    title: string;
    release_date: number;
    artist: string;
    genre: string;
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
