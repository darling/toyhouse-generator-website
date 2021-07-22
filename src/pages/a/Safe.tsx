import React from 'react';
import Link from 'next/link';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';

const userInformation = {
	name: 'Safe',
	urls: [
		{ url: 'https://toyhou.se/Safe', name: 'toyhou.se' }
	],
};

const templates = [{ name: '[ broken link ]', slug: '' }];

const Index = () => {
	return (
		<Main
			meta={
				<Meta
					title={'About ' + userInformation.name}
					description="Edit Toyhouse Codes with ease."
				/>
			}
		>
			<div className="tw-prose tw-prose-indigo">
				<h1>{userInformation.name}</h1>
				<div>
					<Link href="/">
						<a className="tw-text-indigo-600">&larr; Go Back</a>
					</Link>
				</div>
				<h2>Quick Links</h2>
				<p>Please support the creator!</p>
				<ul>
					{userInformation.urls.map((link) => (
						<li key={link.name}>
							<a href={link.url}>{link.name}</a>
						</li>
					))}
				</ul>
				<h2>Templates</h2>
				<ul>
					{templates.map((item) => (
						<li key={item.name}>
							<Link href={`/t/${item.slug}`}>
								<a>{item.name}</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</Main>
	);
};

export default Index;
