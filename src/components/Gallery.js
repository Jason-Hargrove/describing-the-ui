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

function Profile4() {
    return (
        <img
            src="https://i.imgur.com/QIrZWGIs.jpg"
            alt="Alan L. Hart"
        />
    );
}

export function Jason() {
    return (
        <>
            <img
                style={{width: "10em"}}
                src="https://images.squarespace-cdn.com/content/v1/57902faa59cc68a958c59c03/1470085548577-TLE1GYXRPL9ISJ1O3RFS/Jason+Hargrove?format=2500w"
                alt="Jason Hargrove"
            />
            <article style={{textAlign: "right"}}>
                <a href="http://www.jasonhargroveart.com/">Jason Hargrove Gallery</a>
            </article>

        </>
    );
}

export default function Gallery() {
    return (
        <section>
            <h1>Amazing Scientists</h1>
            <Profile />
            <Profile />
            <Profile2 />
            <Profile3 />
            <Profile4 />
        </section>
    );
}