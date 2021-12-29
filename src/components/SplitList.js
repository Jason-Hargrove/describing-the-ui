import { people3 } from "../data/data3";
import { getImageUrl } from "./utils3";

{/* ===== Chemists ===== */}
export default function SplitList() {
    const chemists = people3.filter(person =>
        person.profession === "chemist"
    );

    const listChemists = chemists.map(person =>
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );

{/* ===== Everyone Else ===== */}
    const everyoneElse =  people3.filter(person =>
        person.profession !== "chemist"
    );

    const listEveryoneElse = everyoneElse.map(person =>
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );

    return (
        <article className="split-list">
            <h1>Scientists</h1>
            <h2>Chemists</h2>
            <ul>{listChemists}</ul>
            <h2>Everyone Else</h2>
            <ul>{listEveryoneElse}</ul>
        </article>
    );
}