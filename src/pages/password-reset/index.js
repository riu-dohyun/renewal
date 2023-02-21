import AuthRoute from "@/middleware/AuthRoute";
import { useSelector } from "react-redux";
import define from "src/config/config";
import * as containers from "src/containers";
import { AuthTemplate } from "src/containers/template";
import Wrapper from "src/containers/wrapper";
import * as commonUtils from "src/utils/commonUtils";

const PasswordReset = () => {
  const { uid } = useSelector(state => state.user);
  const isLogin = commonUtils.isLogin(uid);
  return (
    <AuthRoute isAllowed={isLogin}>
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
          <containers.PasswordResetContainer />
        </AuthTemplate>
      </Wrapper>
    </AuthRoute>
  );
};

export default PasswordReset;
