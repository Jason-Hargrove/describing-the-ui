function Profile() {
    return (
        <img
            src="https://i.imgur.com/MK3eW3Am.jpg"
            alt="Katherine Johnson"
        />
    );
}

function Profile2() {
    return <img src="https://i.imgur.com/lICfvbD.jpg" alt="Aklilu Lemma" />;
}

function Profile3() {
    return <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;
}

export default function Gallery() {
    return (
        <section>
            <h1>Amazing Scientists</h1>
            <Profile />
            <Profile />
            <Profile2 />
            <Profile3 />
        </section>
    );
}