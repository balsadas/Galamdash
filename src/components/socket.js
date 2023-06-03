import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import setting from '../setting.json'
const App = () => {
    const Post = '1'
    const [comments, setComments] = useState([])
    const [text, setText] = useState('')
    const Send = (e) => {
        console.log(document.getElementById('text').value)
        socket.emit('send', document.getElementById('text').value)
    }
    const socket = io(setting.SERVER, {
        auth: {
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ0eXBlIjozLCJpYXQiOjE2ODU3NzU1MTMsImV4cCI6MTY4NTg2MTkxM30.bZvYHkgByf-QK3JUdYclyAb_NfwgskbdzTUUbyiPMvg"
        },
        query: {
            "post": Post
        }
    })
    useEffect(() => {
        socket.on('connect', () => {
            socket.on(`comment`, (comment) => {
                setComments(comment)
            })
            socket.on(`c${Post}`, (comment) => {
                console.log('new')
                setComments(comment)
            })
            console.log('connect')
            socket.on("commentsLast", (element) => {
                setComments(element)
            })
            socket.on('disconnect', () => console.log('server disconnected'))
        })
    }, [])

    console.log(comments)

    const Content = ({ comment }) => {
        console.log(comment)
        return <tr>
            <td>
                {comment.content}
            </td>
            <td>
                {comment.user.nick}
            </td>
            <td>
                <table>
                    <tbody>
                        {comment.comments.map((comm, index) => <tr key={index}>
                            <td>
                                {comm.content}
                            </td>
                            <td>
                                {comm.user.nick}
                            </td>
                        </tr>)}
                    </tbody>
                </table>

            </td>
        </tr>
    }

    return (
        <div className="App">
            <table>
                <tbody>
                    {comments.map((comment, index) =>
                        <Content key={index} comment={comment} />
                    )}
                </tbody>
            </table>
            <input id='text' />
            <button onClick={(e) => Send(e)}>
                Send
            </button>
        </div>
    )
}
export default App;