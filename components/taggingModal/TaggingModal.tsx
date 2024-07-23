import React from "react";
import { TagModalStyle } from "./TagModal.styled";
import TagModal from "./TagModal";

interface Props {
  tagged: ITaggedPerson[] | [];
  setTagged: (arg: string) => void;
}

export interface ITaggedPerson {
  id: string;
  username: string;
  email: string;
  usersAt: string;
  usersId: string;
  blocked: string;
  currentUserName: string;
  profilePic: string;
  reported: string;
}

const TaggingModal = (props: Props) => {
  return (
    <TagModalStyle>
      <div className="modalContainer">
        {props.tagged
          ? props.tagged?.map((val, index: number) => (
              <div className="taggedPerson" key={index}>
                <TagModal person={val} setTagged={props.setTagged} />
              </div>
            ))
          : ""}
      </div>
    </TagModalStyle>
  );
};

export default TaggingModal;
