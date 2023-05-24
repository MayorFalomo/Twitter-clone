import React, {useState, useEffect, useContext} from 'react'
import { AiOutlineBars, AiOutlineFileGif } from 'react-icons/ai'
import { BsCardImage, BsEmojiSmile, BsEmojiSmileUpsideDown } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import { TbCalendarTime } from 'react-icons/tb'
import axios from 'axios'
import { MdClose } from 'react-icons/md'
import { CommentModalStyle } from '@/components/commentmodal/Commentmodal.styled'
import { AppContext } from '@/helpers/Helpers'
import EmojiPicker from 'emoji-picker-react'

type Props = {}

//Parent component is tweet.tsx
const CommentModal = (props:any) => {
    
      const commentId = new Date()

  const {currentUser} = useContext(AppContext)
  const [emoji, setEmoji] = useState<boolean>(false);
  const [picture, setPicture] = useState<string>("");
  const [video, setVideo] = useState<string>("");
  const [singleTweets, setSingleTweets] = useState<any>([])
  const [comments, setComments] = useState<any>(singleTweets?.comments) //comment box for user to enter comment and post it. 	   const [
  const [successfulUpload, setSuccessfulUpload] = useState<boolean>(false)
  const [postId, setPostId] = useState<number>(singleTweets?._id)
  const [createdAt, setCreatedAt] = useState<any>(commentId)
  const [successComment, setSuccessComment] = useState<boolean>(false)

     const uploadImage = (files: any) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "t3dil6ur");
    axios
      .post("https://api.cloudinary.com/v1_1/dsghy4siv/image/upload", formData)
      .then((res) => setPicture(res.data.url))
      .catch((err) => console.log(err));
      setSuccessfulUpload(true)
    };
    
  const uploadVideo = (files: any) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "t3dil6ur");
    axios
      .post("https://api.cloudinary.com/v1_1/dsghy4siv/video/upload", formData)
      .then((res) => setVideo(res.data.url))
      .catch((err) => console.log(err));
      setSuccessfulUpload(true)
  };
      
    useEffect(() => {
        axios.get(`https://twitter-clone-server-nu.vercel.app/api/tweets/${props.urlParams}`).then((res) => setSingleTweets(res.data))
            .catch((err) => console.log(err))
    }, [props.urlParams])
  
   const handleComment = async (e:any) => {
         e.preventDefault();
         const commentData = {
             username: currentUser?.username,
             usersAt: currentUser?.usersAt,
             profileDp: currentUser?.profilePic,
             comments,
             picture,
             video,
             postId: singleTweets?._id ,
             createdAt,
         }
         await axios.put(`https://twitter-clone-server-nu.vercel.app/api/tweets/comments/`, commentData).catch((err) => console.log(err))
     setComments(" ")
     setSuccessComment(true)
        //  setSingleTweets({
        //      ...singleTweets, comments: [
        //      ...singleTweets.comments, commentData,
        //  ]})
     }
    
    return (
        <CommentModalStyle>
      <div className='commentModalContainer' >
          <div className='commentModalClose' >
            {<MdClose onClick={() => props.setCommentModal(false)} fontSize={35} cursor='pointer' />} </div>
                <div className='subCommentModal' >
                    <div className='profileImages' >
              <div style={{ backgroundImage: `url(${singleTweets?.profileDp})` }} className='ProfilePic'> </div>
              <div className='border' > </div>
                        <div style={{ backgroundImage: `url(${currentUser.profilePic})` }} className='ProfilePic' > </div>
                        </div>
              <div className='replyDetails' >
                  <h3>{singleTweets?.username} <span>{singleTweets?.usersAt} </span> </h3>
                  <p >{singleTweets?.tweet?.slice(0, 85)}... </p>
                  <p className='tweet' >Replying to <span> {singleTweets?.usersAt} </span> </p>
        <form onSubmit={handleComment} >
            <textarea onChange={(e) => setComments(e.target.value) } value={comments} typeof='text' placeholder='Tweet your reply' />
                <div className="flexIcons">
                <div className="tweetIcons">
                <label htmlFor="fileInputImage" style={{ cursor: "pointer" }}>
                  {<BsCardImage color='1D9BF0' />}
                </label>
                <input type="file" onChange={(e) => uploadImage(e.target.files) } id="fileInputImage" style={{ display: "none" }} />
                <label htmlFor="fileInputGif" style={{ cursor: "pointer" }}>
                  {<AiOutlineFileGif color='1D9BF0' />}
                </label>
                <input type="file" onChange={(e) => uploadVideo(e.target.files)} id="fileInputGif" style={{ display: "none" }} />
                <span>
                  {<AiOutlineBars cursor="pointer" color='1D9BF0' />}{" "}
                </span>
                {emoji ? (
                  <span onClick={() => setEmoji(false)}>
                    {<BsEmojiSmileUpsideDown cursor="pointer" color='1D9BF0' />}
                  </span>
                ) : (
                  <span onClick={() => setEmoji(true)}>
                    {<BsEmojiSmile cursor="pointer" color='1D9BF0' />}
                  </span>
                )}
                {emoji ? (
                      <div className="pickerEmoji" >
                        <EmojiPicker onEmojiClick={(e) => setComments(comments + e.emoji) } />
                </div>
                ) : (
                  ""
                )}
                
                <span className='calendarIcon' >
                  {<TbCalendarTime cursor="pointer" color='1D9BF0' />}{" "}
                </span>
                <span className="locationIcon">
                  {<IoLocationOutline color='1D9BF0' />}{" "}
                </span>
              </div>
                {successfulUpload == true || comments?.length > 0 ? <button type="submit" className="tweetButton" >Tweet</button> : <button className="btn-primary" disabled>
                  Tweet
                </button>}
              </div>
                  </form>
            </div>
          </div>
              {successComment ? <div className="successMessage" >Your comment has been sent </div> : "" }
            </div>
            </CommentModalStyle>
  )
}

export default CommentModal