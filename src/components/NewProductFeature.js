import zIndex from '@mui/material/styles/zIndex'
import React from 'react'

const NewProductFeature = ({ isDarkMode }) => {

    const window_innerWidth_6 = window.innerWidth / 6;



    return (
        <div




            style={{ backgroundImage: isDarkMode ? "linear-gradient(to right, #1E1E1E,#0B0B0B)" : "linear-gradient(to right, #FFFFFF,#8C8B8B)" }} className="PandFcontainer background relative">



            <div className='w-[30%] h-[15%] absolute bottom-0 left-0'>
                <div
                    style={{ border: "3px solid rgb(142, 77, 255)", borderRadius: '20px', zIndex: 1 }}
                    className={`${isDarkMode ? "bg-black" : 'bg-white'} text-white left-[15%] absolute top-[-80%] z-1 py-5 px-3 flex`}>
                    <img style={{ width: '15%', height: "15%", marginTop: 'auto', marginBottom: 'auto', marginRight: '5%' }} src={require('../assets/laptop.png')} alt="" />
                    <span style={{ fontSize: '20px', fontFamily: 'satoshi', fontWeight: '700', color: "#6B39C2" }}>Explore our product freatures using our product wheel.</span>
                </div>
                <div style={{
                    clipPath: 'polygon(99% 2%, 0% 3%, 0% 29%, 1% 39%',
                    backgroundImage: 'linear-gradient(#8E4DFF54 33%, #4A4A4A00 0%)', filter: 'blur(10px)'
                }} className='left-[15%] absolute z-0 w-[80%] h-[100%]'></div>
                <img style={{ width: "70px", left: '10%', bottom: '0px', position: 'absolute' }} src={require(isDarkMode ? '../assets/logowhite.png' : '../assets/logoblack.png')} alt="" />
            </div>




            <div style={{
                width: window_innerWidth_6 * 2,
                height: window_innerWidth_6 * 2,
                transition: "transform 0.3s",
                borderRadius: "50%",
                overflow: 'hidden'
            }} className='relative bg-red-400 flex items-center   btn-gradient-2 justify-center content-center  rounded-full'>

                <div className="radius"></div>
                <div className="radius1"></div>
                <div className="radius2"></div>
                <div className="radius3"></div>
                <div className="radius4"></div>






                <div
                    className='innerest_circle absolute items-center justify-center content-center  flex rounded-full'
                    style={{
                        width: window_innerWidth_6 * 0.5,
                        height: window_innerWidth_6 * 0.5,
                        backgroundColor: "#8E4DFF",
                        // border: isDarkMode ? '1px solid white' : '1px solid black',
                        transform: "rotate(0deg)",
                        zIndex: '600'



                    }}
                >
                    <img className='' style={{ zIndex: 20 }} src={require("../assets/Product_Feature_Center_Icon.png")} alt="" />
                </div>





                <div style={{
                    width: window_innerWidth_6 * 1.2,
                    height: window_innerWidth_6 * 1.2,
                    borderRadius: "50%",
                    overflow: 'hidden',
                    zIndex: '200'
                }} className='relative btn-gradient-1 flex items-center justify-center'>


                    <div
                        onClick={() => {
                            console.log('user 1')
                        }}
                        style={{
                            width: '50%',
                            height: '50%',
                            // backgroundColor: 'red',
                            transformOrigin: "0 100%",
                            transform: "rotate(0deg)",
                            position: "absolute",
                            top: '0%',
                            left: '50%',
                            zIndex: 10, cursor: 'pointer',


                        }}>

                        <span
                            style={{
                                transform: 'rotate(41deg'
                            }}
                            onClick={() => {
                                // setClickPosition('upperdiv_top');
                                // toggleCircle()
                            }}
                            className='absolute top-[28%] left-[28%] text-black text-xl font-[700] font-[satoshi] z-[30]'>
                            user 1
                        </span>

                    </div>
                    <div

                        onClick={() => {
                            console.log('user 1 1 1 1 ')
                        }} style={{
                            width: '17%',
                            height: '50%', cursor: 'pointer',
                            // backgroundColor: 'red',
                            transformOrigin: "0 100%",
                            transform: "rotate(0deg)",
                            position: "absolute",
                            top: '0%',
                            left: '50%',
                            zIndex: 50,
                            clipPath: 'polygon(0px 0px, 0px 100%, 284% -4%)',

                        }}></div>
                    <div
                        onClick={() => {
                            console.log('part2')
                        }}
                        style={{
                            position: "absolute",
                            width: "50%",
                            height: "50%",
                            transformOrigin: "0 100%",
                            transform: "rotate(72deg)",
                            // backgroundColor: "yellow",
                            top: '0%',
                            left: '50%',
                            zIndex: 20, cursor: 'pointer',

                        }}>
                        <span
                            style={{
                                transform: 'rotate(41deg'
                            }}
                            onClick={() => {
                                // setClickPosition('upperdiv_top');
                                // toggleCircle()
                            }}
                            className='absolute top-[28%] left-[28%] text-black text-xl font-[700] font-[satoshi] z-[30]'>
                            user 2
                        </span>
                    </div>
                    <div
                        onClick={() => {
                            console.log('part3')
                        }}
                        style={{
                            position: "absolute",
                            width: "50%",
                            height: "50%",
                            transformOrigin: "0 100%",
                            transform: "rotate(144deg)",
                            // backgroundColor: "green",
                            top: '0%',
                            left: '50%',
                            zIndex: 30, cursor: 'pointer',

                        }}>
                        <span
                            style={{
                                transform: 'rotate(41deg'
                            }}
                            onClick={() => {
                                // setClickPosition('upperdiv_top');
                                // toggleCircle()
                            }}
                            className='absolute top-[28%] left-[28%] text-black text-xl font-[700] font-[satoshi] z-[30]'>
                            user 3
                        </span>
                    </div>
                    <div
                        onClick={() => {
                            console.log('part4')
                        }}
                        style={{
                            position: "absolute",
                            width: "50%",
                            height: "50%",
                            transformOrigin: "0 100%",
                            transform: "rotate(216deg)",
                            // backgroundColor: "blue",
                            top: '0%',
                            left: '50%',
                            zIndex: 40, cursor: 'pointer',

                        }}>
                        <span
                            style={{
                                transform: 'rotate(41deg'
                            }}
                            onClick={() => {
                                // setClickPosition('upperdiv_top');
                                // toggleCircle()
                            }}
                            className='absolute top-[28%] left-[28%] text-black text-xl font-[700] font-[satoshi] z-[30]'>
                            user 4
                        </span>
                    </div>
                    <div
                        onClick={() => {
                            console.log('part5')
                        }}
                        style={{
                            position: "absolute",
                            width: "50%",
                            height: "50%",
                            transformOrigin: "0 100%",
                            transform: "rotate(288deg)",
                            // backgroundColor: "white",
                            top: '0%',
                            left: '50%',
                            zIndex: 45, cursor: 'pointer',

                        }}>
                        <span
                            style={{
                                transform: 'rotate(41deg'
                            }}
                            onClick={() => {
                                // setClickPosition('upperdiv_top');
                                // toggleCircle()
                            }}
                            className='absolute top-[28%] left-[28%] text-black text-xl font-[700] font-[satoshi] z-[30]'>
                            user 5
                        </span>
                    </div>
                </div>















                <div style={{
                    width: '30px', height: '30px', position: "absolute", backgroundColor: 'black', zIndex: 100, top: '46%', left: '47%',
                    borderRadius: '50%'
                }}></div>
                <div
                    onClick={() => {
                        console.log('feature 1')
                    }}
                    style={{
                        width: '50%',
                        height: '50%',
                        // backgroundColor: 'red',
                        transformOrigin: "0 100%",
                        transform: "rotate(0deg)",
                        position: "absolute",
                        top: '0%',
                        left: '50%',
                        zIndex: 10,
                        cursor: 'pointer',

                    }}>
                    <span
                        style={{
                            transform: 'rotate(41deg'
                        }}
                        onClick={() => {
                            // setClickPosition('upperdiv_top');
                            // toggleCircle()
                        }}
                        className='absolute top-[28%] left-[28%] text-black text-xl font-[700] font-[satoshi] z-[30]'>
                        feature  1
                    </span>
                </div>
                <div

                    onClick={() => {
                        console.log('feature 1')
                    }} style={{
                        width: '17%',
                        height: '50%', cursor: 'pointer',
                        // backgroundColor: 'red',
                        transformOrigin: "0 100%",
                        transform: "rotate(0deg)",
                        position: "absolute",
                        top: '0%',
                        left: '50%',
                        zIndex: 50,
                        clipPath: 'polygon(0px 0px, 0px 100%, 284% -4%)',

                    }}> </div>
                <div
                    onClick={() => {
                        console.log('feature 2')
                    }}
                    style={{
                        position: "absolute",
                        width: "50%",
                        height: "50%",
                        transformOrigin: "0 100%",
                        transform: "rotate(72deg)",
                        // backgroundColor: "yellow",
                        top: '0%',
                        left: '50%',
                        zIndex: 20, cursor: 'pointer',

                    }}>
                    <span
                        style={{
                            transform: 'rotate(41deg'
                        }}
                        onClick={() => {
                            // setClickPosition('upperdiv_top');
                            // toggleCircle()
                        }}
                        className='absolute top-[28%] left-[28%] text-black text-xl font-[700] font-[satoshi] z-[30]'>
                        feature  2
                    </span>
                </div>
                <div
                    onClick={() => {
                        console.log('feature 3')
                    }}
                    style={{
                        position: "absolute",
                        width: "50%",
                        height: "50%",
                        transformOrigin: "0 100%",
                        transform: "rotate(144deg)",
                        // backgroundColor: "green",
                        top: '0%',
                        left: '50%',
                        zIndex: 30, cursor: 'pointer',

                    }}>      <span
                        style={{
                            transform: 'rotate(41deg'
                        }}
                        onClick={() => {
                            // setClickPosition('upperdiv_top');
                            // toggleCircle()
                        }}
                        className='absolute top-[28%] left-[28%] text-black text-xl font-[700] font-[satoshi] z-[30]'>
                        feature  3
                    </span></div>
                <div
                    onClick={() => {
                        console.log('feature 4')
                    }}
                    style={{
                        position: "absolute",
                        width: "50%",
                        height: "50%",
                        transformOrigin: "0 100%",
                        transform: "rotate(216deg)",
                        // backgroundColor: "blue",
                        top: '0%',
                        left: '50%',
                        zIndex: 40, cursor: 'pointer',

                    }}>      <span
                        style={{
                            transform: 'rotate(41deg'
                        }}
                        onClick={() => {
                            // setClickPosition('upperdiv_top');
                            // toggleCircle()
                        }}
                        className='absolute top-[28%] left-[28%] text-black text-xl font-[700] font-[satoshi] z-[30]'>
                        feature  4
                    </span></div>
                <div
                    onClick={() => {
                        console.log('feature 5')
                    }}
                    style={{
                        position: "absolute",
                        width: "50%",
                        height: "50%",
                        transformOrigin: "0 100%",
                        transform: "rotate(288deg)",
                        cursor: 'pointer',
                        // backgroundColor: "white",
                        top: '0%',
                        left: '50%',
                        zIndex: 45,

                    }}>      <span
                        style={{
                            transform: 'rotate(41deg'
                        }}
                        onClick={() => {
                            // setClickPosition('upperdiv_top');
                            // toggleCircle()
                        }}
                        className='absolute top-[28%] left-[28%] text-black text-xl font-[700] font-[satoshi] z-[30]'>
                        feature  5
                    </span></div>
            </div>




        </div>
    )
}

export default NewProductFeature