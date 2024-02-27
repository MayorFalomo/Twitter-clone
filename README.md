
# Tweeks

Tweeks is a full MERN Stack project and Twitter clone with both Backend and Frontend functionalities, The idea was to create something very similar to twitter in terms of both looks and at least some of it's functionalities.

## Demo
https://tweeks.netlify.app/

![Logo](https://res.cloudinary.com/dsghy4siv/image/upload/v1693133147/qaffemcdlwdkhfujmg51.png)

## Features

- Real-time messaging (pictures and videos included).
- Receive Notifications when your post is liked, retweeted, quoted and commented on or being followed.
- Option to view Tailored post for you based on your following
- Notifications clear after 1 day though, this is to reduce the load on the database.
- Follow and Unfollow other users.
- commenting on a tweet and replying comments.
- like and retweet comments.
- Like, Retweet and Quote tweets.
- Bookmark a tweet.
- Edit your profile.
- View other peoples profiles.
- Posting Tweets, pictures and videos.
- See profiles you follow and your followers.
- Connect with other users.
- Search for a tweet(This is done from the backend not a simple filter method).
- Get a verified badge if you get up to 5 followers.
- It is a PWA so it can be installed on devices.
- Infinite scroll so more tweets load when the user gets to the last tweet.
- All users by default get a birthday date,bio, location and a link, this is i simply did for UI purposes. all are editable later as you wish.
- your login data is saved to a cookie so you never have to remember your password or username.

## Demo

https://tweeks.netlify.app/register
## License

[MIT](https://choosealicense.com/licenses/mit/)


## Tech Stack

**Client:** Next Js, Styled Components

**Backend:** Node Js, Express and MongoDB



## Support

For support, email mayorfalomo@gmail.com or contact me via any platform.


## Optimizations

What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility

I needed my web application to be fast so i used Next Js which is known for it's speed.

I made registration easy and simple using a random username, password generator and firebase to handle all my users registration.

I avoided making too many API Calls and instead used context to pass my data through out my application so the data is always readily available for users instead of requesting that same information from the server again.

I stored each users information on a cookie that way, the users login and information is better secured and persists instead of using Local storage.

When registering, I added a auto generate username, email and password functionality, so users can register with ease at the click of a button, plus they don't have to remember all this info since it's all stored on a cookie that makes sure they are always logged in, of course the can all be edited later by each user if you don't like the names.

i made sure Components were reusable so i didn't have to build as much many components as i should have from scratch.

All useEffects have a dependency Array, and some useEffects only run after a value has been gotten.
## Deployment

To deploy this project run

```bash
  npm run dev
```


## 🛠 Skills
Javascript, HTML, CSS...

React, Next Js, Typescript, Vue js...

Styled Components, Sass , Tailwind

Node Js, Express, MongoDb...

Firebase.
## Lessons Learned and problems faced


The challenges were a lot which is expected considering the scale of what i was attempting to replicate and some of them i'd probably never get their solutions but here are some challenges i faced and lessons i learnt the hard way.

My first lesson was when working on the user registration, So since i'm using Firebase to handle both my users sign-up and login, firebase creates an Id for each user, Then that id is stored on a cookie and sent to mongoDbB but then this created problems on implementing features later, for instance while trying to create relationships between tweets and the user, i discovered firebase Id was too long for mongoDB (mongoDB only accepts a 24 string hexadecimal or a 12 number integer) so my 28 long _id from firebase couldn't work and i had to find another means of generating a working mongoDb id for both my past and present users so i could tie my tweets and users together, problem with this was, The function that adds a mongoDB id for all users keeps running with every Api call made(And i cannot remove it because once i do mongoDb won't generate an id for users anymore since there is an _id already), so basically id's were always changing which made it pointless to use, So i had to resort to using each users username and making it unique so that two users can't have the same username(My bad). But it was the only thing i could think to do without wasting time, So if you face some issues with somethings, This is largely the reason, other solutions or ideas are welcome too.

If you notice a flash before any page loads the problem is the incompatibility of Next Js and Styled components, Apparently Styled components is not a good styling option for Next js Since they both load pages differently, So for any future projects using Next js as I've learned the hard way isn't an option, either i just use Css, Sass or Tailwind for now.

Since Twitter closed down their API i had to find other solutions and think up ideas on what to adjust, Like Trends and hashtags, since, i couldn't do a proper trends so i used a news Api has a better alternative of getting useful up-to-date data than to manually typing all of the trends, This way if anything users can see headlines of news events around the world and i don't have to constantly manually update the text since it's news.

Creating Relationships and Synchronizing data across both the users their tweets and even the messaging is still a problem i'm working on solving.

Making all the comments reply-able" is something i'm working on learning.

Getting all a users likes, and all their replies is still something i'm figuring out.

Showing only your followers post is something i would like to work on later, The general idea of it is to find only the tweets with the username of only the people in your following.

Getting Specific recommendations based on your likes and retweets.

Like i said the challenges are numerous but the lessons to be Learned and potential experiences to be gained makes it all worth it.

Recording the number of views and storing them is another big challenge since i'd need to make it real-time and update when somebody views it and still find a way to still make the whole thing optimized so since i can't manually assign views i wrote a function that manually assigns views based on all the total registered number of users for each post.

The cookie might not save on mobile devices but works excellently well for systems.

Another problem users would face is in messaging, Since firebase handles real-time messaging and mongoDb is my actual database, if you change your name it would change on mongoDb but it doesn't change on firestore, so other users would have to search you by your original name.
## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

