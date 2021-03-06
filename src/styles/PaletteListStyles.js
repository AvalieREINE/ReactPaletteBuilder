import sizes from './sizes'
import bg from './bg.svg'
// eslint-disable-next-line import/no-anonymous-default-export
export default { 
  "@global":  {
    ".fade-exit":{
      opacity:1
    },
    ".fade-exit-active":{
      opacity:0,
      transition:"opacity 500ms ease-out"
    }
  },
  root: { 
     height:"100vh",
      display:"flex",
    overflow: "scroll",
    alignItems: "flex-start",
    justifyContent: "center",
     /* background by SVGBackgrounds.com */
    backgroundImage: `url(${bg})`,
    backgroundColor:"#66806a"
    
  },
  heading: {
    fontSize:"2rem",
    textTransform: "uppercase",
    [sizes.down("sm")]:{
      fontSize:"1.5rem",
    }
  },
  container: { 
    width:"60%",
    display:"flex",
    alignItems: "flex-start",
    flexDirection:"column",
    flexWrap: "wrap",
    [sizes.down('xl')]: {
      width: '80%'
    }
  },
  nav: { 
    display:"flex",
    width:"100%",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    "& a": {
      color: "white",
    }
  },
  palettes:{ 
    boxSizing: "border-box",
    width:"100%",
    display:"grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gap:"5%",
    [sizes.down("sm")]: {
      gridTemplateColumns: "repeat(2, 50%)",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 70%)",
      justifyContent: "center",
      gap:"2%"
    },
  }
}