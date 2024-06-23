import { User } from "@clerk/nextjs/server";
import React from "react";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";
import FriendRequests from "./FriendRequests";
import Birthdays from "./Birthdays";
import Ad from "../Ad";

type Props = {
  user?: User;
};
const RightMenu = ({ user }: Props) => {
  return (
    <div className="flex flex-col gap-6">
      {!user && (
        <>
          <UserInfoCard />
          <UserMediaCard />
        </>
      )}
      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
