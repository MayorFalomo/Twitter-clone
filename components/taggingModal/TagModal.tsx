import React from "react";
import { ITaggedPerson } from "./TaggingModal";

type Props = {
  person: ITaggedPerson;
  setTagged: (arg: string) => void;
  // setUserSelected: (arg: boolean) => void;
  // setTaggingModal: (arg: boolean) => void;
};

const TagModal = (props: Props) => {
  // console.log(props., "props");

  return (
    <div className="tagView">
      <img className="imgData" src={props.person.profilePic} alt="img" />
      <div
        onClick={() => {
          props.setTagged(props.person.usersAt);
          // props.setUserSelected(true);
          // props.setTaggingModal(false);
        }}
      >
        <p> {props.person.username}</p>
        <p> {props.person.usersAt}</p>
      </div>
    </div>
  );
};

export default TagModal;
