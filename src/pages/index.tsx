import { kebabCase } from 'lodash';
import Link from 'next/link';
import React, { FC } from 'react';
import { authorData } from '../authors';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index: FC = () => {
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
					{authorData.map((author) => {
						return (
							<li key={author.name}>
								<Link href={`/o/${kebabCase(author.name)}`}>
									<a>{author.name}</a>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</Main>
	);
};

export default Index;
