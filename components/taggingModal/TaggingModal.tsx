import React from "react";
import { TagModalStyle } from "./TagModal.styled";
import TagModal from "./TagModal";

interface Props {
  taggedPeople: ITaggedPerson[] | [];
  setTagged: (arg: string) => void;
  isLoading: boolean;
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
        {props.isLoading ? (
          <div className="loadingBar">
            <span className="loader"> </span>
          </div>
        ) : props.taggedPeople ? (
          props.taggedPeople?.map((val, index: number) => (
            <div className="taggedPerson" key={index}>
              <TagModal person={val} setTagged={props.setTagged} />
            </div>
          ))
        ) : (
          <span className="emptyArray">No user Found </span>
        )}
      </div>
    </TagModalStyle>
  );
};

export default TaggingModal;
