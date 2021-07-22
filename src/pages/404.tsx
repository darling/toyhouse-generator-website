import Link from 'next/link';
import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
	return (
		<Main
			meta={
				<Meta
					title="404"
					description="Edit Toyhouse Codes with ease."
				/>
			}
		>
			<div className="tw-prose tw-prose-indigo">
				<h1>404</h1>
				<p>
					Lost?
				</p>
        <Link href="/"><a>Go home</a></Link>
			</div>
		</Main>
	);
};

export default Index;
