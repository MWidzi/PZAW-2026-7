interface Props {
    image: string;
    name: string;
    release_date: number;
}

function Media(props: Props) {
    const { image } = props;

    let elements: React.JSX.Element[] = [];
    let keys: keyof Props;

    for (keys in props) {
        if (keys == "image") continue;

        elements.push(<p>{props[keys]}</p>);
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
