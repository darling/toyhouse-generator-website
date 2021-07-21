import { Field } from 'formik';
import React, { FC } from 'react';
import { startCase } from 'lodash';

export const FormInput: FC<{ for: string, value?: string }> = (props) => {
	return (
		<div className="form-group">
			<label htmlFor={props.for}>{startCase(props.for)}</label>
			<Field
				type="text"
				name={props.value || props.for}
				as="input"
				className="form-control"
			/>
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