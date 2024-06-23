import Link from "next/link";
import React from "react";
import UpdateUser from "./UpdateUser";
import { User } from "@clerk/nextjs/server";
import Image from "next/image";
import UserInfoCardInteraction from "./UserInfoCardInteraction";
type Props = {
  user?: User;
};
const UserInfoCard = ({ user }: Props) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        {/* {currentUserId === user.id ? (
          <UpdateUser user={user} />
        ) : (
          <Link href="/" className="text-blue-500 text-xs">
            See all
          </Link>
        )} */}
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* Bottom */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Cong Doan</span>
          <span className="text-sm">@congdoan</span>
        </div>

        <p>Description of user</p>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span>
            Living in <b>Ha noi</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" width={16} height={16} />
          <span>
            Went to <b>LETI</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="" width={16} height={16} />
          <span>
            Works at <b>LETI </b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="" width={16} height={16} />
            <Link href="/" className="text-blue-500 font-medium">
              phdbui.com
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16} />
            <span>Joined 03/2003</span>
          </div>
        </div>
        <UserInfoCardInteraction />
      </div>
    </div>
  );
};

export default UserInfoCard;
