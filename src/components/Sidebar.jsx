import { Tab, Tabs } from "@nextui-org/react";
import React from "react";

export default function Sidebar() {
  const sizes = ["sm", "md", "lg"];
  return (
    <div className="bg-warning-500 w-1/6 h-screen py-6 px-4">
      <Tabs
        aria-label="Tabs sizes"
        isVertical={true}
        size={"lg"}
        fullWidth={true}
        variant="light"
        color="default"
        radius="sm"
      >
        <Tab key="users" title="Users" />
        <Tab key="gatepass" title="Gatepass" />
        <Tab key="Userssystemdetails" title="Users System Details" />
        {/* <Tab key="videos" title="Videos" />
        <Tab key="videos" title="Videos" />
        <Tab key="videos" title="Videos" />
        <Tab key="videos" title="Videos" /> */}
      </Tabs>
    </div>
  );
}
