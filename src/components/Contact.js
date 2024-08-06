import React, { useState } from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Input from '@mui/material/Input';


const ariaLabel = { 'aria-label': 'description' };

const Contact = ({ isDarkMode }) => {

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
        <div style={{ zIndex: 10, backgroundColor: isDarkMode ? 'black' : "white" }} className='Faq_main_container relative'>
            <div className='h-[40%] bg-white pt-[4%] flex items-center justify-center'>
                <span style={{ color: '#191919', fontFamily: 'satoshi', fontSize: '48px', fontWeight: '700' }}>Contact Us</span>

            </div>
            <div styl className='h-[60%]  flex flex-col pt-10 px-10'>

                <span className='m-auto mt-[2%] relative' style={{ fontWeight: '400', width: '50%', fontSize: '26px', letterSpacing: '2.5%', color: !isDarkMode ? 'black' : "white" }}>
                    <span style={{ marginRight: '20px' }}> My name is{"   "}</span>


                    <Input className='nameclass' placeholder="YOUR NAME" inputProps={ariaLabel} style={{ color: !isDarkMode ? 'black' : 'white', }} />.<br />

                    <div className='flex mt-3'>
                        <span>I am</span>
                        <div onClick={toggleopen} className='ml-3 px-2 cursor-pointer flex items-center rounded relative' style={{
                            width: "300px", zIndex: 100,
                            // backgroundImage: 'linear-gradient(#373737, #373737)',
                            backgroundColor: 'transparent',
                            height: '50px', border: '1px solid #7d7272',
                        }}>
                            <span style={{ fontWeight: '400', fontSize: '20px', marginLeft: '20px', color: "#9a9191" }}>{selectedText}</span>
                            {!isopen && <KeyboardArrowDownIcon style={{ position: 'absolute', right: '10%' }} />}
                            {isopen && <KeyboardArrowUpIcon style={{ position: 'absolute', right: '10%' }} />}
                            {isopen && <div className='rounded' style={{ border: '1px solid #373737', boxShadow: "rgb(4 2 2) 7px 8px 7px 2px", width: '100%', position: 'absolute', top: '100%', color: '#9a9191', left: '-0%', backgroundImage: 'linear-gradient(rgb(20 19 19), rgb(37 31 31))' }}>
                                <p onClick={() => { setselectedText("Option 1") }} className='selections' style={{ fontWeight: '400', fontSize: '20px', paddingLeft: '20px' }}>Option 1</p>
                                <p onClick={() => { setselectedText("Option 2") }} className='selections' style={{ fontWeight: '400', fontSize: '20px', paddingLeft: '20px' }}>Option 2</p>
                                <p onClick={() => { setselectedText("Investor") }} className='selections' style={{ fontWeight: '400', fontSize: '20px', paddingLeft: '20px', borderTop: '1px solid white' }}>Investor</p>

                            </div>}
                        </div>
                    </div>
                    <span style={{ marginRight: '20px', }}>  I am interested in{"   "}</span>
                    <Input className='nameclass' placeholder="TEXT" inputProps={ariaLabel} style={{ color: !isDarkMode ? 'black' : 'white', }} />.<br />

                    I'd like to meet with your team, you can contact me at <br />
                    <div className='flex flex-row'>

                        <Input className='nameclass' placeholder="YOUR EMAIL" inputProps={ariaLabel} style={{ color: !isDarkMode ? 'black' : 'white', }} /> or
                        <div onClick={togglephoneopen} className='ml-3 px-2 cursor-pointer flex items-center rounded relative' style={{
                            width: "70px", zIndex: 100,
                            //  backgroundImage: 'linear-gradient(#373737, #373737)',
                            backgroundColor: 'transparent',
                            height: '50px', border: '1px solid #7d7272',
                        }}>
                            <span style={{ fontWeight: '400', fontSize: '20px', marginLeft: '0px', color: "#9a9191" }}>{selectedphone}</span>
                            {!isPhoneopen && <KeyboardArrowDownIcon style={{ position: 'absolute', right: '5%' }} />}
                            {isPhoneopen && <KeyboardArrowUpIcon style={{ position: 'absolute', right: '10%' }} />}
                            {isPhoneopen && <div className='rounded' style={{ border: '1px solid #373737', boxShadow: "rgb(4 2 2) 7px 8px 7px 2px", width: '100%', position: 'absolute', top: '100%', color: '#9a9191', left: '-0%', backgroundImage: 'linear-gradient(#373737, #0a0a0a)' }}>
                                <p onClick={() => { setselectedphone("+1") }} className='selections' style={{ fontWeight: '400', fontSize: '20px', paddingLeft: '20px' }}>+1</p>
                                <p onClick={() => { setselectedphone("+2") }} className='selections' style={{ fontWeight: '400', fontSize: '20px', paddingLeft: '20px' }}>+2</p>
                                <p onClick={() => { setselectedphone("+3") }} className='selections' style={{ fontWeight: '400', fontSize: '20px', paddingLeft: '20px' }}>+3</p>
                                <p onClick={() => { setselectedphone("+4") }} className='selections' style={{ fontWeight: '400', fontSize: '20px', paddingLeft: '20px' }}>+4</p>


                            </div>}
                        </div>




                        <Input className='nameclass ml-5' placeholder="PHONE NUMBER" inputProps={ariaLabel} style={{ color: !isDarkMode ? 'black' : 'white', }} />
                    </div>

                    <div className='absolute px-10 py-2 flex items-center justify-center bottom-[-40%] right-[30%]' style={{ backgroundColor: "rgb(142, 77, 255)", color: "black", borderRadius: '30px', boxShadow: 'rgb(54 49 49) 7px 8px 7px 2px' }}>
                        <span style={{ fontSize: '15px', fontWeight: '700' }} >SEND</span>
                    </div>
                </span>




            </div>
        </div>
    )
}

export default Contact