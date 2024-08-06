import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


import FaqNotFoundPopup from '../components/FaqNotFoundPopup'




const data = [
    {
        id: "LDS1",
        tag: 'Login / Demo Section',
        Question: "How can I request a demo of DayDeck?",
        Answer: "To request a demo of DayDeck, simply visit our website and fill out the demo request form. Our team will get in touch with you to schedule a personalized demo session. If you have any other login or demo-related inquiries, feel free to contact us via our Contact Us page."
    },
    {
        id: "LDS2",
        tag: 'Login / Demo Section',
        Question: "I forgot my password. What should I do?",
        Answer: `If you forget your password, you can easily reset it by clicking on the "Forgot Password" link on the login page. Follow the instructions provided, and a password reset link will be sent to your registered email address. If you encounter any issues during the password recovery process, please let us know via our Contact Us page.`
    },
    {
        id: "CSGOQ1",
        tag: 'Customer Support / General Other Queries',
        Question: "How can I provide feedback or suggestions for improvement?",
        Answer: `We appreciate your input as it helps us continuously enhance our product. If you have any feedback or suggestions to share, please do not hesitate to contact us through our Contact Us (hyperlink) page.`
    },
    {
        id: "CSGOQ2",
        tag: 'Customer Support / General Other Queries',
        Question: "What should I do if I have a complaint?",
        Answer: `If you have a complaint, please contact our customer support team directly. We are committed to addressing any concerns or issues promptly and working with you to find a satisfactory resolution. Your satisfaction is our top priority, so please don't hesitate to reach out to us via our Contact Us page.`
    },
    {
        id: "CSGOQ3",
        tag: 'Customer Support / General Other Queries',
        Question: "How can I reach customer support?",
        Answer: `You can contact our customer support team by sending an email to support@DayDeck.com or by using the support chat feature available within the DayDeck platform. Our support team is available to assist you during regular business hours and will respond to your inquiries as soon as possible. If you have any general queries or other support-related questions, please feel free to reach out to us via our Contact Us page.`
    },
    {
        id: "TR1",
        tag: 'Training Resources',
        Question: "Are there any training resources available?",
        Answer: `Yes, we provide comprehensive training resources, including user guides, tutorials, and video walkthroughs, to help you make the most of DayDeck. These resources are accessible within the platform's help center and are designed to empower you with the knowledge to use DayDeck effectively. For additional guidance or specific training needs, please don't hesitate to contact us through our Contact Us page.`
    },
    {
        id: "BILPAY1",
        tag: 'Billing / Payment',
        Question: "What are the accepted payment methods?",
        Answer: `We accept major credit cards, such as Visa, Mastercard, and American Express. We also offer the option of electronic bank transfers for annual subscription plans.`
    },
    {
        id: "BILPAY2",
        tag: 'Billing / Payment',
        Question: "Is there a refund policy?",
        Answer: `Yes, we offer a 30-day money-back guarantee. If you are not satisfied with our service within the first 30 days of your subscription, we will provide a full refund.`
    },
    {
        id: "BILPAY3",
        tag: 'Billing / Payment',
        Question: "How can I update my billing information?",
        Answer: `You can easily update your billing information by accessing your account settings within the DayDeck platform. Follow the instructions provided to make the necessary changes. If you need any assistance, feel free to reach out to us via our Contact Us page.`
    },
    {
        id: "PRFE1",
        tag: 'Product Features',
        Question: "What impact / sustainability metrics can I measure with DayDeck? ",
        Answer: `DayDeck offers fully customizable framework, configurable to suit your business operational needs and ensures the same framework gets linked to widely accepted global sustainability reporting standards. Our platform allows you to customize and track the specific metrics that matter most to your organization.`
    },
    {
        id: "PRFE2",
        tag: 'Product Features',
        Question: "Can I integrate DayDeck with other software systems?",
        Answer: `Yes, DayDeck provides integration capabilities with popular software systems, allowing you to connect and exchange data seamlessly. Our APIs and integrations enable smooth collaboration with existing tools, maximizing the value of your sustainability data. If you have any questions about integration or need assistance, please don't hesitate to contact us through our Contact Us page.`
    },
    {
        id: "PRFE3",
        tag: 'Product Features',
        Question: "How secure is my data on DayDeck? ",
        Answer: `We prioritize the security and privacy of your data. DayDeck follows industry-standard security protocols and uses encryption to protect your information. We also regularly conduct security audits and maintain strict access controls to ensure the confidentiality and integrity of your data. If you have any concerns regarding data security, please reach out to us via our Contact Us page.`
    },
]


