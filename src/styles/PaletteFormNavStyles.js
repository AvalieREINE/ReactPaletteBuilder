import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { DRAWER_WIDTH } from '../constants';
import sizes from './sizes'
const styles = {
  root: {
    display: 'flex',
   
  },
  navBtns: {
    marginRight: '1rem',
    display: 'flex',
    "& a": {
      textDecoration: "none",
    },
    [sizes.down("xs")]:{
      marginRight:0,
    }
  },
  button:{
    margin: "0 0.5rem !important",
    width: "9rem",
    height:"2.5rem",
    [sizes.down("sm")]:{
      margin:"0 0.2rem !important",
      padding: " 0.5rem !important",
      fontSize: "0.7rem !important",
      width: "6rem !important",
      height:"2rem",
    }
  },

  
}

const drawerWidth = DRAWER_WIDTH;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',

})(({ theme, open }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  height: "64px",
  alignItems: 'center',
  backgroundColor:"rgba(0,0,0,0.5)",
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,

    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


export {styles,AppBar }