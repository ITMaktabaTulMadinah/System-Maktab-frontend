import React from "react";
import { User, Link, Button } from "@nextui-org/react";

export default function Navbar() {
  const user = true;
  return (
    <div className="w-full h-6 py-8 flex items- shadow-md border-b-1">
      <div className="w-[95%] px-8 flex items-center justify-between mx-auto">
        <h1>Maktaba Tul Madinah IT</h1>
        <div className="flex gap-8">
          <User
            avatarProps={{
              src: "https://avatars.githubusercontent.com/u/30373425?v=4",
            }}
            description="Asst IT Manager"
            name="Asheel Ahmed Siddiqui"
          />
          {user ? <Button color="danger">Logout</Button> : ""}
        </div>
      </div>
    </div>
  );
}
