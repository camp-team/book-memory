import React from "react";

type Props = {
  title: string;
  contents: string;
};

const SettingComponent = ({ title, contents }: Props) => (
  <div className="py-8 border-b-2">
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="mt-6">{contents}</p>
    {title === "退会" && (
      <button className="mt-4 px-4 py-2 border rounded-md shadow text-sm text-black focus:* focus:outline-none">
        退会する
      </button>
    )}
  </div>
);

export default SettingComponent;
