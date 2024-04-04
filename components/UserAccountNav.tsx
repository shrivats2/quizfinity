"use client";

import type { User } from "next-auth";
import React from "react";
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import UserAvatar from "./UserAvatar";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

type Props = {
  user: Pick<User, "name" | "image" | "email">;
};

const UserAccountNav = ({ user }: Props) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <button className="outline-none">
          <UserAvatar
            user={{
              name: user.name || null,
              image: user.image || null,
            }}
          />
        </button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dropdown menu with icons">
        <DropdownSection showDivider>
          <DropdownItem>
            <div className="flex items-center justify-start gap-2 p-2">
              <div className="flex flex-col space-y-1 leading-none">
                {user.name && <p className="font-medium">Someone</p>}
                {user.email && (
                  <p className="w-[200px] truncate text-sm text-neutral-400">
                    someone@gmail.com
                  </p>
                )}
              </div>
            </div>
          </DropdownItem>
        </DropdownSection>
        <DropdownItem>
          <Link href="/">Home</Link>
        </DropdownItem>

        <DropdownItem
          onClick={(event) => {
            event.preventDefault();
            signOut().catch(console.error);
          }}
          className="flex items-center text-red-600 cursor-pointer"
        >
          <div className="flex">
            Sign out
            <LogOut className="w-4 h-4 ml-2 " />
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserAccountNav;