const centeredArray = [2, 5, 8, 11]
const Faq = ({ isDarkMode }) => {
    const [selectedQuestion, setSelectedQuestion] = useState(null)


    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [isDivOpen, setIsDivOpen] = useState(false);



    return (
        <div className='Faq_main_container relative'>
            <div className='h-[40%] bg-white pt-[4%] flex items-center '>
                <FaqNotFoundPopup
                    open={open}
                    setOpen={setOpen}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                />
                <div className='flex flex-col ml-[10%] w-[70%]'>
                    <span style={{ fontWeight: '700', fontSize: '48px', fontFamily: 'satoshi', color: '#191919' }}>Ask Us Anything</span>
                    <span style={{ fontWeight: '700', fontSize: '20px', fontFamily: 'satoshi', color: '#191919', marginBottom: '2%' }}>Have any question? We are here to asist you</span>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, backgroundColor: '#232323' }}
                    >
                        <IconButton type="button" sx={{ p: '10px', color: 'white' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1, color: 'white' }}
                            placeholder="Search here"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />

                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

                    </Paper>
                </div>
                <div className='flex flex-col font-[satoshi] text-2xl tracking-wide'>
                    <span style={{ color: '#8E4DFF', fontWeight: '700', }}>Billing</span>
                    <span style={{ color: '#191919', fontWeight: '400', }}>Refunds</span>
                    <span style={{ color: '#191919', fontWeight: '400', }}>Features</span>
                    <span style={{ color: '#191919', fontWeight: '400', }}>Account Settings</span>
                    <span style={{ color: '#191919', fontWeight: '400', }}>Technical Query</span>
                    <span style={{ color: '#191919', fontWeight: '400', }}>Others</span>
                </div>
            </div>
            {isDivOpen && <div className="backdrop" onClick={() => {
                setIsDivOpen(false)
                setSelectedQuestion(null)
            }}></div>}
            <div styl className='h-[60%]  justify-center  overflow-y-auto flex flex-wrap pt-10 px-10'>
                {data.map((item, index) => {

                    return (
                        <div
                            onClick={() => {
                                console.log('f11111111irst')
                                if (item.id === selectedQuestion) {
                                    setIsDivOpen(false)
                                    setSelectedQuestion(null)
                                } else {
                                    setIsDivOpen(true)
                                    setSelectedQuestion(item.id)
                                }
                            }}
                            style={{
                                background: '#181818',
                                border: '1px solid grey',
                                marginLeft: '10px'
                            }}
                            className='w-[30%]  relative cursor-pointer rounded-lg  mb-5 flex items-center justify-center p-5'>
                            <KeyboardArrowDownIcon style={{ color: isDarkMode ? 'white' : 'white' }} className='absolute top-[10%] right-[2%]' />
                            <span style={{ color: isDarkMode ? 'white' : 'white' }}><b>Question: </b>{item.Question}</span>
                            {selectedQuestion && selectedQuestion === item.id &&



                                <div onClick={() => {
                                    console.log('first')
                                    setIsDivOpen(false)

                                }} style={{
                                    display: 'none',
                                    zIndex: 1000,
                                    position: 'absolute',
                                    left: centeredArray.includes(index + 1) ? '-25%' : (index + 1) % 3 === 0 ? '-50%' : '0%',
                                    backgroundColor: 'white',

                                }}
                                    className={`${selectedQuestion && "popupQandA rounded-lg popupQandA_shadow"} top-0 absolute w-[150%] bg-white px-10 py-10 cursor-pointer z-20 `}>

                                    <CloseIcon onClick={() => {
                                        setSelectedQuestion(null)

                                    }} className='absolute right-3 top-3 text-black z-100' style={{ fontSize: '50px' }} />

                                    <h1 style={{ marginBottom: '10px' }} className='text-black'><b className='text-black'>Question: </b>{data.filter((item, index) => item.id === selectedQuestion)[0].Question}</h1>
                                    <span className='text-gray-800'>{data.filter((item, index) => item.id === selectedQuestion)[0].Answer}</span>



                                </div>}
                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default Faq