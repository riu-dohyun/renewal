import PropTypes from "prop-types";
import * as commonConfig from "src/config/common";
import { styledConfig } from "src/config/styled.config";
import { commonStyle } from "src/styles/CommonStyle";
import { mixins } from "src/styles/MixinStyled";
import styled, { css } from "styled-components";

const Styled = {
  Buttons: styled.button`
    border-radius: 5px;
    * {
      font-size: 15.5px;
    }
    ${props =>
      props.styles === styledConfig.ButtonType.borderWrap &&
      css`
        ${mixins.flexCenter};
        border: 1px solid ${commonStyle.color.blackGray};
      `}
    ${props =>
      props.styles === styledConfig.ButtonType.borderMainColorRoundInEndIcon &&
      css`
        ${mixins.flexCenter}
        background-color: ${commonStyle.color.white};
        border: 1px solid ${commonStyle.color.signature};
        * {
          color: ${commonStyle.color.signature};
          font-size: 15.5px;
          font-weight: 500;
        }

        svg {
          margin-left: 5px;
          margin-top: 2px;
          width: 20px;
        }
        :focus,
        :active {
          box-shadow: rgba(255, 138, 0, 0.15) 0px 15px 25px,
            rgba(255, 138, 0, 0.05) 0px 5px 10px;
        }
      `}
    ${props =>
      props.styles === styledConfig.ButtonType.bgMainColorRound &&
      css`
        width: 100%;
        padding: 10px 0;
        background-color: ${commonStyle.color.signature};

        span {
          color: ${commonStyle.color.white};
        }
      `}
    ${props =>
      props.styles === styledConfig.ButtonType.bgMainColorRoundMove &&
      css`
        transition: all 0.2s;
        background-color: ${!props.disabled
          ? commonStyle.color.signature
          : commonStyle.color.lightGray};
        border-radius: 40px;
        padding: 6px 8px 6px 12px;
        box-shadow: ${!props.disabled
          ? `rgba(255, 138, 0, 0.15) 0px 15px 25px,
          rgba(255, 138, 0, 0.05) 0px 5px 10px;`
          : `rgba(138, 137, 129, 0.15) 0px 15px 25px,
          rgba(138, 137, 129, 0.05) 0px 5px 10px;`};

        .basic-button-content {
          ${mixins.flexCenter};

          span {
            font-size: 17.5px;
            transition: all 0.2s;
            color: ${!props.disabled
              ? commonStyle.color.white
              : commonStyle.color.blackGray};
          }

          .text {
            padding: 0 15px;
          }

          .icon {
            position: relative;
            width: 27px;
            height: 27px;
            background-color: ${commonStyle.color.white};
            border-radius: 50%;

            svg {
              ${mixins.positionCenter}
              left: calc(50%);
            }
            path {
              transition: all 0.2s;
              color: ${!props.disabled
                ? commonStyle.color.signature
                : commonStyle.color.darkGray};
            }
          }
        }
      `}
  `,
};

const BasicButton = props => {
  const {
    className,
    onClick,
    dataType,
    content = null,
    endIcon = null,
    disabled = false,
    type = "button",
    styles,
  } = props;
  const setClassName = `${commonConfig.defaultClass.BasicLink} ${
    className ? className : ""
  }`;

  return (
    <Styled.Buttons
      endIcon={endIcon}
      className={setClassName}
      onClick={onClick}
      data-type={dataType}
      disabled={disabled}
      type={type}
      styles={styles}
    >
      {content && <span className="basic-button-content">{content}</span>}
      {endIcon && <span>{endIcon}</span>}
    </Styled.Buttons>
  );
};

BasicButton.propTypes = {
  className: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onClick: PropTypes.func.isRequired,
};

export default BasicButton;
