import { type User } from "next-auth";
import React from "react";
import { Avatar } from "@nextui-org/react";
import Image from "next/image";

interface Props {
  user: Pick<User, "name" | "image">;
}

const UserAvatar = ({ user, ...props }: Props) => {
  return (
    // <Avatar {...props}>
    //   {user.image ? (
    //     <div className="relative w-full h-full aspect-square">
    //       <Image
    //         fill
    //         src={user.image}
    //         alt="profile picture"
    //         referrerPolicy="no-referrer"
    //       />
    //     </div>
    //   ) : (
    //     <Avatar>
    //       <span className="sr-only ">{user?.name}</span>
    //     </Avatar>
    //   )}
    // </Avatar>
    <Avatar
      showFallback
      name={user.name || ""}
      isBordered
      color="danger"
      src={user.image || ""}
    />
  );
};

export default UserAvatar;
