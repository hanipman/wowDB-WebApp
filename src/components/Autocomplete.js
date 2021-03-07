import fetch from 'cross-fetch';

import React from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	inputRoot: {
		color: "white",
			"& .MuiOutlinedInput-notchedOutline": {
				borderColor: "white"
			},
			"&:hover .MuiOutlinedInput-notchedOutline": {
				borderColor: "white"
			},
			"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
				borderColor: "white"
			}
	},
	inputLabel: {
		color: "white",
	},
}));

const filterOptions = createFilterOptions({
	limit: 1000,
});

export default function Asynchronous() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [options, setOptions] = React.useState([]);
	const loading = open && options.length === 0;

	React.useEffect(() => {
		let active = true;

		if (!loading) {
			return undefined;
		}

		(async () => {
			const response = await fetch('http://localhost:3000/item_list');
			const countries = await response.json();

			if (active) {
				setOptions(countries.results)
			}
		})();
		return () => {
			active = false;
		};
	}, [loading]);

	React.useEffect(() => {
		if (!open) {
			setOptions([]);
		}
	}, [open]);

	return (
		<Autocomplete
			id="asynchronous-demo"
			classes={classes}
			style={{ width: 300, marginBottom: 16 }}
			open={open}
			onOpen={() => {
				setOpen(true);
			}}
			onClose={() => {
				setOpen(false);
			}}
			getOptionSelected={(option, value) => option.name === value.name}
			getOptionLabel={(option) => option.item_name}
			options={options}
			loading={loading}
			filterOptions={filterOptions}
			renderInput={(params) => (
				<TextField
					{...params}
					color="white"
					label="Search"
					labelColor="white"
					// variant="outlined"
					InputProps={{
						...params.InputProps,
						disableUnderline: true,
						endAdornment: (
							<React.Fragment>
								{loading ? <CircularProgress color="inherit" size={20} /> : null}
								{params.InputProps.endAdornment}
							</React.Fragment>
						),
					}}
					InputLabelProps={{
						classes: {
							root: classes.inputLabel,
						},
					}}
				/>
			)}
		/>
	);
}