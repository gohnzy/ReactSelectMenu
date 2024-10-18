# SelectMenu-ReactEdition

This is a plugin made to replace jquery's old select menu

# How to use

Prerequisities :

- React Version : 18.3+
- Node version 14.21+

To install it, run 'npm i select-menu-react-plugin' in you project
Then, in the components where you want it, use :

```JavaScript
import Dropdown from 'select-menu-react-plugin';
```

Components use 6 props :

```TypeScript
interface DropdownProps {
	label: string; // Used to change the name attribute and the default value
	id: string; // Used to change the ID attribute
	data: string[]; // The elements list you want to passe on the select menu
	onChange?: (event: ChangeEvent<HTMLSelectElement>) => void; // Allows you to pass a function to change displayed and used value - optional
	required?: boolean; // Used to define whether or not the field is required to be filed - optional
	error?: boolean; // Used to add 'error' on className, useful if you want to change style - optional
}
```

# 2.1.3 version note

README updates

# 2.1.2 version note

README updates

# 2.1.1 version note

README and package.json updates

### 2.1 version note

No more tsc in TypeScript compiling

# 2.0 is here !! Use of TypeScript !!

### 1.2 version note

Error props can now be passed in order to change className -- styling purpose

### 1.1 version note

Label and Id are separated

### 1.0 version note

Required attribute is now on demande -- pass required={true} or ...{false}
