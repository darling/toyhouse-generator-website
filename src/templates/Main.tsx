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
			<div className="tw-container tw-mx-auto">
				<div className="tw-px-4">
					<div className="tw-pt-16 tw-pb-8">
						<div className="tw-font-bold tw-text-3xl">{AppConfig.title}</div>
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
