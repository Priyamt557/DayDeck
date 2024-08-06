import React from 'react';
import { Link } from 'react-router-dom';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LightMode from '@mui/icons-material/LightMode';
import DarkMode from '@mui/icons-material/DarkMode';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      openDarkModePopup: false,
      openLightModePopup: false,
    };
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick() {
    this.setState({ menuOpen: false });
  }



  componentDidMount() {
    console.log(this.props)
  }

  darkLight = () => {
    let toggleButton = document.querySelector('#main');
    let AppContainer = document.querySelector('body');

    if (
      toggleButton.classList.contains('main--light') &&
      AppContainer.classList.contains('light')
    ) {
      toggleButton.classList.remove('main--light');
      toggleButton.classList.add('main--dark');
      AppContainer.classList.add('dark');
      AppContainer.classList.remove('light');
    } else {
      toggleButton.classList.remove('main--dark');
      toggleButton.classList.add('main--light');
      AppContainer.classList.remove('dark');
      AppContainer.classList.add('light');
    }
  };



  handleDarkModePopupOpen() {


    this.setState({ openDarkModePopup: true });
  }
  handleDarkModePopupClose() {

    this.setState({ openDarkModePopup: false });
  }
  handleLightModePopupOpen() {


    this.setState({ openLightModePopup: true });
  }
  handleLightModePopupClose() {

    this.setState({ openLightModePopup: false });
  }
  render() {


    const menu = ['About Us', 'Our Products', 'Services', 'FAQ', 'Contact Us'];
    let Path = window.location.href.split("/")[3].toLowerCase();

    const menuItems = menu.map((val, index) => {
      return (
        <MenuItem
          key={index}
          delay={`${index * 0.1}s`}
          onClick={() => {
            this.handleLinkClick();
          }}
        >
          {val}
        </MenuItem>
      );
    });

    return (
      <div className={`nav-body`}>







        <div
          id="nav-body"
          style={{ fontFamily: 'Lobster', zIndex: 100 }}
          className={`fixed top-nav ${Path == "blog" || Path == "faq" ? this.props.isDarkMode ? 'bg-black' : 'bg-white' : 'transparent'} top-0 left-0 h-[55px]  opacity-100 pb-1.5 flex flex-row items-center justify-between w-full `}
        >
          
            <Link
            to="/"
              style={{ zIndex: 98 }}
              id="nav_logo"
              className="logo m-1.5 cursor-pointer relative text-4xl"
            >
              <img src={require(this.props.isDarkMode ? '../assets/logowhite.png' : '../assets/logoblack.png')} alt="" />
            </Link>
          




          <section
            class="main main--dark shadow-inner mr-10"
            id="main"
            onClick={() => {
              this.darkLight();
              this.props.toggleMode();
            }}
          >
            {
              this.state.openDarkModePopup && <div style={{ top: '30px', zIndex: 350, width: '160px', height: '73px', left: '-30px' }} className='absolute'>
                <svg className='absolute rotate-180 left' width="160" height="73" viewBox="0 0 160 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="path-1-inside-1_75_447" fill="white">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 0C6.71573 0 0 6.71573 0 15V47.0501C0 55.3343 6.71573 62.0501 15 62.0501H129.583L135.448 73L141.313 62.0501H145C153.284 62.0501 160 55.3343 160 47.0501V15C160 6.71573 153.284 0 145 0H15Z" />
                  </mask>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15 0C6.71573 0 0 6.71573 0 15V47.0501C0 55.3343 6.71573 62.0501 15 62.0501H129.583L135.448 73L141.313 62.0501H145C153.284 62.0501 160 55.3343 160 47.0501V15C160 6.71573 153.284 0 145 0H15Z" fill="#393939" />
                  <path d="M129.583 62.0501L130.464 61.5779L130.181 61.0501H129.583V62.0501ZM135.448 73L134.566 73.4722L135.448 75.1179L136.329 73.4722L135.448 73ZM141.313 62.0501V61.0501H140.714L140.431 61.5779L141.313 62.0501ZM1 15C1 7.26801 7.26801 1 15 1V-1C6.16344 -1 -1 6.16345 -1 15H1ZM1 47.0501V15H-1V47.0501H1ZM15 61.0501C7.26801 61.0501 1 54.782 1 47.0501H-1C-1 55.8866 6.16344 63.0501 15 63.0501V61.0501ZM129.583 61.0501H15V63.0501H129.583V61.0501ZM136.329 72.5278L130.464 61.5779L128.701 62.5222L134.566 73.4722L136.329 72.5278ZM140.431 61.5779L134.566 72.5278L136.329 73.4722L142.194 62.5222L140.431 61.5779ZM145 61.0501H141.313V63.0501H145V61.0501ZM159 47.0501C159 54.782 152.732 61.0501 145 61.0501V63.0501C153.837 63.0501 161 55.8866 161 47.0501H159ZM159 15V47.0501H161V15H159ZM145 1C152.732 1 159 7.26801 159 15H161C161 6.16344 153.837 -1 145 -1V1ZM15 1H145V-1H15V1Z" fill="#8E4DFF" mask="url(#path-1-inside-1_75_447)" />
                </svg>
                <span style={{ position: 'absolute', width: '150px', fontSize: '10px', marginLeft: '10px', marginTop: '20px', fontFamily: 'satoshi', fontWeight: '400', lineHeight: '13.5px', color: 'white' }}>Great Choice! Shifting to the dark mode will significantly save your battery life.</span>
              </div>
            }
            {
              this.state.openLightModePopup && <div style={{ top: '30px', zIndex: 350, width: '160px', height: '73px', left: '-100px' }} className='absolute'>
                <svg className='absolute rotate-180 left' width="160" height="73" viewBox="0 0 160 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="path-1-inside-1_75_447" fill="white">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 0C6.71573 0 0 6.71573 0 15V47.0501C0 55.3343 6.71573 62.0501 15 62.0501H129.583L135.448 73L141.313 62.0501H145C153.284 62.0501 160 55.3343 160 47.0501V15C160 6.71573 153.284 0 145 0H15Z" />
                  </mask>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15 0C6.71573 0 0 6.71573 0 15V47.0501C0 55.3343 6.71573 62.0501 15 62.0501H129.583L135.448 73L141.313 62.0501H145C153.284 62.0501 160 55.3343 160 47.0501V15C160 6.71573 153.284 0 145 0H15Z" fill="#393939" />
                  <path d="M129.583 62.0501L130.464 61.5779L130.181 61.0501H129.583V62.0501ZM135.448 73L134.566 73.4722L135.448 75.1179L136.329 73.4722L135.448 73ZM141.313 62.0501V61.0501H140.714L140.431 61.5779L141.313 62.0501ZM1 15C1 7.26801 7.26801 1 15 1V-1C6.16344 -1 -1 6.16345 -1 15H1ZM1 47.0501V15H-1V47.0501H1ZM15 61.0501C7.26801 61.0501 1 54.782 1 47.0501H-1C-1 55.8866 6.16344 63.0501 15 63.0501V61.0501ZM129.583 61.0501H15V63.0501H129.583V61.0501ZM136.329 72.5278L130.464 61.5779L128.701 62.5222L134.566 73.4722L136.329 72.5278ZM140.431 61.5779L134.566 72.5278L136.329 73.4722L142.194 62.5222L140.431 61.5779ZM145 61.0501H141.313V63.0501H145V61.0501ZM159 47.0501C159 54.782 152.732 61.0501 145 61.0501V63.0501C153.837 63.0501 161 55.8866 161 47.0501H159ZM159 15V47.0501H161V15H159ZM145 1C152.732 1 159 7.26801 159 15H161C161 6.16344 153.837 -1 145 -1V1ZM15 1H145V-1H15V1Z" fill="#8E4DFF" mask="url(#path-1-inside-1_75_447)" />
                </svg>
                <span style={{ position: 'absolute', width: '150px', fontSize: '10px', marginLeft: '10px', marginTop: '20px', fontFamily: 'satoshi', fontWeight: '400', lineHeight: '13.5px', color: 'white' }}>Great Choice! Text on light mode are clearer and quicker to understand.</span>
              </div>
            }



            <button style={{
              backgroundColor: this.props.isDarkMode ? '#141414' : '#dadada',
              zIndex: 330,

            }} type="button" id="switch">
              <div
                onMouseLeave={() => { this.handleLightModePopupClose() }}
                onMouseEnter={() => { this.handleLightModePopupOpen() }}

                className='absolute w-[50%] h-full z-10  flex items-center justify-center'>


                <img className='w-5 mr-1' src={require(!this.props.isDarkMode ? '../assets/acivesun.png' : '../assets/darksun.png')} alt="" />
                <span style={{ fontFamily: 'Rymaneco', color: !this.props.isDarkMode ? 'white' : 'rgb(185 164 164);' }}>Light</span>

              </div>
              <span class="btn-switch"></span>
              <div



                onMouseLeave={() => { this.handleDarkModePopupClose() }}
                onMouseEnter={() => { this.handleDarkModePopupOpen() }}
                className='absolute flex w-[50%] right-0 h-full   items-center justify-center '>


                <img className='w-5 mr-1' src={require(this.props.isDarkMode ? '../assets/activemoon.png' : '../assets/darkmoon.png')} alt="" />

                <span style={{ fontFamily: 'Rymaneco', color: this.props.isDarkMode ? 'white' : '#615959' }}>Dark</span>

              </div>

            </button>
          </section>




          <MenuButton
            open={this.state.menuOpen}
            onClick={() => {
              this.handleMenuClick();
            }}
            color="white"
          />
        </div>
        <Menu open={this.state.menuOpen}>
          {/* <div className="mode_switch">
            <section id="model-22">
              <div className="card">
                <div className="toggle">
                  <b>Light</b>
                  <input
                    checked={this.props.isDarkMode}
                    onChange={this.props.toggleMode}
                    type="checkbox"
                    id="check-22"
                  />
                  <label for="check-22"></label>
                  <b>Dark</b>
                </div>
              </div>
            </section>
          </div> */}
          {menuItems}
          <div className="contact_us_container">
            {/* <div>
              <h1>NORMAND PLLC</h1>
              <h2>Orlando Phone: 407-603-6031</h2>
              <h2>Email : office@normadpllc.com</h2>
              <h2>Fax : 888-974-2125</h2>
            </div> */}

            <div className="contactIcons">
              <FacebookIcon className='cursor-pointer hover:scale-125' />
              <InstagramIcon className='cursor-pointer hover:scale-125' />
              <TwitterIcon className='cursor-pointer hover:scale-125' />
            </div>
          </div>
        </Menu>
      </div >
    );
  }
}

