/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Snackbar, Select, MenuItem,IconButton} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'; 
import { withStyles } from '@mui/styles'
import styles from './styles/NavbarStyles'
import 'rc-slider/assets/index.css'
import Slider from 'rc-slider'




 class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {format: "hex", open: false};
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }
  handleFormatChange(e){ 
    this.setState({format: e.target.value, open: true});
    this.props.handleChange(e.target.value);
  }
  closeSnackbar() {
    this.setState({open: false});
  }
  render() {
    const {level, changeLevel, showingAllColors, classes} = this.props;
    const {format} = this.state;
    return (
      <header className={classes.Navbar}>
        <div className={classes.logo}>
        <Link to="/">Palette Builder</Link>
          
        </div>
     { showingAllColors && ( <div className={classes.sliderContainer}>
        <span>Level: {level}</span>
        <div className={classes.slider}>
        <Slider defaultValue={ level} min={100} max={900} step={100} onAfterChange={changeLevel}/>
        </div>
        </div>)}
        <div className={classes.selectContainer}>
          <Select  value={format} onChange={this.handleFormatChange}>
            <MenuItem  value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar onClose={this.closeSnackbar} anchorOrigin={{vertical:"bottom", horizontal:"left"}} open={this.state.open} autoHideDuration={3000} message={<span id="message-id">Format Changed To {format.toUpperCase()}</span>} ContentProps={{"arial-descrbeby": "message-id"}} action={[<IconButton onClick={this.closeSnackbar} color="inherit" key="close" arial-label="close"><CloseIcon/></IconButton>]}/>
      </header>
    )
  }
}


export default withStyles(styles)(Navbar)