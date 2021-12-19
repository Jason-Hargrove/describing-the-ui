function Avatar({ person, size}) {
    return (
        <img
            className="avatar2"
            src={`https://i.imgur.com/${person.imageId}.jpg`}
            alt={person.name}
            width={size}
            height={size}
        />
    )
}

export default function Avatar2() {
    return (
        <Avatar
            person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
            size={100}
        />
    )
}