import { people3 } from "../data/data3";
import { getImageUrl } from "./utils3";

let physicists = [];
let everyoneElse = [];
people3.forEach(person => {
    if (person.profession === 'physicist') {
        physicists.push(person);
    } else {
        everyoneElse.push(person);
    }
});

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
    return (
        <article className="split-list">
            <h1>Scientists - <span style={{color: "red"}}>SplitList3 - clean</span></h1>
            <ListSection
                title="Physicists"
                people={physicists}
            />
            <ListSection
                title="Everyone Else"
                people={everyoneElse}
            />
        </article>
    );
}