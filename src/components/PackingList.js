function Item({ name, isPacked }) {
    return (
        <li className="item">
            {isPacked ? name + ' ✔' : name}
        </li>
    )
}

export default function PackingList() {
    return (
        <section className="packing-list">
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name={'Space Suit'}
                />
            </ul>
            <ul>
                <Item
                    isPacked={true}
                    name={'Helmet with a golden leaf'}
                />
            </ul>
            <ul>
                <Item
                    isPacked={false}
                    name={'Photo of Tam'}
                />
            </ul>
        </section>
    );
}