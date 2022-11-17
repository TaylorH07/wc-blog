import './singlePost.css'

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrap">
                <img
                    src="https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    className="singlePostImg"
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor, sit amet 
                    <div className="editSinglePost">
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='authorSinglePost'>Author: <b>Taylor</b> </span>
                    <span className='authorSingleDate'> 1 hr ago</span>
                </div>
                <p className='singlePostDesc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore rem necessitatibus, quam perspiciatis ipsa iure ut omnis, sit eum soluta eius iste est labore, consequatur voluptates. Veniam odio fuga amet.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore rem necessitatibus, quam perspiciatis ipsa iure ut omnis, sit eum soluta eius iste est labore, consequatur voluptates. Veniam odio fuga amet.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore rem necessitatibus, quam perspiciatis ipsa iure ut omnis, sit eum soluta eius iste est labore, consequatur voluptates. Veniam odio fuga amet.
                </p>
            </div>
        </div>
    )
}
