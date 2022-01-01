import { people3 } from "../data/data3";
import { getImageUrl } from "./utils3";

// ========== Extract Repetitive Parts Into a <ListSection> Component ==========

function ListSection({ title, people }) {
    return (
        <>
            <h2>{title}</h2>
            <ul>
                {people.map(person =>
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
                )}
            </ul>
        </>
    );
}

export default function SplitList3() {

// ===== Chemists =====
    const chemists = people3.filter(person =>
        person.profession === "chemist"
    );
// ===== Everyone Else =====
    const everyoneElse =  people3.filter(person =>
        person.profession !== "chemist"
    );
    return (
        <article className="split-list">
            <h1>Scientists - <span style={{color: "red"}}>SplitList3 - clean</span></h1>
            <ListSection
                title="Chemists"
                people={chemists}
            />
            <ListSection
                title="Everyone Else"
                people={everyoneElse}
            />
        </article>
    );
}