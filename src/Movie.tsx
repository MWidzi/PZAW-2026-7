import Media from "./MediaDisplay.tsx";

interface Props {
    /**
    * plakat filmu
    */
    poster: string;
    /**
    * tytuł filmu
    */
    title: string;
    /**
    * data wydania filmu
    */
    release_date: number;
}

function Movie(props: Props) {
    const { poster, title, release_date } = props;

    return (
        <>
            <Media image={poster} name={title} release_date={release_date} />
        </>
    );
}

export default Movie
