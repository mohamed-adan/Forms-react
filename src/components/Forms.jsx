import { useState, useRef } from "react"
import Post from "./Post";




function Form(){

    const[isOpen, setISOpen] = useState (false)

    const[title, setTitle]  = useState("")
     
    const[image, setImage] = useState("null")
  
    //state for the storing data from the form

    const[posts, setPosts] = useState ([])

     const ImageRef = useRef()

    const HandlePosts =(e) =>{
        e.preventDefault()
        const newPosts = {title, image}
        console.log(newPosts)

        if(title != " " && image != null){
            setPosts([ newPosts, ...posts, ])
            setTitle (" ")
            ImageRef.current.value = null
            setISOpen (false)
            HandleISclose ()
        }

    }
    
    



    //function that updates the state
    const HandleIsopen =() =>{
        document.body.style.backgroundColor = "#3C486B"

     setISOpen(true)
    }

    const HandleISclose =() =>{
        document.body.style.backgroundColor = "white"
        setISOpen(false)
    }




    return <div>
   
        <button onClick={HandleIsopen} className= "w-[60px] rounded-full pb-4 h-[60px] bg-blue-500 text-5xl  text-white fixed right-4 bottom-4">+</button>

      <div  className= {`bg-blue-500  sm:w-[700px] w-[370px] sm:px-10 px-2  pt-2 pl-2 pb-10 mx-10  sm:mx-[30%] rounded mt-12   ${isOpen === true ? "block" : "hidden"}`}>
      <i onClick={HandleISclose} class="fa-solid  fa-x ml-80 sm:ml-[600px] text-white text-3xl"></i>
        <form> 

         <input value={title} onChange={(event)=>{
            setTitle(event.target.value)
         }} className="h-[50px] w-[290px] " type="text" placeholder="  Enter Title" /> <br />

         <input ref={ImageRef} onChange={(e)=>{
            setImage(e.target.files[0])
         }}    className="mt-5 file:bg-yellow-500 file:border-0 file:p-3 file:rounded" type="file" />
         <br></br>
         <button onClick={HandlePosts } className="bg-white mt-10 px-10 text-3xl py-2 rounded-xl hover:bg-blue-100">Post</button>

        </form>
      </div>

   {
    posts.map((item) => {
        return isOpen === true ? "" : <Post title={item.title} image={URL.createObjectURL(item.image)} />
    })
   }
    </div>
   



}

export default Form