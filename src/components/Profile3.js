import Avatar3 from "./Aviato"

function Card({children}) {
    return (
        <div className="card">
            {children}
        </div>
    )
}

export default function Profile4() {
    return (
        <div>
            <Card>
                <Avatar3
                    size={100}
                    person={{
                        name: 'Katsuko Saruhashi',
                        imageId: 'YfeOqp2'
                    }}
                 />
                <Avatar3
                    size={125}
                    person={{
                        name: 'Aklilu Lemma',
                        imageId: 'OKS67lh'
                    }}
                />
                <h1>Hello</h1>
                Hello
            </Card>
            <Avatar3
                size={150}
                person={{
                    name: 'Lin Lanying',
                    imageId: '1bX5QH6'
                }}
            />
        </div>
    );
}