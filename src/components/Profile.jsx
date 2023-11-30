import { useAuthState } from "../utilities/firebase";
import { firebaseSignOut } from "../utilities/firebase";
import "./Profile.css";

const Profile = () => {
    const ProfilePhotoComponent = () => {
        const [user] = useAuthState();

        return user ? (
            <div className="profile-info">
                <div className="profile-photo-wrapper">
                    <img id="profilePic" src={user.photoURL} alt="Profile Photo" className="circle_profile_photo" />
                </div>
                <h3 className="user-name">{user.displayName}</h3>
                <p className="user-email">{user.email}</p>
            </div>
        ) : null;
    }

    return (
        <div className="profile-container">
            <header className="profile-header">
                <h2>Profile</h2>
            </header>
            <main>
                <ProfilePhotoComponent />
                <section className="activity-section">
                    <p>Your past activity:</p>
                    {/* Activity list goes here */}
                </section>
            </main>
            <footer>
                <button className="signout-button" onClick={firebaseSignOut}>Sign Out</button>
            </footer>
        </div>
    );
}

export default Profile;
