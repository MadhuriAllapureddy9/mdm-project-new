import { Typography, AppBar, Box, CssBaseline, Toolbar, IconButton, } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import BasicTabs from '../dcumasterpage/DCUMaster';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const NavBar=()=>{//Header
	return(
		<div>
		<CssBaseline />
		<AppBar position="static" style={{ background: '#2E3B55' }}>
		<Toolbar>
		  <IconButton size="large" edge="start" color="inherit" aria-label="open drawer">
			<HomeIcon style={{ color: 'white' }} />
		  </IconButton>
		  <IconButton size="large" edge="start" color="inherit" aria-label="open drawer">
			<ChevronRightIcon style={{ color: 'white' }} />
		  </IconButton>
		  <Typography>Asset Management</Typography>
		  <IconButton style={{ marginLeft: '0px' }} size="large" edge="start" color="inherit" aria-label="open drawer">
			<ChevronRightIcon style={{ color: 'white' }} />
		  </IconButton>
		  <Typography style={{ marginRight: 'auto', marginLeft: '0px' }} variant='h6'>DCU Master</Typography>
		</Toolbar>
		
	  </AppBar>
	  <BasicTabs/>
		</div>
  
	)
  }
  export default NavBar;