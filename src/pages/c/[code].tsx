import { Formik } from 'formik';
import { kebabCase, template } from 'lodash';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';

import { authorData } from '../../authors';
import { FormAutoInputFromType } from '../../components/FormGroups';
import { PageSegment } from '../../components/PageSegment';
import { themeData } from '../../data';
import { Meta } from '../../layout/Meta';
import { TemplatePage } from '../../templates/TemplatePage';

const Page = (props: any) => {
	const compiled = template(props.theme.html, { interpolate: /{{([\s\S]+?)}}/g });

	return (
		<TemplatePage
			meta={
				<Meta
					title={
						props.theme.name + ' by ' + props.theme.author.name ||
						'Toyhouse Code Template'
					}
					description={'Edit this theme today!'}
				/>
			}
			templateInfo={{
				title: props.theme.name,
				author: props.theme.author.name,
				authorUrl: props.theme.author.toyhouseUrl,
				policyUrl: props.theme.author.policyUrl,
				description: '',
			}}
		>
			<div>
				<Formik
					onSubmit={() => {}}
					initialValues={props.theme.declaredData}
          enableReinitialize
				>
					{({ values }) => (
						<>
							<div className="tw-flex tw-flex-col lg:tw-flex-row tw-px-4 tw-mx-auto ">
								<div className="tw-mr-0 lg:tw-mr-4 lg:tw-w-1/3 tw-prose tw-prose-indigo">
                  <h2>Form</h2>
                  { Object.keys(values).map(key => <FormAutoInputFromType value={values} key={key} for={key} data={props.theme.declaredData} type={props.theme.typings} />) }
                </div>
								<div className="tw-w-full">
									<div className="tw-prose">
										<h2>Preview</h2>
									</div>
									<div
										dangerouslySetInnerHTML={{
											__html: compiled(values),
										}}
                    className="tw-my-4 "
									/>
								</div>
							</div>
							<PageSegment>
								<h2>Code Output</h2>
								<pre className="bg-dark text-white tw-p-6 tw-rounded-md tw-select-all">
                  {compiled(values)}
								</pre>
							</PageSegment>
						</>
					)}
				</Formik>
			</div>
		</TemplatePage>
	);
};

export const getStaticProps: GetStaticProps = async (
	context: GetStaticPropsContext
) => {
	const theme = themeData.find(
		(testTheme) => kebabCase(testTheme.name) === context.params?.code
	);

	const author = authorData.find(
		(author) => kebabCase(author.name) === kebabCase(theme?.userCode)
	);

	if (!theme) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			theme: { ...theme, slug: kebabCase(theme.name), author },
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const pathArray = themeData.map((theme) => kebabCase(theme.name));

	const paths = pathArray.map((slug) => ({ params: { code: slug } }));

	return {
		paths, // { params: { code: 'luna' } }
		fallback: false,
	};
};

export default Page;
