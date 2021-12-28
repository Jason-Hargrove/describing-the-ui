import { people3 } from "../data/data3";
import { getImageUrl } from "./utils3";

export default function List2() {
    const listItems = people3.map(person =>
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}