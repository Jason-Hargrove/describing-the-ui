// Refactor a series of ?:.

const tea =[
    'leaf',
    '15–70 mg/cup',
    '4,000+ years'
];
const coffee = [
    'bean',
    '80–185 mg/cup',
    '1,000+ years'
];

function Drink({ name }) {
    let data = [];

    if (name === 'tea') {
        tea.map(item => {
            data.push(item)
        })
    }
    if (name === 'coffee') {
        coffee.map(item => {
            data.push(item)
        })
    }

    return (
        <section>
            <h1>{name}</h1>
            <dl>
                <dt>Part of plant</dt>
                <dd>{data[0]}</dd>
                <dt>Caffeine content</dt>
                <dd>{data[1]}</dd>
                <dt>Age</dt>
                <dd>{data[2]}</dd>
            </dl>
        </section>
    );
}

export default function DrinkList() {
    return (
        <div className="drink-list">
            <Drink name="tea" />
            <Drink name="coffee" />
        </div>
    );
}
