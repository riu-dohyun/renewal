import define from "src/config/config";
import * as Containers from "src/containers";
import { CommonTemplate } from "src/containers/template";
import Wrapper from "src/containers/wrapper";

const PrivacyPolicy = () => {
  return (
    <Wrapper
      title="privacy policy"
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
        <Containers.PrivacyPolicyContainer />
      </CommonTemplate>
    </Wrapper>
  );
};

export default PrivacyPolicy;
