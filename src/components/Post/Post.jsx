import React from "react";
import { useSelector } from "react-redux";
import Frame from "../Frame";
import Comments from "../Comments";

import styles from "./Post.less";

export const Post = props => {
  const { id } = props.match.params;
  const data = useSelector(state => {
    const { posts } = state;
    return posts.find(p => p.id === id) || [];
  });

  return (
    <div className={styles.post}>
      <Frame data={data} className={styles.postFrame} />
      <Comments className={styles.postComments} data={data} />
    </div>
  );
};
