const people = [
    "Creola Katherine Johnson: mathematician",
    "Mario José Molina-Pasquel Henríquez: chemist",
    "Mohammad Abdus Salam: physicist",
    "Percy Lavon Julian: chemist",
    "Subrahmanyan Chandrasekhar: astrophysicist"
];

const listItems = people.map(person => <li>{person}</li>);

console.log('groovy')

export default function List() {
    return (
        <>
            <h1>Hello</h1>
        </>
    );
}
