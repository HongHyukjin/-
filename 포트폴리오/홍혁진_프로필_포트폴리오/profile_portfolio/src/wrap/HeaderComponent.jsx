import React from 'react';

export default function HeaderComponent () {
    return (
        <header id='header'>
			<div>
				<div class='nav'>
					<h1><a href='index.html'>Hong Hyuk Jin</a></h1>
					<ul>
						<li><a href='#section1' class='smoothBtn'>Main</a></li>
						<li><a href='#section2' class='smoothBtn'>Portfolio</a></li>
						<li><a href='#section6' class='smoothBtn'>Skill</a></li>
						{/* <li><a href='#section4' class='smoothBtn'>Design</a></li> */}
					</ul>
				</div>
			</div>
		</header>
    );
};

