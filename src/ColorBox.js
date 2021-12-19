import React, { Component } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'

import styles from './styles/ColorBoxStyles'
import { withStyles } from '@mui/styles'




 class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {copied: false};
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState(){ 
    this.setState({copied: true} , ()=>{
      setTimeout(()=>this.setState({copied:false}),1500)
    });
  }

  render() {
    const {name, background, paletteId, id, showingFullPalette, classes } = this.props;
    const {copied} = this.state;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
      <div style={{background}} className={classes.colorBox}>
      <div style={{background}} className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} />
      <div  className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
        <h1>copied!</h1>
        <p className={classes.copyText}>{this.props.background}</p>
      </div>
    
      <div  >
        <div className={classes.boxContent}>
        <span className={classes.colorName}>{name}</span>
        </div>
        <button className={classes.copyBtn}>Copy</button>
      </div>
    { showingFullPalette &&  (<Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
      <span className={classes.seeMore}>More</span>
      </Link>) }
      </div>
      </CopyToClipboard>
       
    )
  }
} 

export default withStyles(styles)(ColorBox)
