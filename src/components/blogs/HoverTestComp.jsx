import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
// import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { Container as ContainerBase, ContentWithPaddingXl as ContentBase } from "components/misc/Layouts.js";
import TrainingIcon from "images/Training.svg"
import MatchIcon from "images/Match.svg"
import TeamIcon from "images/Team.svg"




const Row = tw.div`flex flex-col lg:flex-row -mb-10 justify-center`;
const Heading = tw(SectionHeading)`text-left lg:text-4xl xl:text-5xl`;

// const PopularPostsContainer = tw.div`lg:w-3/4`;
const PostsContainer = tw.div`mt-12 flex flex-col sm:flex-row sm:justify-between lg:justify-center`;
const Post = tw(motion.a)`block sm:max-w-sm cursor-pointer mb-32 last:mb-0 sm:mb-0 sm:odd:mr-8 lg:mr-8 xl:mr-16`;
const Image = styled(motion.div)(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-64 w-64 bg-cover bg-center rounded bg-green-900`
]);
const Title = tw.h5`mt-6 text-xl font-bold transition duration-300 group-hover:text-primary-500 text-white text-center`;

const Container = tw(ContainerBase)`bg-green-900 text-gray-100 -mx-8 px-8`;
const ContentWithPaddingXl = tw(
  ContentBase
)`relative z-10 mx-auto px-0 py-10 sm:px-6 md:px-8 lg:px-12 xl:px-24 sm:py-20 flex flex-col max-w-screen-xl`;

const PopularPostsContainer = tw.div` flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-between text-gray-900 font-medium`;
// const Post = styled.div`
//   ${tw`w-full max-w-sm bg-white rounded-lg shadow-sm py-10 px-6 sm:px-10 lg:px-6 lg:py-10 xl:p-10 mx-3 flex flex-col justify-between mt-16 first:mt-0 lg:mt-0 shadow-raised`}
// `;


export default () => {
  // This setting is for animating the post background image on hover
  const postBackgroundSizeAnimation = {
    rest: {
      backgroundSize: "100%"
    },
    hover: {
      backgroundSize: "110%"
    }
  };

  //Recommended: Only 2 Items
  const popularPosts = [
    {
      postImageSrc: TrainingIcon,
      title: "Träning",
      url: "http://localhost:3000/training"
    },
    {
      postImageSrc: MatchIcon,
      title: "Match",
      url: "https://reddit.com"
    },
    {
      postImageSrc: TeamIcon,
      title: "Spelartrupp",
      url: "https://reddit.com"
    }
  ];

  return (
    <Container>
      <ContentWithPaddingXl>
        <Row>
          <PopularPostsContainer>
            <Heading></Heading>
            <PostsContainer>
              {popularPosts.map((post, index) => (
                <Post key={index} href={post.url} className="group" initial="rest" whileHover="hover" animate="rest">
                  <Image
                    transition={{ duration: 0.3 }}
                    variants={postBackgroundSizeAnimation}
                    imageSrc={post.postImageSrc}
                  />
                  <Title>{post.title}</Title>
                </Post>
              ))}
            </PostsContainer>
          </PopularPostsContainer>
        </Row>
      </ContentWithPaddingXl>
    </Container>
  );
};
