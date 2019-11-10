'use strict';

// App Component
function App(props) {
	return (
		<div className={'container'}>
			<header>
				<nav>
					<ul>
						<li>
							<a href={'#'} className={'active'}>About (React)</a>
						</li>
						<li>
							<a href={'Sally_Student_Resume_Semantic.html'}>Not React</a>
						</li>
					</ul>
				</nav>

				<h1>{props.name}</h1>
				<address>
					<a href={'mailto:sally@sally.com'} target={'_blank'}>{props.email}</a>
					<br />
					<a href={'tel:1-111-222-3344'}>{props.phone}</a>
					<br />
					<a href={props.url} target={'_blank'}>{props.url}</a>
					<br />
					<a href={'https://github.com/sally'} target={'_blank'}>{props.github}</a>
				</address>
				<br />
				<img
					src={'https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg'}
					alt={'Student Sally Picture'}
				/>
			</header>

			<main>
				<section id={'summary'}>
					<header><h2>Summary</h2></header>
					<p>
						I am a Web Developer that went through Thinkful's Web Development Full Stack Program.
				</p>
				</section>

				<section id={'education'}>
					<header><h2>Education</h2></header>
					<ul>
						<li>Cornell University, B.S 1998</li>
					</ul>
				</section>

				<section id={'skills'}>
					<header>
						<h2>Technical Skills</h2>
					</header>
					<ul>
						<li>Languages: HTML, CSS, JQuery,JavaScript, PHP</li>
							Frameworks: ReactJS, AngularJS
					</li>
						<li>Tools: Git</li>
					</ul>
				</section>

				<section id={'experience'}>
					<header>
						<h2>
							Work Experience
						<a href={'https://sally.com/work/'} target={'_blank'}>[more]</a>
						</h2>
					</header>

					<details open>
						<summary>SuperInterns.com (<a href={'http://superinterns.com/'} target={'_blank'}
						>http://xxx.com</a
						>), Junior Developer 2014 - 2015
					</summary>
						<p>
							Worked with different departments while coding the WordPress site for the company along with other developers.
					</p>
					</details>

					<details open>
						<summary>ADP Company (<a href={'http://adp.com'} target={'_blank'}
						>http://adp.com</a
						>), Junior Web Development Intern 2015 - 2017
					</summary>
						<p> Was exposed to all different departments and worked on many areas within the IT area </p>
				</section>

			<footer>
				&copy; 2019 {props.name}
			</footer>

		</div>
	);
};


const appRoot = document.querySelector('#root');

ReactDOM.render(
	<App
		name='Sally Student'
		email='sally@sally.com'
		phone='1-111-222-3344'
		url='http://www.sally.com'
		github='github.com/sally'
	/>,
	appRoot
);