// import "../AddPost/AddPost.css";
import {
    PermMedia,
    Label,
    Room,
    EmojiEmotions,
    Cancel,
} from "@mui/icons-material";
import { useContext, } from "react";
import { key } from "localforage";
import { AuthContext } from "../../Providers/AuthProvider";
const AddPost = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="share max-w-2xl mx-auto">
            <div className="shareWrapper">
                <div className="shareTop flex ps-4">
                    <img
                        className="shareProfileImg h-16 w-16 rounded-full"
                        src={
                            user.photoURL
                                ? + user.photoURL
                                : + "person/noAvatar.png"
                        }
                        alt=""
                    />
                    <input
                        placeholder={"What's in your mind " + user.displayName + "?"}
                        className="shareInput"
                        ref={key}
                    />
                </div>
                <hr className="shareHr" />

                <div className="shareImgContainer">
                    <img className="shareImg -mt-5" src="" alt="" />
                    <Cancel className="shareCancelImg" onClick="" />
                </div>

                <form className="shareBottom " onSubmit="">
                    <div className="shareOptions grid grid-cols-5">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo or Video</span>
                            <input
                                style={{ display: "none" }}
                                type="file"
                                id="file"
                                accept=".png,.jpeg,.jpg"
                                onChange=""
                            />
                        </label>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton" type="submit">
                        Share
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddPost;