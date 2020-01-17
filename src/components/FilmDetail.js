import React, {useState, useEffect} from 'react'
import getPeople from '../effect/getPeople';
export default function FilmDetail({film}) {
    const [people, setPeople] = useState([]);
    console.log(film);
    const linkPeople = film.people || '';
    useEffect(async ()=> {
        const result =  await getPeople();
        setPeople(result);
    }, []);
    return (
        <div>
            <div>
                Title: {film.title}
            </div>
            <div>
                Description: {film.description}
            </div>
            <div>
                People: 
            </div>
            <ul>
                {people.map(item => (
                    <li key={item.id}>
                    <div>Name: {item.name}</div>
                    <div>Gender: {item.gender}</div>
                    <div>Eye color: {item.eye_color}</div>

                    </li>
                ))}
                </ul>
        </div>
    )
}