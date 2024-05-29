import AuthButton from "../components/AuthButton";
import React from "react";
import Notes from "./notes/page";

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <Notes />
    </div>
  );
}
