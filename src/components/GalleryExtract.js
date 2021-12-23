import { getImageUrl } from './Utils.js';

function Extract({
   title,
   imageId,
   alt,
   imageSize= 70,
   profession,
   awards,
   discovered
}) {
    return (
        <>
            <section className="profile">
                <h1>{title}</h1>
                <img
                    className="avatar"
                    src={getImageUrl({imageId})}
                    alt={alt}
                    width={imageSize}
                    height={imageSize}
                />
                <ul>
                    <li>
                        <b>Profession: </b>
                        {profession}
                    </li>
                    <li>
                        <b>Awards: {awards.length}</b>
                        {awards
                            .map(item => <div>{item}</div>)
                        }
                        {awards.join(', ')}
                    </li>
                    <li>
                        <b>Discoveries: </b>
                        {discovered}
                    </li>
                </ul>
            </section>
        </>
    );
}

export default function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <Extract
                title={'Extracted 1'}
                imageId={'szV5sdG'}
                alt={"Maria Skłodowska-Curie Extracted-1"}
                profession={'physicist and chemist'}
                awards={[
                    'Nobel Prize in Physics',
                    'Nobel Prize in Chemistry',
                    'Davy Medal',
                    'Matteucci Medal'
                ]}
                discovered={'polonium (element)'}
            />
            <Extract
                title={'Extracted 2'}
                imageId={'YfeOqp2'}
                alt={"Katsuko Saruhashie Extracted-2"}
                profession={'geochemist'}
                awards={[
                    'Miyake Prize for geochemistry',
                    'Tanaka Prize'
                ]}
                discovered={'a method for measuring carbon dioxide in seawater'}
            />
        </div>
    );
}
