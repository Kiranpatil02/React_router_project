import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData]=useState([]);

    useEffect(()=>{
        fetch('https://api.github.com/users/Kiranpatil02')
        .then(response=>response.json().then(data=>{
            console.log(data);
            setData(data);
        }))

    },[])
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
        Gihub Followeers 🟢🟢:{data.following}
        <img className='' src={data.avatar_url} alt="" width={300} />

      
    </div>
  )
}

export default Github
