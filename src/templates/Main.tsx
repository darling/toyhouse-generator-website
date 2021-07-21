import React, { ReactNode } from 'react';
import Footer from '../components/Footer';

import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
	meta: ReactNode;
	children: ReactNode;
};

const Main = (props: IMainProps) => (
	<>
		<div className="tw-min-h-screen">
			{props.meta}
			<div className="tw-container mx-auto">
				<div className="">
					<div className="tw-pt-16 tw-pb-8">
						<h1 className="tw-font-bold">{AppConfig.title}</h1>
						<p className="">{AppConfig.description}</p>
					</div>
					<div className="">{props.children}</div>
				</div>
			</div>
		</div>
		<Footer />
	</>
);

export { Main };
