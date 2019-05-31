import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SectionHeaderWrapper = styled.div`
  h3,
  h4 {
    margin: 0;
  }

  margin-top: 30px;
  margin-bottom: 20px;
  text-align: left;

  .section-main-header {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.5;
    color: #3e3e3e;
  }

  .section-subheader {
    font-size: 13px;
    font-weight: 500;
    line-height: 1.2;

    color: #696969;
  }
`;

const SectionHeader = props => (
  <SectionHeaderWrapper>
    <h3 className="section-main-header">{props.header}</h3>
    <h4 className="section-subheader">{props.subHeader}</h4>
  </SectionHeaderWrapper>
);

SectionHeader.propTypes = {
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string.isRequired
};

export default SectionHeader;
