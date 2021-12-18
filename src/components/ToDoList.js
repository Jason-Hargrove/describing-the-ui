const today = new Date();

function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
    ).format(date);
}

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'pink',
        color: 'blue',
        padding: '20px'
    }
}

export default function ToDolist() {
    const name = "Hedy Lamarr"

    return (
        <>
            <div style={person.theme}>
                <h1>{person.name}'s Theme</h1>
                <h1>To Do List for {formatDate(today)}</h1>
                <h1>{name}'s Todos</h1>
                <img
                    src="https://i.imgur.com/yXOvdOSs.jpg"
                    alt="Hedy Lamarr"
                    className="photo"
                />
            </div>
            <ul style={
                {
                    backgroundColor: 'black',
                    color: 'pink'
                }
            }>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
        </>
    );
}