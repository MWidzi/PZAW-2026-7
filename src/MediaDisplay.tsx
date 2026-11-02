import type React from "react";

interface Props {
    image: string;
    name: string;
    release_date?: number;
    page_count?: number;
    artist?: string;
    genre?: string;
    duration?: number;
    rating?: number;
    optionalTag?: React.JSX.Element;
}

function Media(props: Props) {
    const { image, name, optionalTag } = props;

    let elements: React.JSX.Element[] = [];
    let keys: keyof Props;

    for (keys in props) {
        // wrapper lokalna zmienna bo typescript to super jezyk
        const val = props[keys];
        if (val === undefined) continue;

        if (keys == "image" || keys == "name" || keys == "optionalTag") continue;
        else if (keys == "release_date" && typeof val === "number" && val < 0) {
            elements.push(<p>{Math.abs(val)} B.C.</p>);
            continue;
        }

        elements.push(<p className="card-text"><span className="fg-primary">{keys.replaceAll("_", " ")}: </span>{val}</p>);
    }

    return (
        <>
            <div className="card mb-2" onClick={() => {
                console.log("Wybrano: " + name);
            }}>
                <div className="row g-0">
                    <div className="col-4">
                        <img src={image} className="img-fluid rounded-start" alt={image} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <div className="text-start">
                                <h3 className="card-title">{name}</h3>
                                {elements}
                                <br />
                                <button className="btn" onClick={(target) => {
                                    target.stopPropagation()
                                    console.log("Wyświetl szczegóły dla: " + name);
                                }}>Pokaż szczegóły</button>
                                <br />
                                <br />
                                {optionalTag !== undefined ? optionalTag : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Media
