import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "UOG ChatHub",
  description = "Full Stack Group Chat App (UOG ChatHub)",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
