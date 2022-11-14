import { Link } from 'react-router-dom'
import './navbar.css'

export default function navbar() {
    const user = false;
  return (
      <div className='nav'>
          <div className="navLeft">
              <i className="navIcon fa-brands fa-square-facebook"></i>
              <i className="navIcon fa-brands fa-square-twitter"></i>
              <i className="navIcon fa-brands fa-square-pinterest"></i>
              <i className="navIcon fa-brands fa-square-instagram"></i>
          </div>
          <div className="navCenter">
              <ul className="navList">
                  <li className='navListItem'>
                      <Link className='link' to='/'> HOME </Link>
                  </li>
                  <li className='navListItem'>
                      <Link className='link' to='/about'> ABOUT </Link>
                  </li>
                  <li className='navListItem'>
                      <Link className='link' to='/contact'> CONTACT </Link>
                  </li>
                  <li className='navListItem'>
                      <Link className='link' to='/writePost'> WRITE </Link>
                  </li>
                  <li className='navListItem'>
                      {user && "LOGOUT"}
                  </li>
              </ul>
          </div>
          <div className="navRight">
              {
                user ? (
                    <img
                    className='navImg'
                    src="https://images.pexels.com/photos/5912965/pexels-photo-5912965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    />
                  ) : (
                          <ul className='navList'>
                              <li className="navListItem">
                                  <Link className='link' to='/login'>
                                      LOGIN
                                  </Link>
                              </li>
                              <li className="navListItem">
                                  <Link className='link' to='/register'>
                                      REGISTER
                                  </Link>
                              </li>
                        </ul>
                    )
              }

              <i className="navSearchIcon fa-solid fa-magnifying-glass"></i>
          </div>

    </div>
  )
}
