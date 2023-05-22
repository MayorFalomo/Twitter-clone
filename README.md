
# Tweeks

Tweeks is a full MERN Stack project and Twitter clone with both Backend and Frontend functionalities, The idea was to create something very similar to twitter in terms of both looks and at least some of it's functionalities.
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

I avoided making too many API Calls and instead used context to pass my data through out my application so the data is always readily available for users instead of requesting that same information from the server again.

I stored each users information on a cookie that way, the users login and information is better secured and persists instead of using Local storage.

When registering, I added a auto generate username, email and password functionality, so users can register with ease at a click of buttons, plus they don't have to remember all this info since it's all stored on a cookie that makes sure they are always logged in, of course the can all be edited later by each user if you don't like the names.

i made sure Components were reusable so i didn't have to build as much many components as i should have from scratch.

All useEffects have a dependency Array, so there's no chance of your browser crashing from too many repeated API calls.
## Deployment

To deploy this project run

```bash
  npm run dev
```


## Features

- Real-time messaging (pictures and videos included).
- Follow and Unfollow other users.
- commenting on a tweet and replying comments.
- Like, Retweet and Quote tweets.
- Bookmark a tweet
- Edit your profile
- View other peoples profiles
- Posting Tweets, pictures and videos.
- Get a verified badge if you get up to 5 followers.
## 🛠 Skills
Javascript, HTML, CSS...

React, Next Js, Typescript, Vue js...

Styled Components, Sass , Tailwind

Node Js, Express, MongoDb...

Firebase.
## Lessons Learned


The challenges were numerous which is expected considering the scale of what i'm attempting to replicate and some of them i'd probably never get their solutions.

Since Twitter closed down their API i had to find other solutions and think up ideas on what to adjust, Like Trends and hashtags, since, i couldn't do a proper trends i used a news Api has a better alternative of getting useful up-to-date data than to manually typing all of the trends, This way if anything users can see headlines of news events around the world and i have my data without manually typing all of that.

Creating Relationships and Synchronizing data across both the users their tweets and even the messaging is still a problem i'm working on solving.

Making all the comments reply-able is something i'm working on learning.

Getting all a users likes, and all their replies is still something i'm figuring out.

Showing only your followers post is still another part i'm figuring out moving forward.

Getting Specific recommendations based on your likes and retweets.

Like i said the challenges are numerous but the lessons to be Learned and potential experiences to be gained makes it all worth it.

recording the number of views and storing them is another big challenge since i'd need to make it real-time and update when somebody views it and still find a way to still make the whole thing optimized.
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

