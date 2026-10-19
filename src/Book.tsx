import Media from "./MediaDisplay.tsx";

interface Props {
    cover: string;
    title: string;
    release_date: number;
    page_count: number;
}

function Book(props: Props) {
    const { cover, title, release_date, page_count } = props;

    return (
        <>
            <Media image={cover} name={title} release_date={release_date} page_count={page_count} />
        </>
    );
}

export default Book
