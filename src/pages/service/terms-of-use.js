import define from "src/config/config";
import * as Containers from "src/containers";
import { CommonTemplate } from "src/containers/template";
import Wrapper from "src/containers/wrapper";

const TermsOfUse = () => {
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
      <CommonTemplate
        Header={<Containers.HeaderContainer />}
        Footer={<Containers.FooterContainer />}
      >
        <Containers.TermsOfUseContainer />
      </CommonTemplate>
    </Wrapper>
  );
};

export default TermsOfUse;
