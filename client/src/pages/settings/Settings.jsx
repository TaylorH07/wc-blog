import Sidebar from '../../components/sidebar/Sidebar';
import './settings.css';

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrap">
                <div className="settingsTitle">
                    <span className="updateTitleSetting">Update Your Account</span>
                    <span className="deleteTitleSetting">Delete Your Account</span>
                </div>
                <form className="settingsForm">
                    <label> Profile Picture</label>
                    <div className="settingsProfPic">
                        <img
                            src="https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsProfPicIcon fa-regular fa-circle-user"></i>
                        </label>
                        <input type="file" id='fileInput' style={{display:"none"}} />
                    </div>
                    <label> Username</label>
                    <input type="text" placeholder='name'/>
                    <label> Email</label>
                    <input type="email" placeholder='email@email.com'/>
                    <label> Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
