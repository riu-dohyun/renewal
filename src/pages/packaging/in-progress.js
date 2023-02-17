import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as commonConfig from "src/config/common";
import define from "src/config/config";
import * as containers from "src/containers";
import { CommonTemplate } from "src/containers/template";
import Wrapper from "src/containers/wrapper";
import * as estimateActions from "src/store/estimate.store";

const PackagingInProgress = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(estimateActions.initial());
    };
  }, []);
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
        Header={<containers.HeaderContainer />}
        // Footer={<containers.FooterContainer />}
        type={commonConfig.userType.buyer}
        isContent={true}
      >
        <containers.PackagingInProgressContainer />
      </CommonTemplate>
    </Wrapper>
  );
};

export default PackagingInProgress;
