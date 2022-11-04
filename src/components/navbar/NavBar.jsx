import './navbar.css'

export default function navbar() {
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
                  <li className='navListItem'>HOME</li>
                  <li className='navListItem'>ABOUT</li>
                  <li className='navListItem'>CONTACT</li>
                  <li className='navListItem'>WRITE</li>
                  <li className='navListItem'>LOGOUT</li>
              </ul>
          </div>
          <div className="navRight">
              <img className='navImg'
                  src="https://images.pexels.com/photos/5912965/pexels-photo-5912965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <i className="navSearchIcon fa-solid fa-magnifying-glass"></i>
          </div>

    </div>
  )
}
