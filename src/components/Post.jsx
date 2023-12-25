function Post(props){
    return <div className=" flex justify-center">
    <div className="border-2 border-gray-500 px-3 pb-8 pt-5 rounded mt-4">
        <img className="w-[500px]" src={props.image}/>
        <p>{props.title}</p>
        </div>
    </div>
}

export default Post
