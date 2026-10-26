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
            <h1 onClick={() => setIsOpen(!isOpen)}>
                {title} {isOpen ? <span>⏵</span> : <span>⏷</span>}
            </h1>
            {isOpen && (
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                    {elements.map((element, index) => (
                        <div className="col" key={index}>
                            {element}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default GalleryRenderer
