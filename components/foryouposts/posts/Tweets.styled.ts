import styled from "styled-components";

export const TweetsContainer = styled.div`
.postsContainer{
display: flex;
align-items: flex-start;
gap: 10px;
.profilePicture{
    background-color: black;
    border: 1px white solid;
    width: 70px;
    height: 70px;
    border-radius:50%;
}
.subPostsContainer{
    /* display: flex;
    align-items: flex-start;
    gap: 20px; */
    border: 2px red solid;
    width: 100%;

.flexTweetProfileDetails{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        border: 2px yellow solid;
        padding: 10px;
        .tweetProfileDetails{
            display: flex;
            align-items: center;
            gap: 10px;
        }
    }
    .tweet-caption{
        font-size: 22px;
    }
}
}
`