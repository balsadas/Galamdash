import React, { useEffect } from 'react';
import img1 from './photo12.jpg'
import img2 from '../img/reply.png'
import { useState } from 'react';
import img3 from './reply (3).png'
import { io } from 'socket.io-client'
import setting from '../setting.json'
import Cookies from 'universal-cookie';
import { useParams } from 'react-router-dom';
import img4 from './speech-bubble.png'
import img5 from './speech-bubble (1).png'

const cookie = new Cookies()


// const Com = [
//   { title: 'Balshayew Hojamyrat', date: '23 hour ago', img: './photo/photo12.jpg', comment: 'kdjrfeksrjnfv erkwjfnvrs werkjnfvrsekjavn' },
//   { title: 'Balshayew Hojamyrat', date: '23 hour ago', img: '', comment: 'kdjrfeksrjnfv erkwjfnvrs werkjnfvrsekjavn' },
//   { title: 'Balshayew Hojamyrat', date: '23 hour ago', img: './photo/photo12.jpg', comment: 'kdjrfeksrjnfv erkwjfnvrs werkjnfvrsekjavn' },
//   { title: 'Balshayew Hojamyrat', date: '23 hour ago', img: './photo/photo12.jpg', comment: 'kdjrfeksrjnfv erkwjfnvrs werkjnfvrsekjavn' },
//   { title: 'Balshayew Hojamyrat', date: '23 hour ago', img: './photo/photo12.jpg', comment: 'kdjrfeksrjnfv erkwjfnvrs werkjnfvrsekjavn' },
//   { title: 'Balshayew Hojamyrat', date: '23 hour ago', img: './photo/photo12.jpg', comment: 'kdjrfeksrjnfv erkwjfnvrs werkjnfvrsekjavn kdjrfeksrjnfv erkwjfnvrs werkjnfvrsekjavnkdjrfeksrjnfv erkwjfnvrs werkjnfvrsekjavn' },
// ]





function Comment() {
  const [click1,setClick1] = useState(false)
  const [click, setClick] = useState(false)
  const { postID } = useParams('postID')
  const [commentID, setCommentID] = useState(0)
  console.log(postID)
  const [comments, setComments] = useState([])
  const Send = (e) => {
    if (!!cookie.get('token')) {
      socket.emit('send', { text: document.getElementById('text').value, parent: commentID })
    }

  }
  console.log(commentID)
  const socket = io(setting.SERVER, {
    auth: {
      token: cookie.get('token')
    },
    query: {
      "post": postID
    }
  })
  useEffect(() => {
    socket.on('connect', () => {
      socket.on(`comment`, (comment) => {
        setComments(comment)
      })
      socket.on(`c${postID}`, (comment) => {
        console.log('new')
        setComments(comment)
      })
      socket.on("commentsLast", (element) => {
        setComments(element)
      })
      socket.on('disconnect', () => console.log('server disconnected'))
    })
  }, [])

  const [c1n,setC1n] = useState()
  const SetCommentID2 = (value) => {
    setC1n(value)
    if (value == commentID) {
      setCommentID(0)
    } else {
      setCommentID(value)
    }
  }

  const ReplyCom = ({ comments, comID, setCommentID }) => {
    const [click, setClick] = useState(false)
    return (
      <div className='flex justify-center bg-[#E8F8F5] rounded-lg'>
        <div className=' md:w-[85%] w-[95%]'>
          <div>
            <ul>
              {comments.map((com, i) => (
                <li key={i} className='m-4'>
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center' >
                      <img src={com.user.img.length ? `${setting.SERVER}/${com.user.img}` : img1} className='md:w-[2.5vw] md:h-[2.5vw] cursor-pointer w-[9vw] h-[9vw] object-cover rounded-full' />
                      <div className='ml-2 font-bold md:text-[1.4vw] text-[4.5vw]  select-none'>{com.user.nick}</div>
                    </div>
                    <div className='md:text-[.8vw] text-[2.5vw] select-none'>{new Date(com.time).toLocaleString()}</div>
                  </div>
                  <div className='flex justify-center'>
                    <div className='md:w-[91%] select-none py-4 md:text-[1vw] text-[4vw] md:indent-3 indent-8 '>
                      <p>{com.content}</p>
                    </div>
                  </div>
                 {/* <div className='flex justify-end mb-2' onClick={() => { setClick(!click); SetCommentID2(comID) }}>
                    <img src={click ? img3 : img2} className='md:w-[1.2vw] w-[4vw] md:h-[1.2vw] h-[4vw]' />
              </div> */}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    )
  }

  const Comarea = () => {
    return (
      <div className='z-[99] fixed w-full bottom-0 right-2'>
        <div className=' flex justify-center'>
          <div className='shadow-xl rounded-t-lg md:px-4 py-3 flex bg-[#E8F8F5] w-full md:w-[80%]'>
            <img className='rounded-full object-cover md:h-[3vw] md:w-[3vw]  h-[10vw] w-[10vw]' src={img1} />
            <div className='md:w-[80%] ml-3'>
              <input id='text' className='md:w-full px-4 py-2  md:text-[1.1vw] text-[3vw] border rounded-lg' placeholder='Teswirinizi yazyn!' />
            </div>
            <div className='md:w-[10%] ml-3'>
              <button onClick={() => { Send() }} className='border py-2 rounded-lg font-[600] select-none cursor-pointer hover:bg-green-400 hover:text-[#fff] bg-[#fff] w-full'>Paylas</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='flex justify-center bg-[#fff] ' >
      <div className=' md:w-[70%] w-[95%]'>
        <div>
          <ul>
            {comments.map((com, i) => (
              <li key={i} className='m-4'>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center' >
                    <img src={com.user.img.length ? `${setting.SERVER}/${com.user.img}` : img1} className='md:w-[2.5vw] md:h-[2.5vw] cursor-pointer w-[9vw] h-[9vw] object-cover rounded-full' />
                    <div className='ml-2 font-bold md:text-[1.4vw] text-[4.5vw]  select-none'>{com.user.nick}</div>
                  </div>
                  <div className='md:text-[.8vw] text-[2.5vw] select-none'>{new Date(com.time).toLocaleString()}</div>
                </div>
                <div className='flex justify-center'>
                  <div className='md:w-[91%] select-none py-4 md:text-[1vw] text-[4vw] indent-8 md:indent-0 '>
                    <p>{com.content}</p>
                  </div>
                </div>
                <div className='flex justify-end mb-2 ' onClick={() => { setClick(!click); SetCommentID2(com.id) }}>
                  <img src={com.id == c1n ? img3 : img2} className='md:w-[1.2vw] w-[4vw] md:h-[1.2vw] h-[4vw]' />
                </div>
                <ReplyCom comments={com.comments} comID={com.id} SetCommentID2={SetCommentID2} />
              </li>
            ))}
          </ul>
        </div>
      </div>


      <div className='fixed md:bottom-20 md:right-10 right-2 bottom-16 z-50' onClick={() => setClick1(!click1)}>
        <img className='md:w-[3.5vw] md:h-[3.5vw] w-[8vw] h-[8vw] select-none cursor-pointer ' src={click1 ? img5 : img4} />
      </div>
      <div className={click1 ? 'block' : 'hidden'}>
        <Comarea  />
      </div>

    </div>
  );
}

export default Comment;
