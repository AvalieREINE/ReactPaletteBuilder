import React from 'react'
import PaletteFormNav from './PaletteFormNav'
import { withStyles } from '@mui/styles'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ColorPickerForm from './ColorPickerForm';
import {arrayMoveImmutable} from 'array-move';
import {styles, Main, DrawerHeader, drawerWidth} from "./styles/NewPaletteFormStyles"
import DraggableColorList from './DraggableColorList';
import SeedColors from './seedColors'

 

NewPaletteForm.defaultProps = {
  maxColors: 20
}

 function NewPaletteForm({palettes, maxColors, savePalette, history, classes}) {

  const [open, setOpen] = React.useState(false);
  const [colors, setColors] = React.useState([...SeedColors[SeedColors.length-1 ].colors])
  const paletteIsFull = colors.length >= maxColors


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const clearColors = () =>{
    setColors([])
  }

  const addRandomColor = () =>{
    const allColors = palettes.map(p =>p.colors).flat()
    let rand;
    let randomColor;
    let isDuplicateColor = true
    while(isDuplicateColor){
      rand = Math.floor(Math.random() * allColors.length)
      randomColor = allColors[rand]
      // eslint-disable-next-line no-loop-func
      isDuplicateColor = colors.some(color =>color.name === randomColor.name)
    }
    setColors([...colors, randomColor])
  }

  const addNewColor = (newColor) => {

    setColors([...colors, newColor])

  }
  
  const handleSubmit = (newPalette) => {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-")
    newPalette.colors = colors
    
    savePalette(newPalette)
    history.push("/")
  }

  const removeColor = (colorName) => {
  
    setColors(colors.filter(color => color.name !== colorName))
  }

  const onSortEnd = ({oldIndex, newIndex}) => {
   
    setColors((colors)=> arrayMoveImmutable(colors, oldIndex, newIndex))
  };

  return (
   
    <Box sx={{ display: 'flex' }}>
      <PaletteFormNav handleDrawerOpen={handleDrawerOpen} handleSubmit={handleSubmit} open={open} classes={classes} palettes={palettes}/>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />  
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div className={classes.container}>
        <Typography gutterBottom variant="h4">
          Design Your Palette
        </Typography>
       <div className={classes.buttons}> 
       <Button className={classes.button} variant="contained" color="secondary" onClick={clearColors}>Clear Palette</Button>
        <Button className={classes.button} disabled={paletteIsFull} variant="contained" color="primary" onClick={addRandomColor}>Random Color</Button>
        </div>
       
         <ColorPickerForm colors={colors} paletteIsFull={paletteIsFull} addNewColor={addNewColor}/>
         </div>
      </Drawer>
      
      <Main open={open}>
        <DrawerHeader   />
         <DraggableColorList distance={15} onSortEnd={onSortEnd} axis="xy" colors={colors} removeColor={removeColor} />
      </Main>
    </Box>
  );
}


export default withStyles(styles)(NewPaletteForm)