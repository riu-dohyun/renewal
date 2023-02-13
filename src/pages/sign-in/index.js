import define from "src/config/config";
import * as containers from "src/containers";
import { AuthTemplate } from "src/containers/template";
import Wrapper from "src/containers/wrapper";

const SignIn = () => {
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
      <AuthTemplate
        Header={<containers.HeaderContainer />}
        Footer={<containers.FooterContainer />}
      >
        <containers.SignInContainer />
      </AuthTemplate>
    </Wrapper>
  );
};

export default SignIn;
