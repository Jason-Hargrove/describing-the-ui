function Item({ name, isPacked }) {
    return <li className="item">{name}</li>
}

export default function PackingList() {
    return (
        <>
            <h1>Groovy</h1>
            <Item name={'boomstick'} />
        </>
    )
}