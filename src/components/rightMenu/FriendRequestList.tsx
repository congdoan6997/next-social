import Image from "next/image";
import React from "react";

const FriendRequestList = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <div className="flex items-center justify-between" key={item}>
          <div className="flex items-center gap-4">
            <Image
              src={"/noAvatar.png"}
              alt=""
              width={40}
              height={40}
              className="size-10 rounded-full object-cover"
            />
            <span>PhDBui</span>
          </div>
          <div className="flex justify-end gap-3">
            <form action="">
              <button>
                <Image
                  src="/accept.png"
                  alt=""
                  width={20}
                  height={20}
                  className="cursor-pointer size-5"
                />
              </button>
            </form>
            <form action="">
              <button>
                <Image
                  src="/reject.png"
                  alt=""
                  width={20}
                  height={20}
                  className="cursor-pointer size-5"
                />
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendRequestList;
