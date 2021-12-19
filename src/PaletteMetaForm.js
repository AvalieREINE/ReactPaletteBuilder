import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css'
import {Picker }from 'emoji-mart'

export default function PaletteMetaForm({palettes,handleSubmit, hideForm, stage, setStage}) {
 
  const [newPaletteName, setNewPaletteName] = useState("")

  useEffect(() => {
 
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>{
      return palettes.every(
        ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    })
 
  },[palettes]);

  
  const handleChangePalette = (evt) => {
 
    setNewPaletteName(evt.target.value)
  }

  const showEmojiPicker = () => {
    setStage("emoji")
  }

  const savePalette = (emoji) => {
    const newPalette = {paletteName: newPaletteName, emoji: emoji.native}
    handleSubmit(newPalette)
    setStage("")
  }
 
  return (
    <>
      <Dialog open={stage === "emoji"} onClose={hideForm}>
      <DialogTitle>Pick A Palette Emoji</DialogTitle>
      <Picker title="Pick a palette emoji " onSelect={savePalette} />
      </Dialog>
      <Dialog open={stage === "form"} onClose={hideForm}>
        <DialogTitle>Choose a palette name</DialogTitle>
        <ValidatorForm onSubmit={showEmojiPicker}>
        <DialogContent>
          <DialogContentText>
            Please enter a name for your new palette. Make sure it's unique!
          </DialogContentText>
        
          <TextValidator fullWidth margin="normal" validators={["required", "isPaletteNameUnique"]} errorMessages={["Enter a palette name","Name already used"]} value={newPaletteName} name="newPaletteName" label="Palette Name" onChange={handleChangePalette}/>

        </DialogContent>
        <DialogActions>
          <Button onClick={hideForm}>Cancel</Button>
          <Button variant="contained" color="primary" type="submit">Save Palette</Button>
        </DialogActions>
        </ValidatorForm>
      </Dialog>
      </>
 
  );
}