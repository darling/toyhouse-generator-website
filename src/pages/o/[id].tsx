import { kebabCase } from 'lodash';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import React, { FC } from 'react';
import { authorData, IAuthorData } from '../../authors';
import { themeData } from '../../data';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';

const Page: FC<{ author: IAuthorData }> = (props) => {
	return (
    <Main
			meta={
				<Meta
					title={'About ' + props.author.name}
					description="Edit Toyhouse Codes with ease."
				/>
			}
		>
			<div className="tw-prose tw-prose-indigo">
				<h1>{props.author.name}</h1>
				<div>
					<Link href="/">
						<a className="tw-text-indigo-600">&larr; Go Back</a>
					</Link>
				</div>
        <h2>Main Links</h2>
        <a className="tw-bg-indigo-100 tw-p-2 tw-rounded-md" href={props.author.toyhouseUrl}>Toyhou.se</a>
        <a hidden={!props.author.policyUrl} className="tw-bg-indigo-100 tw-p-2 tw-rounded-md tw-ml-4" href={props.author.policyUrl}>Template Policy</a>
				<div hidden={!props.author.links}><h2>Quick Links</h2>
				<p>Please support the creator!</p>
				<ul>
					{props.author.links?.map((link) => (
						<li key={link.label}>
							<a href={link.url}>{link.label}</a>
						</li>
					))}
				</ul></div>
				<h2>Templates</h2>
				<ul>
					{props.author.themes?.map((theme) => (
						<li key={theme.name}>
							<Link href={`/c/${theme.slug}`}>
								<a>{theme.name}</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
      <div>
		</div>
		</Main>

	);
};

export const getStaticProps: GetStaticProps = async (
	context: GetStaticPropsContext
) => {
	const author = authorData.find(
		(author) => kebabCase(author.name) === context.params?.id
	);

	const themes = themeData
		.filter((theme) => {
			return kebabCase(theme.userCode) === kebabCase(author?.name);
		})
		.map((theme) => ({ name: theme.name, slug: kebabCase(theme.name) }));

	if (!author) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			author: { ...author, slug: kebabCase(author.name), themes },
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const pathArray = authorData.map((author) => kebabCase(author.name));

	const paths = pathArray.map((slug) => ({ params: { id: slug } }));

	return {
		paths, // { params: { code: 'luna' } }
		fallback: false,
	};
};

export default Page;
