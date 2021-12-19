import sizes from './sizes'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Navbar: {
    display:"flex",
    alignItems:"center",
    justifyContent: "flex-start",
    height:"6vh",
    [sizes.down('xs')]: {
     flexDirection:"column",
     width:"100%",
      height:"20vh",
  
    },
  },
  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    backgroundColor: "#eceff1", 
    fontFamily: "Roboto",
    height:"100%",
    display: "flex",
    alignItems:"center",
    "& a":{
      textDecoration: "none",
      color:"black",
    },
    [sizes.down('md')]: {
      fontSize: "18px",
    },
    [sizes.down('xs')]: {
      fontSize: "25px",
      width:"100%",
      justifyContent:"center",

    },
  },
  
  slider: {
    width: "340px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-track":{
      backgroundColor: "transparent"
    },
    "& .rc-slider-rail":{
      height:"8px"
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus":{
      backgroundColor:" green",
      outline: "none",
      border: "2px solid green",
      boxShadow:"none",
      width: "13px",
      height: "13px",
      marginLeft:"-7px",
      marginTop: "-3px",
    },
    [sizes.down('md')]: {
      width:"250px"
    },
    [sizes.down('sm')]: {
      width:"160px"
    },
    [sizes.down('xs')]: {
      width:"300px",
      
    },
  },
  sliderContainer: {
    [sizes.down('xs')]: {
      fontSize:"15px",
      padding: "15px",
      
    },
  },
  selectContainer: {
    marginLeft:"auto",
    marginRight: "1rem",
    sliderContainer: {
    [sizes.down('xs')]: {
     width:"10px !important",
     height:"10px !important",
    
      
    },
  }
}
}