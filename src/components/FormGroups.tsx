import { Disclosure } from '@headlessui/react';
import { Field, FieldArray } from 'formik';
import { get, isArray, join, keys, startCase, truncate } from 'lodash';
import React, { FC } from 'react';

import { ITypeParamData } from '../data';

export const FormAutoInputFromType: FC<{
	for: string;
	type: ITypeParamData;
	data: any;
	value: any;
}> = (props) => {
	const type = get(props.type, props.for.replace(/\[\d+\]/g, '[0]'));
	const value = get(props.value, props.for);

	switch (type) {
		case 'color':
			return <FormColorInput for={props.for} />;
		case 'check':
			return <FormCheckInput for={props.for} />;
		case 'long':
			return <FormLongInput for={props.for} />;
	}

	if (isArray(value)) {
    const propData = get(props.data, `${props.for}[0]`);

		return (
			<FormGroup title={startCase(props.for)}>
				<FieldArray name={props.for}>
					{({ remove, push }) => (
						<div>
							{value.length > 0 &&
								value.map((_item, index) => {
									return <div key={index} className="my-4">
										<FormAutoInputFromType
											key={`${props.for}[${index}]`}
                      {...props}
											for={`${props.for}[${index}]`}
										/>
										<button
											className="btn btn-danger"
											onClick={() => remove(index)}
										>
											remove "
											{truncate(
												startCase(
													`${props.for}[${index}]`
												),
												{ length: 30 }
											)}
											"
										</button>
									</div>
								})}
							<button
								className="btn btn-primary"
								onClick={() =>
									{
                    console.log('pushing:',propData)
                    push(propData)}
								}
							>
								Add element
							</button>
						</div>
					)}
				</FieldArray>
			</FormGroup>
		);
	}

	if (typeof value === 'object') {
		return (
			<FormGroup key={props.for} title={startCase(props.for)}>
				{keys(get(props.value, props.for)).map((o) => {
					return (
						<FormAutoInputFromType
              {...props}
							key={o}
							for={join([props.for, o], '.')}
						/>
					);
				})}
			</FormGroup>
		);
	} else {
		return <FormInput for={props.for} />;
	}
};

export const FormInput: FC<{
	for: string;
	value?: string;
	showToggle?: string;
}> = (props) => {
	return (
		<div className="form-group">
			<label htmlFor={props.for}>{startCase(props.for)}</label>
			<Field
				type="text"
				name={props.value || props.for}
				as="input"
				className="form-control"
			/>
			{props.showToggle ? (
				<div className="form-group">
					<Field
						type="checkbox"
						name={props.showToggle}
						as="input"
						className="tw-form-checkbox"
					/>
					<label htmlFor={props.showToggle} className="tw-ml-4">
						Show {startCase(props.for)}
					</label>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export const FormCheckInput: FC<{
	for: string;
}> = (props) => {
	return (
		<div className="form-group">
			<Field
				type="checkbox"
				name={props.for}
				as="input"
				className="tw-form-checkbox"
			/>
			<label htmlFor={props.for} className="tw-ml-4">
				{startCase(props.for)}
			</label>
		</div>
	);
};

export const FormLongInput: FC<{ for: string }> = (props) => {
	return (
		<div className="form-group">
			<label htmlFor={props.for}>{startCase(props.for)}</label>
			<Field
				type="textarea"
				name={props.for}
				as="textarea"
				className="form-control"
			/>
		</div>
	);
};

export const FormColorInput: FC<{ for: string }> = (props) => {
	return (
		<div className="form-group">
			<label htmlFor={props.for}>{startCase(props.for)}</label>
			<Field
				type="color"
				name={props.for}
				as="input"
				className="tw-block tw-border-0"
			/>
		</div>
	);
};

export const FormGroup: FC<{ title: string }> = (props) => {
	return (
		<Disclosure>
			{({ open }) => (
				<div className="tw-pl-2 tw-rounded-l-sm tw-border-solid tw-border-0 tw-border-l-2 tw-border-indigo-500">
					<Disclosure.Button as="div">
						<h3 className="tw-select-none">
							{props.title}{' '}
							<span className="tw-font-extrabold tw-font-mono tw-text-indigo-500">
								{open ? '-' : '+'}
							</span>
						</h3>
					</Disclosure.Button>
					<Disclosure.Panel
						as="div"
						className=""
					>
						{props.children}
					</Disclosure.Panel>
				</div>
			)}
		</Disclosure>
	);
};
