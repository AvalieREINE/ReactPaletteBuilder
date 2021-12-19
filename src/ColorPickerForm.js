import React, {useEffect} from 'react'
import Button from '@mui/material/Button';
import { withStyles } from '@mui/styles'
import {ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import styles from './styles/ColorPickerFormStyles'


 function ColorPickerForm({paletteIsFull, addNewColor, colors, classes}) {
  const [currentColor, setCurrentColor] = React.useState("teal")
  const [newColorName, setNewColorName] = React.useState("")

  
  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>{
      return colors.every(
        ({name}) => name.toLowerCase() !== value.toLowerCase()
      )
    })
  
    ValidatorForm.addValidationRule("isColorUnique", (value) =>{
      return colors.every(
        ({color}) => color !== currentColor
      )
    })
  },[colors, currentColor ]);

  const updateCurrentColor = (currentColor) => {
    setCurrentColor(currentColor.hex);
  }
  const handleChangeColors = (evt) => {
    setNewColorName( evt.target.value)

  }
  const handleSubmit = () => {
    const newColor = {color: currentColor, name: newColorName}
    addNewColor(newColor)
    setNewColorName("")
  }

  return (
    <>  
       <ChromePicker  className={classes.picker}  color={currentColor} onChangeComplete={ updateCurrentColor} />
        <ValidatorForm instantValidate={false} onSubmit={handleSubmit}>
          <TextValidator placeholder="Color Name" margin="normal"  className={classes.colorNameInput} validators={["required", "isColorNameUnique", "isColorUnique"]} errorMessages={["This field is required", "Color name must be unique", "Color already used"]} name="newPaletteName" value={newColorName} onChange={handleChangeColors}/>
          <Button className={classes.addColor} type="submit" disabled={paletteIsFull} style={{backgroundColor: paletteIsFull? "gray" : currentColor}} variant="contained" color="primary">{paletteIsFull ? "Palette is full" : "Add Color"}</Button>
        </ValidatorForm>
       
    </>
  )
}

export default withStyles(styles)(ColorPickerForm)