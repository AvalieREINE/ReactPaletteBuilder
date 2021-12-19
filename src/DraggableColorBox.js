import React from 'react'
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from '@mui/styles'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import styles from './styles/DraggableColorBoxStyles'



const DraggableColorBox = SortableElement((props) => {
  const {classes, color, name, handleClick} = props;
  return (
    <div className={classes.root} style={{backgroundColor: color}}>
    <div className={classes.boxContent}>
      <span> {name}</span>
      <DeleteRoundedIcon onClick={handleClick} className={classes.deleteIcon}/>
    </div>
     
    </div>
  )
})

export default withStyles(styles)(DraggableColorBox)
