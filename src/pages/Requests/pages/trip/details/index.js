import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { DataGrid } from '@mui/x-data-grid';
import ListItemText from '@mui/material/ListItemText';
import moment from "moment";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

  
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

  const Details = ( { data: { id,status,startDate,endDate}} ) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };


   
  return (
    <div>

      <Button variant="outlined" color="error" onClick={handleClickOpen}>
      ჩვენება
      </Button>


      <Dialog
        onClose={handleClose}
        open={open}
        maxWidth = {"xl"}
        fullWidth = {true}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        დეტალები
        </BootstrapDialogTitle>
        <DialogContent >
            <Box>
            <List>
          <ListItem disablePadding key={id}>
            
          <ListItemText>სტატუსი: {status}</ListItemText>
          <ListItemText>დაწყება:{startDate}</ListItemText>
          <ListItemText>დამთავრება:{endDate}</ListItemText>
          </ListItem>
        </List>
    </Box>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default Details