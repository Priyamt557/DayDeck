import React, { useEffect, useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import backgroundImageNew1 from '../assets/pricingplanbackground.png';

import Chart from "react-apexcharts";









const marks = [
    {
        value: 1,
        label: '1',
    },
    {
        value: 5,
        label: '5',
    },
    {
        value: 10,
        label: '10',
    },
    {
        value: 20,
        label: '>10',
    },
];
const durations = [
    {
        value: 3,
        label: '3',
    },
    {
        value: 6,
        label: '6',
    },
    {
        value: 12,
        label: '12',
    },

];



const PricingPlan = ({ isDarkMode }) => {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (
        event,
        newAlignment,
    ) => {
        setAlignment(newAlignment);
    };



    const [userValue, setuserValue] = useState(15)

    function handleuserChange(value) {
        // console.log(value.target.value, userValue)
        if (userValue < 10) {
            setuserValue(value.target.value)
        } else {
            if (value.target.value === 20) {

                setuserValue(value.target.value)
            } else {

                setuserValue(value.target.value - 1)
            }
        }
    }


    let [months, setmonths] = useState(['3M'])
    const [duratinoValue, setduratinoValue] = useState(12)
    function handledurationChange(value) {
        // console.log(value.target.value, duratinoValue)
        if (value.target.value === 3 || value.target.value === 6 || value.target.value === 12) {
            setduratinoValue(value.target.value)
        }

    }

    useEffect(() => {
        
        if (duratinoValue === 3) {
            setmonths(['0M', '3M'])
        } else if (duratinoValue === 6) {
            setmonths(['0M', '3M', '6M'])
        } else if (duratinoValue === 12) {
            setmonths(['0M', '3M', '6M', '12M'])

        }
    }, [duratinoValue])

    


    let resultingobject = {
        usd: {
            '1-5': [15, 12, 10],
            '6-10': [12, 10, 8],
            '>10': [10, 8, 7]
        },
        eu: {
            '1-5': [12, 10, 8],
            '6-10': [10, 8, 6],
            '>10': [8, 6, 5]
        },
        inr: {
            '1-5': ['0', 1200, 960, 800],
            '6-10': ['0', 960, 800, 640],
            '>10': ['0', 800, 640, 560]
        }
    }

    const [currency, setcurrency] = useState('inr')
    const [graphState, setGraphState] = useState(resultingobject[currency]['>10'])

    useEffect(() => {
        if (userValue <= 5) {
            setGraphState(resultingobject[currency]['1-5'])
        } else if (userValue > 5 && userValue < 10) {
            setGraphState(resultingobject[currency]['6-10'])
        } else {
            setGraphState(resultingobject[currency]['>10'])
        }
    }, [userValue])



    const state = {
        series: [{
            name: "DayDeck",
            data: duratinoValue === 3 ? graphState.filter((item, index) => {
                if (index < 2) {
                    return item
                }
            }) : duratinoValue === 6 ? graphState.filter((item, index) => {
                if (index < 3) {
                    return item
                }
            }) : [...graphState]
        }],
        options: {
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
                animateGradually: {
                    enabled: true,
                    delay: 150
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 350
                }
            },
            chart: {

                // height: 200,
                toolbar: {
                    show: false
                },


                type: 'area',
                zoom: {
                    enabled: false
                }
            },

            colors: ['#550D98'],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: '',
                align: 'left'
            },

            grid: {
                yaxis: {
                    lines: {
                        show: false
                    }
                },
                row: {

                    colors: ['', ''], // takes an array which will be repeated on columns
                    opacity: 1
                },
            },
            xaxis: {
                axisBorder: {
                    show: true
                },

                categories: [...months],
            },
            yaxis: {
                axisBorder: {
                    show: true
                },

            },




        },


    };



    return (
        <div
            style={{
                zIndex: 19,
                paddingTop: '55px',
                position: 'relative',
                backgroundColor: isDarkMode ? 'black' : "white",
                // backgroundImage: isDarkMode ? "linear-gradient(to right, #1E1E1E,#0B0B0B)" : "linear-gradient(to right, #FFFFFF,#8C8B8B)",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(${backgroundImageNew1})`,
                backgroundPosition: '5% 331px',
                paddingLeft: "10%"
            }}
            className='w-full h-screen   flex flex-col'>
            <h1
                className='font-semibold	font-satoshi	text-center  text-7xl	'>
                Pricing Plans
            </h1>
            <div style={{ justifyContent: "space-between" }} className='w-[80%] h-[75%] mt-10 flex items-center content-between'>
                <div style={{ justifyContent: 'space-around' }} className='toggle-button w-[35%] h-[70%]  flex flex-col item-center content-between pt-2'>
                    <ToggleButtonGroup
                        style={{
                            border: "1px solid #4e4646",
                            boxShadow: "rgb(0 0 0) 0px 16px 17px",
                            position: 'relative'
                        }}
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                    >
                        <ToggleButton className={alignment === 'web' && 'active-butttonn'} value="web">Stakeholders</ToggleButton>
                        <ToggleButton className={alignment === 'android' && 'active-butttonn'} value="android">Customers</ToggleButton>
                        <img style={{ width: '25px', height: '25px' }} className='absolute -right-3 -top-3' src={require('../assets/question_icon.png')} alt="" />

                    </ToggleButtonGroup>

                    <div className='w-full slider1 mt-10'>
                        <span style={{ fontWeight: '600' }}>No. of users</span>
                        <Box className="mt-3" sx={{}}>
                            <Slider
                                value={userValue}
                                onChange={handleuserChange}
                                style={{}}
                                aria-label="Restricted values"
                                defaultValue={1}
                                // step={userValue < 5 ? 4 : userValue < 10 && userValue >= 5 ? 5 : 10}
                                // valueLabelDisplay={userValue > 10 ? false : false}
                                max={20}
                                min={1}
                                marks={marks}
                            />
                        </Box>
                    </div>

                    <div className='w-full slider1 mt-1'>
                        <span style={{ fontWeight: '600' }}>Duration</span>
                        <Box className="mt-3" sx={{}}>
                            <Slider
                                value={duratinoValue}
                                onChange={handledurationChange}
                                style={{}}
                                aria-label="Restricted values"
                                defaultValue={3}
                                // step={duratinoValue}
                                valueLabelDisplay="auto"
                                max={12}
                                min={3}
                                marks={durations}
                            />
                        </Box>
                    </div>
                </div>
                <div style={{
                    boxShadow: "rgb(0 0 0) 6px 34px 53px", border: "1px solid #4e4646", borderRadius: '5px',
                    background: '#151515'
                }} className='w-[60%] relative shadow-2xl items-center content-around flex-col flex h-[100%]'>
                    <div className='w-20 z-50 top-10 right-10 h-20 bg-white rounded-full absolute flex items-center content-center'>
                        <span style={{ color: "#151515", margin: 'auto', fontWeight: '700', fontSize: '15px' }}><b style={{ color: '#8E4DFF', fontWeight: '700', fontSize: '20px' }}><sup>$</sup>10</b>/user</span>
                    </div>
                    <Chart

                        className="w-[80%]"
                        options={state.options}
                        series={state.series}
                    // type="line"
                    // width={'100%'}
                    />
                    <div className='w-[75%] mt-10'>
                        <span style={{ color: 'white', fontSize: '24px', fontWeight: '600' }}>Savings <b style={{ color: '#8E4DFF', fontWeight: '800' }}><sup>$</sup>55</b></span>
                        <p style={{ fontSize: '20px', color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingPlan