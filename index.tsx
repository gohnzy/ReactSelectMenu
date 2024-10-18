import React, { useState, ChangeEvent } from 'react';

interface DropdownProps {
	label: string;
	id: string;
	data: string[];
	onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
	required?: boolean;
	error?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
	label,
	id,
	data,
	onChange,
	required,
	error,
}) => {
	const [selectedValue, setSelectedValue] = useState<string>('');

	const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectedValue(event.target.value);
		if (onChange) {
			onChange(event);
		}
	};

	return (
		<select
			name={label}
			id={id}
			className={error ? 'dropdownMenus error' : 'dropdownMenus'}
			value={selectedValue}
			onChange={handleChange}
			required={!!required}
		>
			<option value="" disabled hidden>
				{label}
			</option>
			{data && data.length > 0 ? (
				data.map((d, index) => (
					<option key={index} value={d}>
						{d}
					</option>
				))
			) : (
				<option value="">No data found</option>
			)}
		</select>
	);
};

export default Dropdown;
