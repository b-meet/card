import React from "react";
import { useState } from "react";
import data from "./data";

function People() {
	const [people, setPeople] = useState(data);
	const [numberOfBirthdays, setNumberOfBirthdays] = useState(data.length);

	const remove = (id) => {
		if (numberOfBirthdays > 1) {
			setNumberOfBirthdays(numberOfBirthdays - 1);
		} else {
			setNumberOfBirthdays("No");
		}
		setPeople(people.filter((person) => person.id !== id));
	};

	return (
		<>
			<h3 className='top-sentence'>{numberOfBirthdays} birthdays today</h3>
			{people.map((person) => {
				const { id, name, age, image } = person;
				return (
					<section key={id} className='container'>
						<img src={image} className='profile-picture' />
						<div>
							<h4 className='name'>{name}</h4>
							<p className='age'>{age}</p>
						</div>
						<button className='btn' onClick={() => remove(id)}>
							Wish
						</button>
					</section>
				);
			})}
			{numberOfBirthdays > 0 && (
				<button
					className='clear-btn'
					onClick={() => {
						setPeople([]);
						setNumberOfBirthdays("No");
					}}
				>
					Clear All
				</button>
			)}
		</>
	);
}

export default People;
