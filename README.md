# pinfield

This little react-library handles the visualize features of a mobile lock-screen.
This package comes with default styles from material-ui, because the styling should come from you.

[![NPM](https://img.shields.io/npm/v/pinfield.svg)](https://www.npmjs.com/package/pinfield) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save pinfield
or
yarn add pinfield
```

## Usage

```tsx
import React from "react";
import { NumberLock, PatternLock } from "pinfield";

const Example: React.FC = () => {
	return (
		<>
			<NumberLock />
			<PatternLock gridSize={3} fields={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
		</>
	);
};
```

## License

MIT © [tendo14](https://github.com/tendo14)
