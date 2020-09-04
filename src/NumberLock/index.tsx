import React from "react";
import { Button as ButtonReakit, ButtonHTMLProps } from "reakit/Button";

export interface Props {
	handleResult?: (result: number[]) => void;
	Component?: React.ComponentType<ButtonHTMLProps | any>;
}

export const NumberLock: React.FC<Props> = ({ handleResult, Component }) => {
	const Button = Component || ButtonReakit;
	const [state, setState] = React.useState([] as number[]);
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	React.useEffect(() => {
		handleResult && handleResult(state);
	}, [handleResult, state]);

	const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		setState([...state, parseInt(e.currentTarget.value)]);
	};

	return (
		<>
			{numbers.map((value) => (
				<React.Fragment key={value}>
					<Button onClick={handleOnClick} value={value}>
						{value}
					</Button>
					{value % 3 === 0 && <div />}
				</React.Fragment>
			))}
		</>
	);
};
