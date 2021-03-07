import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

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

const drawerWidth = 240;

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
					<Button className={classes.userButton} size='large' >
						username#0000
					</Button>	
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</div>
				<Divider />
				<List>
					{['Main', 'Browse', 'Favorites'].map((text, index) => (
						<ListItem button key={text} component={Link} to={"/" + text} >
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
      		</Drawer>
    	</div>
  	);
}
