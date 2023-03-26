import Navbar from '@/components/navbar/Navbar'
import axios from 'axios';
import { useRouter } from 'next/router';
import React,{useState, useEffect} from 'react'
import { useCookies } from 'react-cookie';

type Props = {}

const singletweet = (props: any) => {

     const [post, setPost] = useState<any>({});
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [postProfilePic, setPostProfilePic] = useState<string>("");
  const [updateMode, setUpdateMode] = useState<boolean>(false);
   const [loading, setLoading] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [cookies, setCookie] = useCookies(['user'])

  const router = useRouter()
  const { pid } = router.query

  // const {singletweet} router.query
    console.log(router);
    // console.log(pid);
    
//     useEffect(() => {
//     const getPost = async () => {
//       const res = await axios.get("http://localhost:7000/api/tweets/" + router);
//       setPost(res.data);
//       setTitle(res.data.title);
//       setDesc(res.data.desc);
//       setTags(res.data.tags);
//       setPostProfilePic(res.data.profileDp)
//       setCompleted(true)
//     };
//     getPost();
//   }, []);
        

  return (
      <div>
          <div>
              <Navbar />
              </div>
    </div>
  )
}

export default singletweet