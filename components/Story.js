
function Story({img,username}) {
  return (
    <div className=" ">
      <img
        src={img}
        className="hover:scale-110 transition transform  duration-200 ease-out h-14 w-14 p-[1.5px] border-2 border-red-500 rounded-full cursor-pointer"
        alt=""
      />
      <p className="text-center text-sm truncate  w-14"> {username} </p>
    </div>
  );
}

export default Story