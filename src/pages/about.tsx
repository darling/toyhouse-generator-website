import Link from 'next/link';
import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
	return (
		<Main
			meta={
				<Meta
					title="About"
					description="Edit Toyhouse Codes with ease."
				/>
			}
		>
			<div>
				<Link href="/">
					<a className="tw-text-indigo-600">&larr; Go Back</a>
				</Link>
			</div>
			<div className="tw-prose tw-prose-indigo">
				<h2>What is this site?</h2>
				<p>
					This website takes templates (with consent) from authors on
					toyhou.se and makes them readily availiable for users that
					don't understand code.
				</p>
				<p>That's it. That's the whole site.</p>
				<h2>Who made it?</h2>
				<p>
					<a href="http://ey.lc/">I did</a>
				</p>
				<h2>How can I contribute to the website?</h2>
				<p>
					If you know React and really like to code, feel free to hit
					me up in this{' '}
					<a href="https://discord.com/invite/hZFvnww">
						Discord Server
					</a>
					.
				</p>
				<p>
					If you don't know how to code, you can always donate money
					to me to keep the site running, or donate art to give
					programmers (me) more material to work with during the theme
					creation process.
				</p>
				<p>
					<span className="tw-text-sm">
						(If you want to do that also join the Discord Server
						above)
					</span>
				</p>
				<h2>Why is the site so ugly?</h2>
				<p></p>
			</div>
		</Main>
	);
};

export default Index;
