import Link from 'next/link';
import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const authors = [
	{ name: '8Byte', slug: '8Byte' },
	{ name: 'Togo', slug: 'Togo' },
	{ name: 'Eggy', slug: 'Eggy' },
	{ name: 'Camy', slug: 'Camy' },
	{ name: 'Safe', slug: 'Safe' },
];

const Index = () => {
	return (
		<Main
			meta={
				<Meta
					title="Safe's template editor"
					description="Edit Toyhouse Codes with ease."
				/>
			}
		>
			<div className="tw-prose tw-prose-indigo">
				<h1>Want to edit a code?</h1>
				<p>
					You don't know how to code? That's alright, I made this
					website.
				</p>
				<p>
					All templates are sorted by author and such, author TOS and
					Rules still apply to these templates, so please follow those
					and show support for the original artists creating these
					templates.
				</p>
				<h2>List of authors</h2>
				<ul>
					{authors.map((author) => (
						<li key={author.slug}>
							<Link href={`/a/${author.slug}`}>
								<a>{author.name}</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</Main>
	);
};

export default Index;
