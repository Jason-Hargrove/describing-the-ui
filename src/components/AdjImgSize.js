import { getImageUrl } from './utils2.js'

function Avatar ({ person, size }) {
    let newSize = '';
    (size < 90) ? newSize = 's' : newSize = 'b';
    console.log(newSize);

    return (
        <img
            className="avatar"
            src={getImageUrl(person, newSize)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export default function AdjImgSize() {
    return (
        <Avatar
            size={91}
            person={{
                name: 'Gregorio Y. Zara',
                imageId: '7vQD0fP'
            }}
        />
    );
}