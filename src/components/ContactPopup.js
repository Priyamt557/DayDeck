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
    position: 'fixed',
    top: '55%',
    left: '68%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    maxWidth: '40%',

    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderRadius: '20px',
    width: '37%',
    height: '50%',
    boxShadow: '0px 4px 18px 0px #000'
};

export default function ContactPopup({ open, setOpen, setPressed, handleOpen, handleClose }) {


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

    console.log(open)

    return (
        open &&
        <div className='absolute' style={{ zIndex: 330, ...style }}>








            <div style={{ zIndex: -11, borderRadius: '20px', }} className='absolute top-[-20%] right-[-30%]'>
                <svg width="583" height="446" viewBox="0 0 583 446" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_146_966)">
                        <path d="M419 411.5L548.2 34.1656L520.49 34.4438L50.4999 67L34.5004 67L419 411.5Z" fill="url(#paint0_linear_146_966)" />
                    </g>
                    <defs>
                        <filter id="filter0_f_146_966" x="0.5" y="0.165527" width="581.699" height="445.334" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="17" result="effect1_foregroundBlur_146_966" />
                        </filter>
                        <linearGradient id="paint0_linear_146_966" x1="494.5" y1="64" x2="228.11" y2="239.357" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#8E4DFF" stop-opacity="0.89" />
                            <stop offset="0.0001" stop-color="#8E4DFF" stop-opacity="0.27" />
                            <stop offset="0.37063" stop-color="#6E3BC5" stop-opacity="0.46" />
                            <stop offset="1" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                </svg>

            </div>
            <div style={{
                zIndex: 10,
                borderRadius: '20px',
                paddingLeft: '8%',
                paddingRight: '8%',

                paddingTop: '7%',
                // background: 'red',
                paddingBottom: '5%',
            }} className='absolute bg-white w-[100%] h-[100%]'>
                <CloseIcon onClick={() => {
                    handleClose()
                    setPressed(null)
                }} className='absolute hover:scale-110 cursor-pointer right-3 top-3 text-black z-100' style={{ fontSize: '40px' }} />
                <span className='mt-[2%] text-black relative  z-99' style={{ fontWeight: '400', width: '90%', fontSize: '18px', letterSpacing: '2.5%', zIndex: 99 }}>
                    <div className='flex flex-row'>
                        <span style={{ marginRight: '20px', }}> My name is{"   "}</span>


                        <Input className='nameclass' placeholder="YOUR NAME" inputProps={ariaLabel} style={{ color: 'black', }} />.<br />
                    </div>

                    <div className='flex mb-5 mt-3 items-center z-100 '>
                        <span>I'm a</span>
                        <div onClick={toggleopen}
                            className='ml-3 px-1 cursor-pointer flex items-center  relative'
                            style={{
                                filter: 'drop-shadow(0px 13px 28px rgba(14, 12, 20, 0.30))',
                                width: "300px", zIndex: 100,
                                borderRadius: "10px",
                                // backgroundImage: 'linear-gradient(#373737, #373737)',
                                backgroundColor: 'black',
                                height: '40px',
                                border: '1px solid #7d7272',
                            }}>
                            <span style={{ fontWeight: '400', fontSize: '20px', marginLeft: '10px', color: "#9a9191" }}>{selectedText}</span>
                            {!isopen && <KeyboardArrowDownIcon style={{ color: 'white', position: 'absolute', right: '5%' }} />}
                            {isopen && <KeyboardArrowUpIcon style={{ color: 'white', position: 'absolute', right: '5%' }} />}
                            {isopen && <div className='' style={{ border: '1px solid #373737', boxShadow: "rgb(4 2 2) 7px 8px 7px 2px", width: '100%', position: 'absolute', top: '100%', color: '#9a9191', left: '-0%', backgroundImage: 'linear-gradient(rgb(20 19 19), rgb(37 31 31))', borderRadius: "10px", }}>
                                <p onClick={() => { setselectedText("Option 1") }} className='selections' style={{ fontWeight: '400', fontSize: '20px', paddingLeft: '20px' }}>Option 1</p>
                                <p onClick={() => { setselectedText("Option 2") }} className='selections' style={{ fontWeight: '400', fontSize: '20px', paddingLeft: '20px' }}>Option 2</p>
                                <p onClick={() => { setselectedText("Investor") }} className='selections' style={{ fontWeight: '400', fontSize: '20px', paddingLeft: '20px', borderTop: '1px solid white' }}>Investor</p>

                            </div>}
                        </div>
                    </div>


                    <span >I'd like to meet with your team, you can contact me at</span><br />
                    <div className='flex mt-3 items-center flex-col'>
                        <Input className='nameclass' placeholder="YOUR EMAIL" inputProps={ariaLabel} style={{ color: 'black', width: "100%" }} />
                        <span className='font-[500]'>or</span>
                        <div style={{ zIndex: 99, width: '100%' }} className='flex flex-row relative items-center justify-start z-99'>
                            <div onClick={togglephoneopen} className=' px-2 cursor-pointer flex items-center  relative' style={{
                                width: "100px",
                                zIndex: 100,
                                filter: 'drop-shadow(0px 13px 28px rgba(14, 12, 20, 0.30))',
                                //  backgroundImage: 'linear-gradient(#373737, #373737)',
                                borderRadius: '10px',
                                backgroundColor: 'black',
                                height: '40px',
                                border: '1px solid #7d7272',
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




                            <Input className='nameclass ml-5' placeholder="PHONE NUMBER" inputProps={ariaLabel} style={{ color: 'black', width: '100%' }} />
                        </div>

                    </div>

                    <div className='absolute text-base hover:scale-105	 font-[700] px-10 py-2 flex items-center justify-center bottom-[-25%] right-[1%] cursor-pointer'
                        style={{
                            backgroundColor: "rgb(142, 77, 255)",
                            color: "black",
                            borderRadius: '30px',
                            boxShadow: 'rgb(19 18 18) 3px 2px 10px -1px'
                        }}>
                        <span>SEND</span>
                    </div>
                </span>
            </div>

        </div>
    );
}