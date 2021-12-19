import { getImageUrl } from './Utils.js';

function Avatar3({ person, size }) {
    return (
        <img
            className="avatar3"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export default function Profile3() {
    return (
        <div>
            <Avatar3
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
        </div>
    );
}