import React from "react";
import { ITaggedPerson } from "./TaggingModal";

type Props = {
  person: ITaggedPerson;
  setTagged: (arg: string) => void;
};

const TagModal = (props: Props) => {
  return (
    <div className="tagView">
      <div
        className="imgData"
        style={{ backgroundImage: `${props.person.profilePic}` }}
      >
        {" "}
      </div>
      <div
        onClick={() => {
          props.setTagged(props.person.usersAt);
        }}
      >
        <p> {props.person.username}</p>
        <p> {props.person.usersAt}</p>
      </div>
    </div>
  );
};

export default TagModal;
