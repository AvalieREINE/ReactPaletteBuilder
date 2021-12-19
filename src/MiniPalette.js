import React,{ PureComponent } from 'react' 
import { withStyles } from '@mui/styles'
import styles from "./styles/MiniPaletteStyles"
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';


class MiniPalette extends PureComponent {
  constructor(props) {
    super(props)
    this.deletePalette = this.deletePalette.bind(this)
  }

  deletePalette(e) {
    e.stopPropagation()
    e.preventDefault();
    this.props.oepnDialog(this.props.id)
  }
  render() {
  const {classes, paletteName, emoji, colors, handleClick,id} = this.props;
  const miniColorBoxes = colors.map(color =>(
    <div className={classes.miniColor} style={{backgroundColor: color.color}} key={color.name}></div>
  ))

  return (
   
    <div className={classes.root} onClick={() =>handleClick(id)}>  
    <DeleteRoundedIcon  onClick={this.deletePalette} style={{transition: "all 0.3s ease-in-out"}} className={classes.deleteIcon} />
    
     <div className={classes.colors}>
    {miniColorBoxes}
     </div>
     <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
    </div>
  
  )
}}


export default withStyles(styles)(MiniPalette)