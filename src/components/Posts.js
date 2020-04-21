import React from 'react';
import styled from 'styled-components';

const Posts = () => {
  return (
    <StyledPosts>
      <PostsHeading>Check our social media and share!</PostsHeading>
      <PostsInner>
        <div
          class="fb-page"
          data-href="https://www.facebook.com/topicplatform/"
          data-tabs="timeline"
          data-width="350"
          data-height="600"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/topicplatform/"
            class="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/topicplatform/">Topic</a>
          </blockquote>
        </div>
        <a
          class="twitter-timeline"
          data-lang="en"
          data-width="350"
          data-height="600"
          data-theme="light"
          href="https://twitter.com/topicplatform?ref_src=twsrc%5Etfw"
        >
          Tweets by topicplatform
        </a>
      </PostsInner>
    </StyledPosts>
  );
};

export default Posts;

const StyledPosts = styled.div`
  width: 100%;
  margin-top: 100px;
`;
const PostsHeading = styled.p`
  margin: 0 auto;
  text-align: center;
  width: 90%;
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 50px;
`;
const PostsInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .fb-page {
    width: 350px;
    margin-bottom: 50px;

    @media (min-width: 800px) {
      margin-bottom: 0;
    }
  }

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
`;
