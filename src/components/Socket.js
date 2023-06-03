import React from 'react'
import { io } from 'socket.io-client'
import setting from '../setting.json'
const App = () => {
    const [time, setTime] = React.useState('fetching')
    React.useEffect(() => {
        const socket = io(setting.SERVER)
        socket.on('connect', () => console.log(socket.id))
        socket.on('connect_error', () => {
            setTimeout(() => socket.connect(), 5000)
        })
        socket.on('time', (data) => setTime(data))
        socket.on('comments', comments => {
            console.log(comments)
        })
        socket.on('disconnect', () => setTime('server disconnected'))

    }, [])
    return (
        <div className="App">
            {time}
        </div>
    )
}

export default App;