import React, { useState} from 'react'
import { withStyles } from '@mui/styles'
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PaletteMetaForm from './PaletteMetaForm';
import {styles,AppBar} from './styles/PaletteFormNavStyles'



function PaletteFormNav({classes, palettes, handleSubmit, handleDrawerOpen, open}) {
  const [stage, setStage] = useState("")
  const showForm = () => {
    setStage("form");
  }

  const hideForm = () => {
    setStage("");
  }


  return (
    <div className={classes.root}>
       <CssBaseline />
       <AppBar position="fixed" open={open}>
          <Toolbar>
           <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Create A Palette
          </Typography>
   
        </Toolbar>
        <div className={classes.navBtns}>
  
      
          <Link to="/" > 
         <Button className={classes.button} variant="contained" color="secondary" >Go Back</Button>
         </Link>
            <Button className={classes.button} variant="contained" onClick={showForm}>Save Palette</Button>
          </div>
      </AppBar>
    {(stage === "form" || stage === "emoji") && ( <PaletteMetaForm setStage={setStage} stage={stage} hideForm={hideForm} palettes={palettes} handleSubmit={handleSubmit}/>)}
    </div>
  )
}


export default withStyles(styles)(PaletteFormNav)