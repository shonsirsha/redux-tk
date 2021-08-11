import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { UserDetail } from "../types";
import { saveUserDetail } from "../slices/user";
import { setTheme } from "../slices/theme";

const ProfileSettings: FC = () => {
  const dispatch = useDispatch();
  const [profileDetails, setProfileDetails] = useState<UserDetail>({
    name: "",
    email: "",
  });
  const [checkboxChecked, setCheckboxChecked] = useState<boolean>(false);
  const handleSaveBtnClicked = () => {
    dispatch(saveUserDetail({ userDetail: profileDetails }));
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileDetails({ ...profileDetails, [e.target.name]: e.target.value });
  };
  const handleThemeCheckboxClicked = () => {
    setCheckboxChecked(!checkboxChecked);
    dispatch(setTheme({ darkTheme: !checkboxChecked }));
  };
  return (
    <div className="form">
      <label>Name:</label>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleOnChange(e);
        }}
        placeholder="Name"
        type="text"
        name="name"
        value={profileDetails.name}
      />
      <label>Email:</label>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleOnChange(e);
        }}
        placeholder="Email"
        type="email"
        name="email"
        value={profileDetails.email}
      />
      <button onClick={handleSaveBtnClicked}>Save profile</button>
      <label>Dark theme:</label>{" "}
      <input
        checked={checkboxChecked}
        onClick={handleThemeCheckboxClicked}
        type="checkbox"
      />
      <kbd> Component 2 (ProfileSettings.tsx)</kbd>
    </div>
  );
};

export default ProfileSettings;
