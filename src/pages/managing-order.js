import AuthRoute from "@/middleware/AuthRoute";
import { useSelector } from "react-redux";
import * as commonConfig from "src/config/common";
import define from "src/config/config";
import * as containers from "src/containers";
import { CommonTemplate } from "src/containers/template";
import Wrapper from "src/containers/wrapper";
import * as commonUtils from "src/utils/commonUtils";

const ManagingOrder = () => {
  const { uid, role } = useSelector(state => state.user);
  const isLogin = commonUtils.isLogin(uid);
  const isBuyer = commonUtils.checkBuyerType(role);
  return (
    <AuthRoute isAllowed={isLogin && isBuyer}>
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
          Header={<containers.HeaderContainer />}
          // Footer={<containers.FooterContainer />}
          type={commonConfig.userType.buyer}
          notPadding={true}
        >
          <containers.ManagingOrderContainer />
        </CommonTemplate>
      </Wrapper>
    </AuthRoute>
  );
};

export default ManagingOrder;
