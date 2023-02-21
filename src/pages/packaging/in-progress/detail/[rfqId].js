import AuthRoute from "@/middleware/AuthRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as commonConfig from "src/config/common";
import define from "src/config/config";
import * as containers from "src/containers";
import { CommonTemplate } from "src/containers/template";
import Wrapper from "src/containers/wrapper";
import * as estimateActions from "src/store/estimate.store";
import * as commonUtils from "src/utils/commonUtils";

const PackagingInProgressDetail = () => {
  const { uid, role } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const isLogin = commonUtils.isLogin(uid);
  const isBuyer = commonUtils.checkBuyerType(role);
  useEffect(() => {
    return () => {
      dispatch(estimateActions.initial());
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
          <containers.PackagingInProgressDetailContainer />
        </CommonTemplate>
      </Wrapper>
    </AuthRoute>
  );
};

export default PackagingInProgressDetail;
