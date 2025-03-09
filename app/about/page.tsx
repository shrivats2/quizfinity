import React from "react";
import { htmlCode } from "./_components/data";

const Page = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">HTML Code Viewer</h2>
      <textarea
        className="w-full h-[500px] p-2 border border-gray-300 rounded"
        value={htmlCode}
        readOnly
      />
    </div>
  );
};

export default Page;
