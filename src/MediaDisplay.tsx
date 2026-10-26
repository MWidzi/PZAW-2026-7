interface Props {
    image: string;
    name: string;
    release_date?: number;
    page_count?: number;
    artist?: string;
    genre?: string;
    duration?: number;
    rating?: number;
}

function Media(props: Props) {
    const { image } = props;

    let elements: React.JSX.Element[] = [];
    let keys: keyof Props;

    for (keys in props) {
        if (keys == "image") continue;
        // wrapper lokalna zmienna bo typescript to super jezyk
        const val = props[keys];
        if (val === undefined) continue;

        if (keys == "release_date" && typeof val === "number" && val < 0) {
            elements.push(<p>{Math.abs(val)}</p>);
        }

        elements.push(<p>{val}</p>);
        elements.push(<br />);
    }

    return (
        <>
            <img src={image} />
            {elements}
        </>
    )
}

export default Media
