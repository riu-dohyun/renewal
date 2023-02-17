import * as commonConfig from "src/config/common";
import define from "src/config/config";
import * as containers from "src/containers";
import { CommonTemplate } from "src/containers/template";
import Wrapper from "src/containers/wrapper";

const ManagingOrder = () => {
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
      >
        <containers.ManagingOrderContainer />
      </CommonTemplate>
    </Wrapper>
  );
};

export default ManagingOrder;
