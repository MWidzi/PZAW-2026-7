interface Props {
    id: number;
    name: string,
    checked: boolean,
    toggleFunction: (id: number) => void,
}
function Task(props: Props) {
    const {id, name, checked, toggleFunction} = props;

    return (
        <>
            <input type="checkbox" checked={checked} onClick={() => toggleFunction(id)} />
            <span>{name}</span>
            <br />
        </>
    )
}

export default Task;