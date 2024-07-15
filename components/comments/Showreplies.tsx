import React, { useMemo, useState } from "react";
import Showreply from "./Showreply";

type Props = {};

//Parent component is CommentPage.tsx
const Showreplies = (props: any) => {
  const [views, setViews] = useState<number>(0);

  useMemo(() => {
    const view = Math.floor(Math.random() * props.suggestedUsers?.length);
    setViews(view);
  }, []);

  return (
    <div className="showRepliesContainer">
      <div className="replyCon">
        {props.replies?.map((reply: any) => (
          <div key={reply.newId} className="subReplyCon">
            <Showreply reply={reply} views={views} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showreplies;
