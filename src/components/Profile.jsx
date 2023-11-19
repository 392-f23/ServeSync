import { useAuthState } from "../utilities/firebase";
import { firebaseSignOut } from "../utilities/firebase";
import "./Profile.css";

const Profile = () => {
    const ProfilePhotoComponent = () => {
        const [user] = useAuthState();

        return user ? (
            <div className="profile-info">
                <img id="profilePic" src={user.photoURL} alt="Profile Photo" className="circle_profile_photo" />
                <p>Name: {user.displayName}</p>
                <p>Email: {user.email}</p>
            </div>
        ) : null;
    }

    return (
        <div className="container1">
            <h2 className="main-title">Profile</h2>
            <ProfilePhotoComponent />
            <p>Your past actvitiy:</p>
            <button className="rounded-button" onClick={firebaseSignOut} >Sign Out</button>
        </div>
    );
}

export default Profile;