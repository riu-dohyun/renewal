import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as commonConfig from "src/config/common";
import define from "src/config/config";
import * as containers from "src/containers";
import { CommonTemplate } from "src/containers/template";
import Wrapper from "src/containers/wrapper";
import * as commonActions from "src/store/common.store";

const PackagingList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(commonActions.initPage());
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
        notPadding={true}
        isContent={true}
      >
        <containers.PackagingListContainer />
      </CommonTemplate>
    </Wrapper>
  );
};

export default PackagingList;
