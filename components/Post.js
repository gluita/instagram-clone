import {
  DotsVerticalIcon,
  ChatIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";

import { HeartIcon } from "@heroicons/react/solid";
function Post({ image, id, caption, name }) {
  return (
    <div className="mb-3 border rounded-md p-5">
      {/* // header  */}
      <div className="flex justify-start items-center pb-3 ">
        <img
          src={image}
          alt=""
          className="h-9   w-9 rounded-full  object-contain cursor-pointer"
        />
        <p className=" mr-auto pl-4 cursor-pointer font-bold text-sm ">
          {name}
        </p>
        <DotsVerticalIcon className="h-5 w-5    cursor-pointer" />
      </div>

      {/* // main post  */}
      <img
        src={image}
        className="object-cover w-full h-[29rem] rounded-sm pb-2 "
        alt=""
      />
      {/* // buttons  */}
      <div className="flex justify-start items-center pb-1">
        <div className="flex space-x-3 mr-auto items-center">
          <HeartIcon className="h-7 w-7 hover:scale-125 transition transform duration-200 ease-out  hover:text-red-500 fill-red-500  border-none outline-none" />
          <ChatIcon className="Btn" />
          <PaperAirplaneIcon className="Btn rotate-45" />
        </div>
        <div>
          <BookmarkIcon className="Btn" />
        </div>
      </div>
      {/* // caption  */}
      <p className="truncate pb-2">
        <span className=" font-bold text-black mr-1">{name}</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
          voluptas nostrum odit incidunt earum sint eaque quasi voluptate
          laudantium nulla? Cum quo libero maxime eaque, esse ipsa, temporibus,
          optio ipsam deleniti aperiam commodi culpa quidem reprehenderit
          facilis possimus repellat eligendi!
        </span>
      </p>
      {/* // comments  */}

      {/* input box  */}
      <form className="flex items-center ">
        <EmojiHappyIcon className="h-6 w-6 cursor-pointer" />
        <input type="text" placeholder="Add a comment..."  className="flex-1 border-none outline-none focus:ring-0"/>
        <p className=" font-semibold text-blue-500">Post</p>
      </form>
    </div>
  );
}

export default Post;
