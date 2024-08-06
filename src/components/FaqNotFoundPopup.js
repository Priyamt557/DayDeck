import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Input from '@mui/material/Input';

import CloseIcon from '@mui/icons-material/Close';

const ariaLabel = { 'aria-label': 'description' };




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    width: '30%',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    paddingBottom: '5%',
    borderRadius: '20px',
    boxShadow: '2px 0px 32px 2px #353333',
    outline: 'none'
};

export default function FaqNotFoundPopup({ open, setOpen, handleOpen, handleClose }) {


    const [isopen, setisopen] = useState(false)
    const [isPhoneopen, setisPhoneopen] = useState(false)

    const toggleopen = () => {
        setisopen(!isopen)
    }
    const togglephoneopen = () => {
        setisPhoneopen(!isPhoneopen)
    }
    const [selectedText, setselectedText] = useState('Select')
    const [selectedphone, setselectedphone] = useState('+91')



    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >






                <Box sx={style}>
                    <span className='mt-[2%] text-black relative' style={{ fontWeight: '400', width: '90%', fontSize: '18px', letterSpacing: '2.5%', }}>

                        <CloseIcon onClick={() => {
                            setOpen(false)
                        }} className='absolute cursor-pointer right-[-5%] top-[-5%] text-black z-100' style={{ fontSize: '40px' }} />
                        <div className='flex flex-row font-[400] text-black'>
                            <span style={{ marginRight: '20px', }}>





                                We couldn't find this particular question in our FAQ section. Rest assured, our team will be in touch with you shortly to provide further clarification on this.


                            </span>



                        </div>




<b>
                        Please share your</b>
                        <div className='flex flex-col'>

                            <Input className='nameclass mb-2' placeholder="YOUR EMAIL" inputProps={ariaLabel} style={{ color: 'black', width: "100%" }} />
                            <span className='self-center mx-2'>
                                <b>
                                    or</b>
                            </span>
                            <div className='flex flex-row'>
                                <div onClick={togglephoneopen} className='ml-3 px-2 cursor-pointer flex items-center rounded relative' style={{
                                    width: "100px", zIndex: 100,
                                    //  backgroundImage: 'linear-gradient(#373737, #373737)',
                                    backgroundColor: 'black',
                                    height: '50px', border: '1px solid #7d7272',
                                }}>
                                    <span style={{ fontWeight: '400', fontSize: '20px', marginLeft: '0px', color: "#9a9191" }}>{selectedphone}</span>
                                    {!isPhoneopen && <KeyboardArrowDownIcon style={{ position: 'absolute', right: '5%', color: 'white' }} />}
                                    {isPhoneopen && <KeyboardArrowUpIcon style={{ position: 'absolute', right: '10%', color: 'white' }} />}
                                    {isPhoneopen && <div className='rounded' style={{ border: '1px solid #373737', boxShadow: "rgb(4 2 2) 7px 8px 7px 2px", width: '100%', position: 'absolute', top: '100%', color: '#9a9191', left: '-0%', backgroundImage: 'linear-gradient(#373737, #0a0a0a)' }}>
                                        <p onClick={() => { setselectedphone("+1") }} className='selections' style={{ fontWeight: '400', fontSize: '20px', paddingLeft: '20px' }}>+1</p>
                                        <p onClick={() => { setselectedphone("+2") }} className='selections' style={{ fontWeight: '400', fontSize: '20px', paddingLeft: '20px' }}>+2</p>
                                        <p onClick={() => { setselectedphone("+3") }} className='selections' style={{ fontWeight: '400', fontSize: '20px', paddingLeft: '20px' }}>+3</p>
                                        <p onClick={() => { setselectedphone("+4") }} className='selections' style={{ fontWeight: '400', fontSize: '20px', paddingLeft: '20px' }}>+4</p>


                                    </div>}
                                </div>




                                <Input className='nameclass ml-5 w-full' placeholder="PHONE NUMBER" inputProps={ariaLabel} style={{ color: 'black', }} />
                            </div>
                        </div>

                        <div className='absolute text-base	 font-[700] px-10 py-2 flex items-center justify-center bottom-[-25%] right-[1%] cursor-pointer'
                            style={{
                                backgroundColor: "rgb(142, 77, 255)",
                                color: "black",
                                borderRadius: '30px',
                                boxShadow: 'rgb(19 18 18) 3px 2px 10px -1px'
                            }}>
                            <span>SEND</span>
                        </div>
                    </span>
                </Box>
            </Modal>
        </div>
    );
}