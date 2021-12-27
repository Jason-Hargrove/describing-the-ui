
const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
];

const UpdatedPeople = [{
        id: 0,
        name: "Creola Katherine Johnson",
        profession: "mathematician"
    }, {
        id: 1,
        name: "Mario José Molina-Pasquel Henríquez",
        profession: "chemist"
    }, {
        id: 2,
        name: "Mohammad Abdus Salam",
        profession: "physicist"
    }, {
        name: "Percy Lavon Julian",
        profession: "chemist"
    }, {
        name: "Subrahmanyan Chandrasekhar",
        profession: "astrophysicist"
    }];

export default function List() {
    const listItems = people.map(person =>
        <li>{person}</li>
    );

    const chemists = UpdatedPeople.filter(person =>
        person.profession === "chemist"
    );

    const filtItems = chemists.map(person =>
        <li>
            <b>{person.name}</b>

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
        </>
    );
}
