import { useState } from 'react'

const Home = () => {
    const [blog , setblog] = useState(
        [
            {
                title:"",
                decription:"",
                auther:""
            },
            {
                title:"",
                decription:"",
                auther:""
            },
            {
                title:"",
                decription:"",
                auther:""
            }
        ]
    )
    return (
        <div>
           {
               blog.map(
                   (item, ind)=>(
                       <div> key={item.title} </div>
                   )
               )
           } 
        </div>
    )
}

export default Home
