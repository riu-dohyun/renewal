import AuthRoute from "@/middleware/AuthRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as commonConfig from "src/config/common";
import define from "src/config/config";
import * as containers from "src/containers";
import { CommonTemplate } from "src/containers/template";
import Wrapper from "src/containers/wrapper";
import * as noPersistCommonActions from "src/store/noPersistCommon.store";
import * as commonUtils from "src/utils/commonUtils";

const MyAccount = () => {
  const dispatch = useDispatch();
  const { uid } = useSelector(state => state.user);
  const isLogin = commonUtils.isLogin(uid);
  useEffect(() => {
    return () => {
      dispatch(noPersistCommonActions.initChangeEmail());
      dispatch(noPersistCommonActions.initMyAccountAccessCheck());
    };
  }, []);
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
        <CommonTemplate
          Header={<containers.HeaderContainer />}
          // Footer={<containers.FooterContainer />}
          type={commonConfig.userType.buyer}
        >
          <containers.MyAccountContainer />
        </CommonTemplate>
      </Wrapper>
    </AuthRoute>
  );
};

export default MyAccount;
