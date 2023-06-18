// /* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { AiOutlineBars, AiOutlineFileGif } from 'react-icons/ai'
import { BsCardImage, BsEmojiSmile, BsEmojiSmileUpsideDown } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import { MdClose } from 'react-icons/md'
import { TbCalendarTime } from 'react-icons/tb'
import Mappedreply from './Mappedreply'
import EmojiPicker from 'emoji-picker-react';
import { ReplyPageStyle } from './Replymodal.styled'
type Props = {}

//Parent component is CommentPage.tsx
const Reply = (props: any) => {

      const commentId = new Date()

   function dec2hex (dec:any) {
  return dec.toString(16).padStart(2, "0")
  }
  
  // generateId :: Integer -> String
function generateId (len:any) {
  var arr = new Uint8Array((len || 40) / 2)
  window.crypto.getRandomValues(arr)
  return Array.from(arr, dec2hex).join('')
  }

  const [emoji, setEmoji] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [tweet, setTweet] = useState<string>("");
  const [picture, setPicture] = useState<string>("");
  const [video, setVideo] = useState<string>("");
  const [like, setLike] = useState<any>([])
  const [retweet, setRetweet] = useState<any>([])
  const [singleTweets, setSingleTweets] = useState<any>()
  const [comments, setComments] = useState<any>(singleTweets?.comments) //comment box for user to enter comment and post it. 	   const [
  const [successfulUpload, setSuccessfulUpload] = useState<boolean>(false);
  const [postId, setPostId] = useState<number>(singleTweets?._id)
  const [createdAt, setCreatedAt] = useState<any>(commentId)
  const [successComment, setSuccessComment] = useState<boolean>(false)
  const [newId, setNewId] = useState<any>(generateId(24))
  const [id, setId] = useState<any>()

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
    
  //UseEffect to get the comment being replied
  useEffect(() => {
    axios.get(`https://twitter-clone-server-nu.vercel.app/api/tweets/${props.getCommentId}/${props.urlParams}`)
      .then((res) => setSingleTweets(res.data.comments))
      .catch((err) => console.log(err))
  }, [props.getCommentId, props.urlParams])
  
  //Function to handle Replying of a comment
      const handleComment = async (e:any) => {
         e.preventDefault();
        const commentData = {
          username: props.currentUser?.username,
          profileDp: props.currentUser?.profilePic,
          comments,
          usersAt: props.currentUser?.usersAt,
          picture,
          video,
          postId: singleTweets?._id,
          createdAt,
          newId,
          like,
          retweet,
         }
         await axios.put(`https://twitter-clone-server-nu.vercel.app/api/tweets/${props.getCommentId}/${props.urlParams}/replies-comments`, commentData).catch((err) => console.log(err))
     setComments(" ")
     setSuccessComment(true)
        //  setSingleTweets({
        //    ...singleTweets,
        //    comments: [
        //      ...singleTweets.comments, 
        //    ]
        //  })
        setSingleTweets([
    {
      ...singleTweets,
      comments: {
        ...singleTweets.comments,
        comment: [...singleTweets.comments.comment, { ...commentData }],
      },
    },
    ...singleTweets,
  ]);
    //      props.setSingleTweets({
    //     ...props.tweetProps,
    //     comments: {
    //       ...props.tweetProps?.comments,
    //       comment: [
    //         ...props.tweetProps?.comments.comment,
    //         { ...commentData }
    //     ]
    //   }
    // })
  }
console.log(singleTweets, "singletweets");

  
 
  return (
    <ReplyPageStyle>
     <div className='commentModalContainer' >
          <div className='commentModalClose' >
            {<MdClose onClick={() => props.setCommentModal(false)} fontSize={40} cursor='pointer' />} </div>
                <div className='subCommentModal' >
                    <div className='profileImages' >
              <div style={{ backgroundImage: `url(${singleTweets?.profileDp})` }} className='ProfilePic'> </div>
              <div className='border' > </div>
                        <div style={{ backgroundImage: `url(${props.currentUser?.profilePic})` }} className='ProfilePic' > </div>
                        </div>
        <div className='replyDetails' >
          {singleTweets?.map((singleTweet:any) => (
            <div key={singleTweet._id} ><Mappedreply singleTweet={singleTweet} setId={setId} /> </div>
          ))}
                  <h1>{singleTweets?.username} <span>{singleTweets?.usersAt} </span> </h1>
                  <p >{singleTweets?.tweet?.slice(0, 85)}... </p>
                  <p className='tweet' >Replying to <span> {singleTweets?.usersAt} </span> </p>
        <form onSubmit={handleComment} >
            <textarea onChange={(e) => setComments(e.target.value) } value={comments} typeof='text' placeholder='Tweet your reply' />
                <div className="flexIcon">
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
                {successfulUpload == true || comments?.length > 0 ? <button type="submit" className="tweetButton" >Reply</button> : <button className="btn-primary" disabled>
                  Reply
                </button>}
              </div>
                  </form>
            </div>
          </div>
              {successComment ? <div className="successMessage" >Your comment has been sent </div> : "" }
      </div>
      </ReplyPageStyle>
  )
}

export default Reply;