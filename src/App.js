import React, { useState, useEffect } from "react";

const url = "https://randomuser.me/api/";
const App = () => {
	const [details, setDetails] = useState(""); // fetched data will be stored in this
	const [loading, setLoading] = useState(true); //loading
	const [error, setError] = useState(false); //error

	//fetching the data
	const fetchData = async () => {
		try {
			const resp = await fetch(url);
			const data = await resp.json();
			setDetails(data);
			setLoading(false);
		} catch {
			setLoading(false);
			setError(true);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	//results is the array inside the api object
	const { results } = details;
	return (
		<>
			{loading && <h1 className='status'>Loading...</h1>}
			{error && (
				<h1 className='status'>Error... Please try refreshing the page</h1>
			)}

			{loading || (
				<>
					<h1 className='heading'>Bonjour XXX</h1>
					<article className='page-container'>
						<section className='profile-info'>
							{results.map((value) => {
								return (
									<div key={value.phone}>
										<header className='profile-header'>
											<div>
												<img
													className='profile'
													src={value.picture.thumbnail}
													alt='profile'
												/>
												<h3 className='name'>{`${value.name.title} ${value.name.first} ${value.name.last}`}</h3>
												<p className='email'>{value.email}</p>
											</div>
											<button className='btn'>Editer Mon Profil</button>
										</header>
										<main className='main-content'>
											<p className='info'>INFORMATION</p>
											<p>Age: {value.dob.age}</p>
											<p>
												Addresse:
												{` ${value.location.street.number} ${value.location.street.name} ${value.location.city} ${value.location.state} ${value.location.country} `}
											</p>
											<p>Telephone:{value.phone}</p>
										</main>
									</div>
								);
							})}
						</section>
						<aside className='sideInfo'>
							<section className='etape1'>
								<span className='num1'>1</span>
								<div className='etape'>
									<h4>Etape 1</h4>
									<p className='tag tag1'>En cours</p>
								</div>
							</section>
							<section className='etape2'>
								<span className='num'>2</span>
								<div className='etape'>
									<h4>Etape 2</h4>
									<p className='tag'>A venir</p>
								</div>
							</section>
							<section className='etape3'>
								<span className='num'>3</span>
								<div className='etape'>
									<h4>Etape 3</h4>
									<p className='tag'>A venir</p>
								</div>
							</section>
						</aside>
						<section className='footer'>
							<h3>Auxerunt haec vulgi</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Laboriosam optio qui nihil rerum velit ullam distinctio,
								deleniti vel, ducimus quo ut? Animi sapiente sit eaque inventore
								qui corrupti iste adipisci.
							</p>
						</section>
					</article>
				</>
			)}
		</>
	);
};

export default App;
