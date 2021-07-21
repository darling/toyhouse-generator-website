import React, { useState } from 'react';
import { PageSegment } from '../components/PageSegment';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
	const [name, setName] = useState('');
	const [color1, setColor1] = useState('#000');
	const [color2, setColor2] = useState('#000');
	const [color3, setColor3] = useState('#000');
	const [color4, setColor4] = useState('#000');

	return (
		<Main
			meta={
				<Meta
					title="Safe's template maker"
					description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
				/>
			}
		>
			<PageSegment>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="color"
					name=""
					id=""
					value={color1}
					onChange={(e) => setColor1(e.target.value)}
				/>
				<input
					type="color"
					name=""
					id=""
					value={color2}
					onChange={(e) => setColor2(e.target.value)}
				/>
				<input
					type="color"
					name=""
					id=""
					value={color3}
					onChange={(e) => setColor3(e.target.value)}
				/>
				<input
					type="color"
					name=""
					id=""
					value={color4}
					onChange={(e) => setColor4(e.target.value)}
				/>
			</PageSegment>
			<div>
				<div>
					<div
						style={{ backgroundColor: 'white' }}
						className="tw-rounded-xl tw-shadow-xl tw-overflow-hidden tw-py-5"
					>
					</div>
				</div>
			</div>
		</Main>
	);
};

export default Index;
