/** @format */

export const handleToggle = (e, state, setState) => {
	e.preventDefault();
	state ? setState(false) : setState(true);
};
