interface Props {
    title: string;
    duration: number;
}

function Song(props: Props) {
    const { title, duration } = props;

    return (
        <>
            <td>{title}</td>
            <td className="text-end">{Math.floor(duration / 60)}:{String(duration % 60).padStart(2, '0')}</td>
        </>
    );
}

export default Song
