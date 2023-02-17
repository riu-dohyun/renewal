import define from "src/config/config";
import * as containers from "src/containers";
import { AuthTemplate } from "src/containers/template";
import Wrapper from "src/containers/wrapper";

const SignUp = () => {
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
        <containers.SignUpContainer />
      </AuthTemplate>
    </Wrapper>
  );
};

export default SignUp;
