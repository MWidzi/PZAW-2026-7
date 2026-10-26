import Media from "./MediaDisplay.tsx";

interface Props {
    /**
    * okładka ksiązki
    */
    cover: string;
    /**
    * tytuł ksiązki
    */
    title: string;
    /**
    * data wydania książki
    */
    release_date: number;
    /**
    * ilość stron ksiązki
    */
    page_count: number;
}

function Book(props: Props) {
    const { cover, title, release_date, page_count } = props;

    return (
        <>
            <Media image={cover} name={title} release_date={release_date} page_count={page_count} optionalTag={release_date < 2000 ? <p className="fg-success">Klasyka</p> : undefined} />
        </>
    );
}

export default Book
