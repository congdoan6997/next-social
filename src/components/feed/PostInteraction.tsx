import Image from "next/image";
import React from "react";

const PostInteraction = () => {
  return (
    <div className="flex items-center justify-between text-sm my-4">
      <div className="flex gap-8">
        <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
          <form action="">
            <button>
              <Image
                src="/like.png"
                alt="like"
                width={16}
                height={16}
                className="size-4 cursor-pointer"
              />
            </button>
          </form>
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">
            100
            <span className="hidden md:inline"> Likes</span>
          </span>
        </div>
        <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
          <Image
            src="/comment.png"
            alt="comment"
            width={16}
            height={16}
            className="size-4 cursor-pointer"
          />

          <span className="text-gray-300">|</span>
          <span className="text-gray-500">
            100
            <span className="hidden md:inline"> Comments</span>
          </span>
        </div>
        <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
          <Image
            src="/share.png"
            alt="share"
            width={16}
            height={16}
            className="size-4 cursor-pointer"
          />

          <span className="text-gray-300 ">|</span>
          <span className="text-gray-500">
            100
            <span className="hidden md:inline"> Shares</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostInteraction;
