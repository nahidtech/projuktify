import { useEffect } from "react";
import { navigation } from "../common/navigation";
import { scrollAnimation } from "../common/scrollAnims";
import { formInputs } from "../common/utilits";

import Cursor from "./cursor/Index";
import Footer from "./footers/Index";
import Header from "./headers/Index";

const Layouts = ({
  children,
  header,
  footer,
  noHeader,
  noFooter,
  footerBg,
  footerInst,
  transparent,
  invert,
  extraClass,
}) => {
  useEffect(() => {
    scrollAnimation();
    navigation();
    formInputs();
  }, []);

  return (
    <div id="smooth-wrapper" className="mil-wrapper">
      <Cursor />

      {!noHeader && (
        <Header
          layout={header}
          transparent={transparent}
          invert={invert}
          extraClass={extraClass}
        />
      )}

      <div id="swupMain" className="mil-main-transition">
        <div id="smooth-content" className="mil-content">
          {children}
        </div>
      </div>

      {!noFooter && (
        <Footer layout={footer} bg={footerBg} instagram={footerInst} />
      )}
    </div>
  );
};
export default Layouts;
