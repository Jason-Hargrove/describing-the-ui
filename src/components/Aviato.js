import { getImageUrl } from './Utils.js';

export default function Avatar3({ person, size }) {
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