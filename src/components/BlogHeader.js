import React, { useEffect, useState } from 'react'




const BlogHeader = ({ isDarkMode }) => {
    const [arr, setarr] = useState([
        { id: 1, title: 'google', background: 'Rectangle 20.png' },
        { id: 2, title: 'google', background: 'Rectangle 21.png' },
        { id: 3, title: 'google', background: 'Rectangle 22.png' },
        { id: 4, title: 'google', background: 'Rectangle 23.png' },
        { id: 5, title: 'google', background: 'Rectangle 24.png' },
        { id: 6, title: 'google', background: 'Rectangle 25.png' },
        { id: 7, title: 'apple', background: 'Rectangle 26.png' },

    ])
    const [selectedcard, setSelectedCard] = useState(7)

    function setCard(card, index) {
        setSelectedCard(card.id)
        let array = arr;
        array[index] = array[array.length - 1];
        array[array.length - 1] = card
        setarr(array)
    }

    const [cardNumber, setCardNumber] = useState(7);
    useEffect(() => {
        console.log("cardNumber", cardNumber)
    }, [cardNumber])





    function handleClick(id) {
        const buttonWrap = document.querySelector('.button-wrap');
        const clickedButtonElement = document.getElementById(id);
        console.log('handleClickhandleClickhandleClickhandleClickhandleClickhandleClickhandleClickhandleClickhandleClickhandleClick')
        if (clickedButtonElement?.classList[0] === "button") {
            clickedButtonElement?.classList.add('fade-out');
            setTimeout(() => {
                clickedButtonElement.classList.remove('fade-out');
                clickedButtonElement.remove();
                buttonWrap.appendChild(clickedButtonElement);
            }, 400);

        }
    }
    return (
        <div style={{ backgroundColor: '#999999' }} className='Header_Container'>
            <div
                style={{
                    backgroundColor: isDarkMode ? '#999999' : '#999999',
                    height: window.innerWidth * 15 / 100
                }}
                className='Cards_header'>
                <div class="button-wrap">{
                    arr.map((item, index) => {
                        return (
                            <div
                                id={item.id}
                                onClick={handleClick(item.id)}
                                // style={{ backgroundImage: `${require('../assets/Rectangle 20.png')}` }}

                                className={`button
                                 
                                 
                                 `}>
                                <img style={{ zIndex: -10 }} onClick={() => { handleClick(item.id) }} className='absolute w-full' src={require(`../assets/${item.background}`)} alt="" />

                                <span>{item.id}</span>
                                {item.title}
                            </div>

                        )
                    })
                }
                </div>
                <div
                    style={{
                        backgroundColor: isDarkMode ? '#999999' : '#999999'
                    }}
                    className='sub_title'
                >
                    <div className="">
                        <p>About the company</p>
                        <p>Timeline</p>
                        <p>Sustainablilty initiatives</p>
                        <p>Milestones</p>
                        <p>Benefits</p>
                        <p>Additional Reference</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BlogHeader