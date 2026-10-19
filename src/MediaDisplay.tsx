interface Props {
    image: string;
    name: string;
    release_date?: number;
    page_count?: number;
    artist?: string;
    genre?: string;
    duration?: number;
}

// Chciałem zrobić trochę bardziej dynamicznie zanim zerknąłem na faktyczne wymagania zadania wiec tak już zostało
function Media(props: Props) {
    const { image } = props;

    let elements: React.JSX.Element[] = [];
    let keys: keyof Props;

    for (keys in props) {
        if (keys == "image") continue;
        if (props[keys] === undefined) continue;

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
