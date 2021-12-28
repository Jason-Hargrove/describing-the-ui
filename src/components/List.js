import { getImageUrl } from './utils3.js';
import { people } from '../data/data';
import { UpdatedPeople } from '../data/data2';
import { people3 } from '../data/data3';

export default function List() {
    const listItems = people.map(person =>
        <li>{person}</li>
    );

    const chemists = UpdatedPeople.filter(person =>
        person.profession === "chemist"
    );
    const filtItems = chemists.map(person =>
        <li key={person.id}>
            <b>{person.name}</b>
        </li>
    );

    const chemists2 = people3.filter(person =>
        person.profession === 'chemist'
    );
    const mappedItems = chemists2.map(person =>
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
        <>
            <ul className="people-list">
                {listItems}
            </ul>
            <br />
            <ul className="people-list">
                {filtItems}
            </ul>
            <ul className="people-list">
                {mappedItems}
            </ul>
        </>
    );
}