/* MenuItem.jsx*/
class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  handleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    const styles = {
      container: {
        // opacity: 0,
        animation: '1s appear forwards',
        animationDelay: this.props.delay
      },
      menuItem: {
        fontFamily: `'Open Sans', sans-serif`,
        fontSize: '1.4rem',
        padding: '0.7rem 0',
        margin: '0 5%',
        cursor: 'pointer',
        color: this.state.hover ? 'gray' : '#fafafa',
        transition: 'color 0.2s ease-in-out',
        animation: '0.5s slideIn forwards',
        animationDelay: this.props.delay,
        textShadow: '1px 1px 3px #130202'
      }
    };
    return (
      <div style={styles.container} className={`opacity-0	`}>
        <div
          style={styles.menuItem}
          onMouseEnter={() => {
            this.handleHover();
          }}
          onMouseLeave={() => {
            this.handleHover();
          }}
          onClick={this.props.onClick}
        >
          {this.props.children}
        </div>
        <div style={styles.line} />
      </div>
    );
  }
}

/* Menu.jsx */
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  render() {
    const styles = {
      container: {
        position: 'fixed',
        top: '62px',
        right: 7,
        height: this.state.open ? '445px' : 0,
        width: '24vw',
        paddingBottom: this.state.open ? '200px' : '0',
        paddingLeft: '30px',
        borderRadius: '25px',
        // borderTopRightRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        background: '#1c1c1c',
        // backgroundImage: 'linear-gradient(307deg, #374151 0%, #1a1d21 74%)',
        opacity: 0.9,
        color: '#fafafa',
        transition: 'height 0.3s ease',
        zIndex: 900,
        boxShadow: '0 2px 5px -1px rgba(0,0,0,1)'
      },
      menuList: {
        paddingTop: '3rem'
      }
    };
    return (
      <div style={styles.container}>
        {this.state.open ? (
          <div style={styles.menuList}>{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

/* MenuButton.jsx */
class MenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false,
      color: this.props.color ? this.props.color : 'black'
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
      this.toggleClass();
    }
  }

  handleClick() {
    console.log('handleClick');
    this.setState({ open: !this.state.open });
    this.toggleClass();
  }

  toggleMenu = () => {
    let menuicon = document.querySelector('.ham8');
    menuicon.classList.toggle('active');
  };

  toggleClass = () => {
    let menu = document.querySelector('.hamburger');
    console.log('toggleClass');
    menu.classList.toggle('active');
    menu.classList.toggle('not-active');
  };

  render() {
    return (
      <div className="box">
        <div
          className="btn  not-active hamburger"
          onClick={
            this.props.onClick
              ? this.props.onClick
              : () => {
                this.handleClick();
                this.toggleClass();
              }
          }
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
}

export default Navbar;
