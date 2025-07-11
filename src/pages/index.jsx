import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "@library/posts";
import { getSortedProjectsData } from "@library/projects";
import { getSortedServicesData } from "@library/services";

import AboutThreeSection from "@components/sections/AboutThree";
import CountersSection from "@components/sections/Counters";
import HeroTwoSection from "@components/sections/HeroTwo";
import LatestPostsSection from "@components/sections/LatestPosts";
import ServicesTwoSection from "@components/sections/ServicesTwo";
import SubscribeSection from "@components/sections/Subscribe";
import CallToActionSection from "../components/sections/CallToAction";

const TestimonialSlider = dynamic(
  () => import("@components/sliders/Testimonial"),
  { ssr: false }
);
const PartnersSlider = dynamic(() => import("@components/sliders/Partners"), {
  ssr: false,
});

const Home2 = (props) => {
  return (
    <Layouts invert footerBg={"img/content/10.jpg"} footerInst>
      <HeroTwoSection />
      <AboutThreeSection />
      <CountersSection />
      <ServicesTwoSection services={props.services} />
      {/* <ProjectsSection projects={props.projects} /> */}
      <PartnersSlider />
      <TestimonialSlider />
      <CallToActionSection />
      <LatestPostsSection posts={props.posts} layout={2} />
      <SubscribeSection />
    </Layouts>
  );
};
export default Home2;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  const allServices = getSortedServicesData();
  const allProjects = getSortedProjectsData();

  return {
    props: {
      posts: allPosts,
      services: allServices,
      projects: allProjects,
    },
  };
}
