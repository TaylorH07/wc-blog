import './header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className='headerTitleSm'> React and Node</span>
                <span className='headerTitleLg'> Blog</span>
            </div>
            <img className='headerImg'
                src='https://images.pexels.com/photos/10242311/pexels-photo-10242311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
                alt=''
            />
        </div>
    )
}
