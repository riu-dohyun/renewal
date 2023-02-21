import AuthRoute from "@/middleware/AuthRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as commonConfig from "src/config/common";
import define from "src/config/config";
import * as containers from "src/containers";
import { CommonTemplate } from "src/containers/template";
import Wrapper from "src/containers/wrapper";
import * as packagingActions from "src/store/packaging.store";
import * as commonUtils from "src/utils/commonUtils";

const PackagingRequest = () => {
  const { uid, role } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const isLogin = commonUtils.isLogin(uid);
  const isBuyer = commonUtils.checkBuyerType(role);
  useEffect(() => {
    return () => {
      dispatch(packagingActions.initPackagingRequestSelectedItem());
    };
  }, []);
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
          isContent={true}
        >
          <containers.PackagingRequestContainer />
        </CommonTemplate>
      </Wrapper>
    </AuthRoute>
  );
};

export default PackagingRequest;
