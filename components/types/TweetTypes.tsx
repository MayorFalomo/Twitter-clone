export interface TweetType {
  _id: string;
  tweet: string;
  userId: string;
  picture: string;
  video: string;
  usersAt: string;
  username: string;
  updatedAt: string;
  createdAt: string;
  profileDp: string;
  comments: Comments[];
  quoted: Quotes[];
  likes: Likes[];
  retweets: Retweets[];
}

export interface Comments {
  _id: string;
  comment: string;
  username: string;
  usersAt: string;
  video: string;
  picture: string;
  comments: string;
  newId?: string;
  profileDp: string;
  retweet: any;
  likes: any;
}

export interface Likes {
  id: string;
  tweets: string;
  profileDp: string;
  usersAt: string;
  username: string;
  currentUserName: string;
  createdAt: string;
}

export interface Retweets {
  _id: string;
  tweets: string;
  profileDp: string;
  usersAt: string;
  username: string;
  currentUserName: string;
  createdAt: string;
}

export interface Quotes {
  _id: string;
  tweets: string;
  profileDp: string;
  usersAt: string;
  username: string;
  currentUserName: string;
  createdAt: string;
}

export interface Bookmarks {
  _id: string;
  tweets: string;
  profileDp: string;
  usersAt: string;
  username: string;
  currentUserName: string;
  createdAt: string;
}
