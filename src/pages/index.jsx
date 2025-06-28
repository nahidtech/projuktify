import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "@library/posts";

import AboutSection from "@components/sections/About";
import AboutTwoSection from "@components/sections/AboutTwo";
import HeroOneSection from "@components/sections/HeroOne";
import ServicesSection from "@components/sections/Services";
import SubscribeSection from "@components/sections/Subscribe";
import VideoSection from "@components/sections/Video";

const TestimonialSlider = dynamic(
  () => import("@components/sliders/Testimonial"),
  { ssr: false }
);

const Home1 = (props) => {
  return (
    <Layouts transparent>
      <HeroOneSection />
      <AboutSection />
      <ServicesSection />
      <AboutTwoSection />
      {/*<TeamSection /> */}
      <VideoSection />
      <TestimonialSlider />
      {/* <LatestPostsSection posts={props.posts} /> */}
      <SubscribeSection />
    </Layouts>
  );
};
export default Home1;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();

  return {
    props: {
      posts: allPosts,
    },
  };
}
