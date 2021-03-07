import React from 'react';
import { Link } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { drawerWidth } from '../App.js';

const useStyles = makeStyles((theme) => ({
  	root: {
    	display: 'flex',
  	},
  	drawer: {
		width: drawerWidth,
		flexShrink: 0,
  	},
  	drawerPaper: {
    	width: drawerWidth,
  	},
  	drawerHeader: {
    	display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
  	},
	userButton: {
		
	},
}));

export default function PersistentDrawer({ open, handleDrawerClose }) {
	const classes = useStyles();
	const theme = useTheme();

  	return (
    	<div className={classes.root}>
			<CssBaseline />
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
          			paper: classes.drawerPaper,
        		}}
      		>
				<div className={classes.drawerHeader}>
					<Button className={classes.userButton} size='large' component={Link} to={"/Account"} >
						username#0000
					</Button>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</div>
				<Divider />
				<List>
					{['Home', 'Browse', 'Favorites'].map((text, index) => (
						<ListItem button key={text} component={Link} to={"/" + text} >
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
      		</Drawer>
    	</div>
  	);
}
