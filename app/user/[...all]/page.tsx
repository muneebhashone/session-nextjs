import React from "react";

const Page = (props) => {
  console.log({ props });
  return <div>Catch All {JSON.stringify(props)}</div>;
};

export default Page;
