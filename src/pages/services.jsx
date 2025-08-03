import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";

import { getSortedServicesData } from "@library/services";

import CallToActionSection from "@components/sections/CallToAction";

import Link from "next/link";

const Services = (props) => {
  const Content = {
    title: "Our top-quality services",
    subtitle: "Services",
    description1:
      "At Projuktify, we don’t just offer digital services we create meaningful experiences that help your brand thrive in a fast-changing digital world. From custom-built websites to automated systems and compelling brand visuals, our team blends strategy, creativity, and technology to deliver solutions that drive real business results.",
    description2:
      "We design responsive websites, intuitive apps, and high-converting eCommerce platforms tailored to your users. But our work goes far beyond development. We help you define your identity, communicate your value, and build lasting connections with your audience through thoughtful design and smart marketing. Whether you're a startup taking your first digital step or a growing business ready to scale with automation, content, and SEO — Projuktify is your all-in-one digital partner, committed to making your vision a reality.",
  };

  return (
    <Layouts>
      <PageBanner pageImage={"img/content/13.jpg"} pageTitle={"Services"} />

      {/* services */}
      <div className="container mil-content-frame mil-appearance mil-p-120-90">
        <div className="row justify-content-between">
          <div className="col-lg-4 mil-mb-120">
            <span className="mil-link mil-softened-60 mil-appearance mil-mb-30">
              {Content.subtitle}
            </span>
            <h3 className="mil-appearance mil-mb-30">{Content.title}</h3>

            <p className="mil-appearance mil-mb-30">{Content.description1}</p>
            <p className="mil-appearance mil-mb-30">{Content.description2}</p>

            <div className="mil-deco mil-appearance"></div>
          </div>
          <div className="col-lg-7">
            <div className="row">
              {props.services.map((item, key) => (
                <div
                  className="col-xl-6 col-lg-12"
                  key={`services-item-${key}`}
                >
                  {/* service card */}
                  <Link
                    href={`/services/${item.id}`}
                    className="mil-service-card mil-appearance mil-icon-2-trigger mil-mb-30"
                  >
                    <div className="mil-card-content">
                      {/* icon */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="mil-card-icon"
                      />
                      <div>
                        {/* text */}
                        <h5 className="mil-mb-10">{item.title}</h5>
                        <p className="mil-softened-40">{item.short}</p>
                      </div>
                    </div>
                  </Link>
                  {/* service card end */}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5"></div>
          <div className="col-lg-7"></div>
        </div>
      </div>
      {/* services end */}

      {/* <PricingSection /> */}
      <CallToActionSection />
    </Layouts>
  );
};
export default Services;

export async function getStaticProps() {
  const allServices = getSortedServicesData();

  return {
    props: {
      services: allServices,
    },
  };
}
