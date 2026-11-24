import { useState, type ChangeEvent, type CSSProperties } from "react"

interface FormData {
    name: string,
    race: string,
    class: string,
    level: number,
    description: string,
    isPublic: boolean,
}

function CharacterForm() {
    const [formData, setFormData] = useState({
        name: "",
        race: "",
        class: "",
        level: 1,
        description: "",
        isPublic: true,
    });
    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
    const errorStyle: CSSProperties = { textDecoration: "underline wavy red 1px" };

    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function validateForm(formData: FormData) {
        const errors: Partial<Record<keyof FormData, string>> = {};

        if (formData.name === undefined || formData.name.trim().length < 3 || formData.name.trim().length > 20) {
            errors.name = "Imie musi być podane i mieć od 3 do 20 znaków!!";
        }

        if (formData.race === "") {
            errors.race = "Rasa musi być podana!!";
        }

        if (formData.class === "") {
            errors.class = "Klasa musi być podana!!";
        }

        const level = formData.level;
        if (!Number.isInteger(level) || level < 1 || level > 100) {
            errors.level = "Poziom musi być liczbą całkowitą i mieścić się w zakresie 1–100";
        }

        if (formData.description.length > 200) {
            errors.description = "Opis może zawierać maksymalnie 200 znaków";
        }

        return errors;
    }

    return (
        <>
            <form onSubmit={(event) => {
                event.preventDefault();
                const validationErrors = validateForm(formData);
                if (Object.keys(validationErrors).length < 1) {

                }
                setErrors(validationErrors);
            }}>
                <label htmlFor="name" style={errors.name ? errorStyle : undefined}>Imię: </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                /><br />
                {errors.name && (
                    <p className="error">
                        {errors.name}
                    </p>
                )}

                <label htmlFor="race" style={errors.race ? errorStyle : undefined}>Rasa: </label>
                <select
                    id="race"
                    name="race"
                    value={formData.race}
                    onChange={handleChange}>
                    <option value="" selected>Wybierz opcję</option>
                    <option value="Człowiek">Człowiek</option>
                    <option value="Elf">Elf</option>
                    <option value="Krasnolud">Krasnolud</option>
                    <option value="Ork">Ork</option>
                </select><br />
                {errors.race && (
                    <p className="error">
                        {errors.race}
                    </p>
                )}

                <label htmlFor="class" style={errors.class ? errorStyle : undefined}>Klasa: </label>
                <select
                    id="class"
                    name="class"
                    value={formData.class}
                    onChange={handleChange}>
                    <option value="" selected>Wybierz opcję</option>
                    <option value="Wojownik">Wojownik</option>
                    <option value="Mag">Mag</option>
                    <option value="Łucznik">Łucznik</option>
                </select><br />
                {errors.class && (
                    <p className="error">
                        {errors.class}
                    </p>
                )}

                <label htmlFor="level" style={errors.level ? errorStyle : undefined}>Poziom: </label>
                <input
                    type="number"
                    id="level"
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                /><br />
                {errors.level && (
                    <p className="error">
                        {errors.level}
                    </p>
                )}

                <label htmlFor="description" style={errors.description ? errorStyle : undefined}>Opis: </label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                ></textarea><br />
                {errors.description && (
                    <p className="error">
                        {errors.description}
                    </p>
                )}

                <label htmlFor="publicCharacter" style={errors.isPublic ? errorStyle : undefined}>Postać publiczna: </label>
                <input
                    type="checkbox"
                    id="publicCharacter"
                    name="publicCharacter"
                    checked={formData.isPublic}
                    onChange={(event) => {
                        setFormData(prev => ({
                            ...prev,
                            isPublic: event.target.checked
                        }))
                    }}
                /><br />

                <button>Utwórz postać</button>
            </form>
        </>
    )
}

export default CharacterForm
