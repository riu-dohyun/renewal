import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import define from "src/config/config";
import * as Containers from "src/containers";
import Footer from "src/containers/footer/FooterContainer";
import Header from "src/containers/header/HeaderContainer";
import { CommonTemplate } from "src/containers/template";
import Wrapper from "src/containers/wrapper";

const Home = () => {
  const { nextLoading } = useSelector(state => state.common);

  useEffect(() => {
    if (nextLoading) {
      console.log("nextLoading true!@!!", nextLoading);
    } else {
      console.log("nextLoading false!!@!!", nextLoading);
    }
  }, [nextLoading]);
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <Wrapper
      title={define.title}
      meta={[
        {
          property: "og:title",
          content: define.title,
        },
      ]}
    >
      <CommonTemplate Header={<Header />} Footer={<Footer />}>
        <Containers.HomeContainer />
      </CommonTemplate>
    </Wrapper>
  );
};

export default Home;
