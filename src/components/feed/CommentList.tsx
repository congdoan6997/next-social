"use client";
import Image from "next/image";

const CommentList = () => {
  return (
    <>
      <div className="flex items-center gap-4">
        <Image
          src={"/noAvatar.png"}
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <form
          action=""
          className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full"
        >
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </form>
      </div>
      {/* Comment */}
      <div className="">
        <div className="flex gap-4 justify-between mt-6">
          <Image
            src={"/noAvatar.png"}
            alt=""
            width={40}
            height={40}
            className="size-10 rounded-full"
          />
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">PhDBui</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  alt=""
                  width={12}
                  height={12}
                  className="cursor-pointer size-4"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">0 Likes</span>
              </div>
              <span>Reply</span>
            </div>
          </div>
          <Image
            src="/more.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer size-4"
          />
        </div>
      </div>
    </>
  );
};

export default CommentList;
