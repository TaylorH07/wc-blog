import  './writePost.css'

export default function WritePost() {
  return (
        <div className='writePost'>
            <img
                className='writeImg'
                src="https://images.pexels.com/photos/5912965/pexels-photo-5912965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
            />
            <form className="writeForm">
                <div className="writeFormG">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input type="text" placeholder="Title" className='writeInput' autoFocus={true} />
                </div>
                <div className="writeFormG">
                    <textarea placeholder='Tell Your Story...' type='text' className='writeInput writeText'>
                    </textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
