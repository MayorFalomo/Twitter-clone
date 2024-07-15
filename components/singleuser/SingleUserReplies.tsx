import React from "react";
import { SingleUserStyle } from "./Singleuser.styled";

type Props = {};

const SingleUserReplies = (props: Props) => {
  return (
    <div
      style={{
        height: "30vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="userReplies"
    >
      <p>This page is in progress</p>{" "}
    </div>
  );
};

export default SingleUserReplies;
