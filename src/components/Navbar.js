import React, { useEffect } from 'react';
import { useState } from 'react';

function Navbar() {
  // const [users, setUsers] = useState(false)



  // const addPost = data => {

    
  // const headers = new Headers()
  // //headers.append('Content-type', 'application/json;charset-utf8')
  // headers.append('Authorization', 'efjklerlfkdr')


  // const formData= new FormData()
  // formData.append('userId',  data.userId)
  // formData.append('title', data.title)
  // formData.append('body', data.body)

  //   fetch('https://jsonplaceholder.typicode.com/posts', {
  //     method: 'Post',
  //     body: formData,
  //     headers
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(err => console.log(err))
  // }

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(res => {
  //       if (res.ok && res.status === 200) {
  //         return res.json()
  //       }
  //     })
  //     .then(data => setUsers(data))
  //     .catch(err => console.log(err))

  //   addPost({
  //     userId: 1,
  //     title: 'new Project',
  //     body: 'psot'
  //   })
  // }, [])

  return (
    <div className='h-[3rem] rounded-b-[15px] bg-[green]'>
      
    </div>
  );
}

export default Navbar;
