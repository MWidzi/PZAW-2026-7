interface Props {
    /** Imie osoby do powitania */
    name: string;
    /** (Opcjonalne) Wiek osoby */
    age?: number;
}

function Greeter({ age = 18, name }: Props) {
    if (age < 30) {
        return (
            <p> Witaj {name} !</p>
        );
    } else {
        return (
            <p> Dzień dobry {name}!</p>
        );
    }
}

export default Greeter
