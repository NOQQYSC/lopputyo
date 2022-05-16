import React from "react";
import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

function Addtraining(props) {

const [open, setOpen] = React.useState(false);
const [training, setTraining] = React.useState({
    date: '', duration: '', activity: '', customer: ''
});

const handleClickOpen = () => {
    setTraining({...training, customer: props.link})
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};

const handleInputChange = (event) => {
    setTraining({...training, [event.target.name]: event.target.value})
}

const addTraining = () => {
    props.saveTraining(training);
    console.log(training)
    handleClose();
}

const setDate = (value) => {
    setTraining({...training, date: value});
  };

return(
    <div>
    <Button style={{margin: 10}} size="small" color="primary" onClick={handleClickOpen}>
        Add
    </Button>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          New Training for {props.link}
        </DialogTitle>
        <DialogContent>
            
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            name="date"
            label="Date"
            inputFormat="DD.MM.YYYY H:mm"
            value={training.date}
            onChange={setDate}
  />
</LocalizationProvider>
            <TextField
                margin="dense"
                name="duration"
                value={training.duration}
                onChange={e => handleInputChange(e)}
                label="Duration in Minutes"
                fullWidth
            />
            <TextField
                margin="dense"
                name="activity"
                value={training.activity}
                onChange={e => handleInputChange(e)}
                label="Activity"
                fullWidth
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>
                Cancel
            </Button>
            <Button onClick={addTraining} autoFocus>
                Save
            </Button>
        </DialogActions>
      </Dialog>
    </div>
);
}
export default Addtraining;