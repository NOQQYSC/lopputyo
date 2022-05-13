import React from "react";
import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';



function Addcustomer(props) {

const [open, setOpen] = React.useState(false);
const [customer, setCustomer] = React.useState({
    firstname: '', lastname: '', email: '', phone: '', streetaddress: '', postcode: '', city: ''
});

const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};

const handleInputChange = (event) => {
    setCustomer({...customer, [event.target.name]: event.target.value})
}

const addCustomer = () => {
    props.saveCustomer(customer);
    handleClose();
}

return(
    <div>
    <Button style={{margin: 10}} color="primary" variant="outlined" onClick={handleClickOpen}>
        Add Customer
    </Button>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          New Customer
        </DialogTitle>
        <DialogContent>
            <TextField
                autoFocus
                margin="dense"
                name="firstname"
                value={customer.firstname}
                onChange={e => handleInputChange(e)}
                label="First Name"
                fullWidth
            />
            <TextField
                margin="dense"
                name="lastname"
                value={customer.lastname}
                onChange={e => handleInputChange(e)}
                label="Last Name"
                fullWidth
            />
            <TextField
                margin="dense"
                name="streetaddress"
                value={customer.streetaddress}
                onChange={e => handleInputChange(e)}
                label="Street Address"
                fullWidth
            />
            <TextField
                margin="dense"
                name="postcode"
                value={customer.postcode}
                onChange={e => handleInputChange(e)}
                label="Postcode"
                fullWidth
            />
            <TextField
                margin="dense"
                name="city"
                value={customer.city}
                onChange={e => handleInputChange(e)}
                label="City"
                fullWidth
            />
            <TextField
                margin="dense"
                name="email"
                value={customer.email}
                onChange={e => handleInputChange(e)}
                label="Email"
                fullWidth
            />
            <TextField
                margin="dense"
                name="phone"
                value={customer.phone}
                onChange={e => handleInputChange(e)}
                label="Phone"
                fullWidth
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>
                Cancel
            </Button>
            <Button onClick={addCustomer} autoFocus>
                Save
            </Button>
        </DialogActions>
      </Dialog>
    </div>
);
}
export default Addcustomer;