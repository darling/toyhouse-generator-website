import { Field } from 'formik';
import React, { FC } from 'react';
import { startCase } from 'lodash';
import { Disclosure } from '@headlessui/react';

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
					<label
						htmlFor={props.showToggle}
						className="tw-ml-4"
					>
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
				<>
					<Disclosure.Button as="div">
						<h3>
							{props.title} {open ? '-' : '+'}
						</h3>
					</Disclosure.Button>
					<Disclosure.Panel>{props.children}</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};
