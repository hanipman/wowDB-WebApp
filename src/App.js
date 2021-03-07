import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import clsx from 'clsx';

import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import PersistentDrawer from './components/PersistentDrawer.js';
import TopAppBar from './components/TopAppBar.js';
import LineChart from './components/LineChart.js';

export const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
    	}),
    	marginLeft: -drawerWidth,
  	},
  	contentShift: {
    	transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
    	}),
    	marginLeft: 0,
  	},
	drawerHeader: {
    	display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
  	},
}));

export default function App() {
	const classes = useStyles();
	const theme = useTheme();

	const [open, setOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setOpen(!open);
	};

	return (
		<div className={classes.root}>
			<div className={classes.root}>
				<BrowserRouter>
					<TopAppBar open={open} handleDrawerOpen={handleDrawerToggle} />
					<PersistentDrawer open={open} handleDrawerClose={handleDrawerToggle} />
					<main
						className={clsx(classes.content, {
							[classes.contentShift]: open,
						})}
      				>
						<div className={classes.drawerHeader} />
						<Switch>
							<Route exact path="/Main" render={() => 
								<div>
									<Typography paragraph>
										Main Page
									</Typography>
								</div>
							} />
							<Route path="/Browse" render={() =>
								<div>
									<Typography paragraph>
										Browse Page
									</Typography>
								</div>
							} />
							<Route path="/Favorites" render={() =>
								<div>
									<Typography paragraph>
										Favorites Page
									</Typography>
								</div>
							} />
						</Switch>
					</main>
				</BrowserRouter>
			</div>
		</div>
	);
}