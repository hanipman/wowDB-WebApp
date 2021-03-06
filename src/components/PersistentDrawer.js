import React from 'react';
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
import Typography from '@material-ui/core/Typography';
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
						<ListItem button key={text}>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
      		</Drawer>
      		{/* <main
        		className={clsx(classes.content, {
          			[classes.contentShift]: open,
        		})}
      		>
        	<div className={classes.drawerHeader} /> */}
        	{/* <Typography paragraph>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
				ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
				facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
				gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
				donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
				adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
				Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
				imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
				arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
				donec massa sapien faucibus et molestie ac.
        	</Typography>
        	<Typography paragraph>
				Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
				facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
				tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
				consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
				vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
				hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
				tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
				nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
				accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        	</Typography> */}
      		{/* </main> */}
    	</div>
  	);
}
