import './post.css'

export default function Post() {
    return (
        <div className='post'>
            <img className='postImg'
                src="https://images.pexels.com/photos/13488939/pexels-photo-13488939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
            />
            <div className="postInfo">
                <div className="postCates">
                    <span className="postCate"> Music </span>
                    <span className="postCate"> Life </span>
                </div>
                <span className="postTitle"> Lorem ipsum, dolor sit amet  </span>
                <hr />
                 <span className="postDate"> 1 hr ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, officiis eos? Iusto dolores tempora dolor ipsa, fugiat, possimus neque nostrum at maxime labore corporis eveniet repellendus. Esse iusto earum quis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, officiis eos? Iusto dolores tempora dolor ipsa, fugiat, possimus neque nostrum at maxime labore corporis eveniet repellendus. Esse iusto earum quis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, officiis eos? Iusto dolores tempora dolor ipsa, fugiat, possimus neque nostrum at maxime labore corporis eveniet repellendus. Esse iusto earum quis.
            </p>
        </div>
    )
}

