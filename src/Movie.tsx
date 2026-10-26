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
    /**
    * ocena filmu w skali od 1 do 10
    */
    rating: number;
}

function Movie(props: Props) {
    const { poster, title, release_date, rating } = props;

    return (
        <>
            <Media image={poster} name={title} release_date={release_date} rating={rating} />
            {rating >= 8 ? <p>Polecany</p> : null}
        </>
    );
}

export default Movie
