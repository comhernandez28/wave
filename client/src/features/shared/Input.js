import React from 'react';
import styled from 'styled-components';

const Label = styled.label``;

const FormInput = styled.input`
	padding: 12px 20px;
	font-size: 1rem;
	border: 2px solid black;
	border-radius: 5px;
	text-align: center;
	outline: transparent;
	width: 100%;
`;

/* If you ever need forms */
//<Input name='email' label='Email' {...register('email')} />;

const Input = React.forwardRef(({ name, label, placeholder, ...rest }, ref) => {
	return (
		<>
			<label htmlFor={name}>{label}</label>
			<br />
			<FormInput name={name} placeholder={placeholder} {...rest} ref={ref} />
		</>
	);
});

export default Input;
