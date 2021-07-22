import React from 'react';
import Link from 'next/link';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';

const userInformation = {
	name: 'Eggy',
	urls: [
		{ url: 'https://toyhou.se/Eggy', name: 'toyhou.se' },
		{
			url: 'https://toyhou.se/~bulletins/40160.freebie-rules',
			name: 'Rules',
		},
		{ url: 'https://ko-fi.com/eggy/shop', name: 'Ko-Fi' },
		{ url: 'https://lowkeywicked.gumroad.com/?sort=price_asc', name: 'Gumroad' },
	],
};

const templates = [{ name: 'Misaligned (custom)', slug: 'misaligned-custom' }];

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
