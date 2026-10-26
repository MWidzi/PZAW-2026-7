import { useState } from "react";

interface Props {
    title: string;
    elements: Array<React.JSX.Element>;
}

function GalleryRenderer(props: Props) {
    const { title, elements } = props;
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            <h1 onClick={() => setIsOpen(!isOpen)}>{title} {isOpen ? <span>⏵</span> : <span>⏷</span>}</h1>
            {isOpen ? elements : null}
        </>
    );
}

export default GalleryRenderer
