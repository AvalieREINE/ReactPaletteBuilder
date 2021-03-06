import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette';
import { withStyles } from '@mui/styles'
import Dialog from '@mui/material/Dialog';
import Avatar from '@mui/material/Avatar';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close'
import { red, blue} from '@mui/material/colors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styles from "./styles/PaletteListStyles"



 class  PaletteList extends Component {
   constructor(props) {
     super(props)
     this.state = {
       openDeleteDialog: false,
       deletingId:""
     }
     this.closeDialog = this.closeDialog.bind(this)
     this.openDialog = this.openDialog.bind(this)
     this.handleDelete = this.handleDelete.bind(this)
     this.goToPalette = this.goToPalette.bind(this)
   }

   openDialog(id) {
    this.setState({openDeleteDialog: true, deletingId: id})
   }

   closeDialog() {
    this.setState({openDeleteDialog: false,deletingId: ""})
   }

   handleDelete() {
     this.props.deletePalette(this.state.deletingId)
     this.closeDialog()
   }

   goToPalette(id){
     this.props.history.push(`/palette/${id}`)
   }
  render() {
    const {palettes, classes  } = this.props;
    const {openDeleteDialog,  } = this.state;
    return (
      
      <div className={ classes.root}>
      <div className={ classes.container}>
        <nav className={ classes.nav}>
        <h1 className={ classes.heading}>Palette Builder</h1>
        <Link to="/palette/new">Create Palette</Link>
        </nav>
      
        <TransitionGroup className={ classes.palettes}>
        {palettes.map(palette =>(
          <CSSTransition key={palette.id} classNames="fade" timeout={500}>
          <Link style={{textDecoration:"none"}} to={`/palette/${palette.id}`}>
         
         <MiniPalette key={palette.id} id={palette.id}  oepnDialog={this.openDialog} {...palette} handleClick={this.goToPalette} />
          </Link>
          </CSSTransition>
          ))}
          </TransitionGroup>
        </div>
          <Dialog open={openDeleteDialog} aria-labelledby="delete-dialog-title" onClose={this.closeDialog}>
            <DialogTitle id="delete-dialog-title">
              Delete this palette?
            </DialogTitle>
            <List>
              <ListItem button onClick={this.handleDelete}>
                <ListItemAvatar>
                  <Avatar style={{backgroundColor:blue[100], color:blue[600]}}>
                    <CheckIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Delete">
              </ListItemText>
              </ListItem>
              <ListItem button onClick={this.closeDialog}>
                <ListItemAvatar>
                  <Avatar style={{backgroundColor:red[100], color:red[600]}}>
                    <CloseIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Cancel">
              </ListItemText>
              </ListItem>
            </List>
          </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList);