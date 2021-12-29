import { people3 } from "../data/data3";
import { getImageUrl } from "./utils3";

// ========== Extract Repetitive Parts Into a <ListSection> Component ==========
export default function SplitListFunc() {

// ===== Chemists =====
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

// ===== Everyone Else =====
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
            <h1>Scientists - <span style={{color: "blue"}}>SplitListFunc</span></h1>
            <h2>Chemists</h2>
            <ul>{listChemists}</ul>
            <h2>Everyone Else</h2>
            <ul>{listEveryoneElse}</ul>
        </article>
    );
}