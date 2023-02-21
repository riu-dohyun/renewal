import AuthRoute from "@/middleware/AuthRoute";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import * as commonConfig from "src/config/common";
import define from "src/config/config";
import * as containers from "src/containers";
import { CommonTemplate } from "src/containers/template";
import Wrapper from "src/containers/wrapper";
import * as commonUtils from "src/utils/commonUtils";

const QuoteView = () => {
  const { uid, role } = useSelector(state => state.user);
  const isLogin = commonUtils.isLogin(uid);
  const isSupplier = commonUtils.checkSupplierType(role);
  return (
    <AuthRoute isAllowed={isLogin && isSupplier}>
      <Suspense fallback={<containers.SpinnerContainer />}>
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
            type={commonConfig.userType.supplier}
            isContent={true}
          >
            <containers.QuoteViewContainer />
          </CommonTemplate>
        </Wrapper>
      </Suspense>
    </AuthRoute>
  );
};

export default QuoteView;
