import { useState } from "react";

interface Props {
    title: string;
    searchId?: string;
    elements: Array<React.JSX.Element>;
}

function GalleryRenderer(props: Props) {
    const { title, searchId, elements } = props;
    const [isOpen, setIsOpen] = useState(true);
    const [searchText, setSearchText] = useState("");

    const query = searchText.toLowerCase();
    const filteredElements = elements.filter(element => {
        if (!query) return true;
        const title = element.props?.title ?? "";
        return title.toLowerCase().includes(query);
    });

    return (
        <>
            <h1 onClick={() => setIsOpen(!isOpen)}>
                {title} {isOpen ? <span>⏵</span> : <span>⏷</span>}
            </h1>
            {isOpen && (
                <>
                    {searchId !== undefined ?
                        <input
                            id={searchId + "-search"}
                            type="text"
                            className="form-control mb-5"
                            placeholder="Wpisz tytuł"
                            onChange={(event) => {
                                let text = event.target.value;
                                console.log("Tekst to: " + text);
                                setSearchText(text);
                            }}
                        />
                        : null}
                    {searchText.length !== 0 && searchId !== undefined ? <h4 id={searchId + "-display"}>{searchText}</h4> : null}
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                        {filteredElements.map((element, index) => (
                            <div className="col" key={index}>
                                {element}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </>
    );
}

export default GalleryRenderer
