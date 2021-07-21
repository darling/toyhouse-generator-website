import React, { ReactNode, FC } from 'react';

import Footer from '../components/Footer';
import { AppConfig } from '../utils/AppConfig';

export const TemplatePage: FC<{
	meta: ReactNode;
	templateInfo: {
		author: string;
		authorUrl: string;
		policyUrl: string;
		title: string;
		description: string;
	};
}> = (props) => (
	<>
		<div className="tw-min-h-screen">
			{props.meta}
			<div className="tw-container mx-auto">
				<div className="">
					<div className="tw-pt-16 tw-pb-8 tw-px-4 tw-mx-auto">
						<h1 className="tw-font-bold">{AppConfig.title}</h1>
						<p className="">{AppConfig.description}</p>
					</div>
					<div className="tw-pb-8 tw-px-4 tw-mx-auto tw-space-y-4">
						<h2>Template Information</h2>
            <div className="tw-bg-indigo-100 tw-py-8 tw-px-4 tw-rounded-lg">
							<h2 className="tw-text-4xl tw-font-bold">
								{props.templateInfo.title}
								<span className="tw-text-2xl tw-font-normal">
									{' '}
									by{' '}
									<a
										className="tw-font-medium tw-text-indigo-600 hover:tw-text-indigo-500"
										href={props.templateInfo.authorUrl}
									>
										{props.templateInfo.author}
									</a>
								</span>
							</h2>
						</div>
						<div className="tw-flex tw-flex-col md:tw-flex-row md:tw-space-x-4 tw-space-y-4 md:tw-space-y-0">
							<div className="tw-bg-white tw-shadow sm:tw-rounded-lg">
								<div className="tw-px-4 tw-py-5 tw-sm:p-6">
									<h3 className="tw-text-lg tw-leading-6 tw-font-medium tw-text-gray-900">
										Notice
									</h3>
									<div className="tw-mt-2 tw-max-w-xl tw-text-sm tw-text-gray-500">
										<p>
											Please visit the author and give
											your support for the theme.
										</p>
									</div>
									<div className="tw-mt-3 tw-text-sm">
										<a
											href={props.templateInfo.authorUrl}
											className="tw-font-medium tw-text-indigo-600 hover:tw-text-indigo-500"
										>
											{' '}
											Learn more{' '}
											<span aria-hidden="true">
												&rarr;
											</span>
										</a>
									</div>
								</div>
							</div>
							<div className="tw-bg-white tw-shadow sm:tw-rounded-lg">
								<div className="tw-px-4 tw-py-5 tw-sm:p-6">
									<h3 className="tw-text-lg tw-leading-6 tw-font-medium tw-text-gray-900">
										Author's Rules
									</h3>
									<div className="tw-mt-2 tw-max-w-xl tw-text-sm tw-text-gray-500">
										<p>
											The author,{' '}
											<a
												className="tw-text-indigo-400"
												href={
													props.templateInfo.authorUrl
												}
											>
												{props.templateInfo.author}
											</a>
											, has a set of rules that you must
											follow when using the template.
											Please check them here.
										</p>
									</div>
									<div className="tw-mt-3 tw-text-sm">
										<a
											href={props.templateInfo.policyUrl}
											className="tw-font-medium tw-text-indigo-600 hover:tw-text-indigo-500"
										>
											{' '}
											See the rules{' '}
											<span aria-hidden="true">
												&rarr;
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>
						
					</div>
					<div className="">{props.children}</div>
				</div>
			</div>
		</div>
		<Footer />
	</>
);
