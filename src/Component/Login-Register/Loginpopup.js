import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Icon } from '@iconify/react';
import "./loginregister.css";

const Loginpopup = () => {

    const [open, setOpen] = useState(false);
    const [quantity, setQuantity] = useState(1)
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);


    const customStyles = {
        content: {
        width:"700px",
        },
      };

    return (

        <div className=''>
            <small onClick={onOpenModal} >Login/ Register </small>
            <Modal style={customStyles} open={open} onClose={onCloseModal} center>
                <div className='loginpopup'>
                <div className='row ' >
                    <h4>Sign in to your personal space</h4>
                </div>

                <div className='row'>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                </div>


            </Modal>
        </div>

    )
}

export default Loginpopup






