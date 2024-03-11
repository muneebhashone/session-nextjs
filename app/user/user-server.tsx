import React, { useEffect, useState } from "react";
import { create } from "../actions";

const UserServer = async ({ index }: { index: number }) => {
  let user: any;

  try {
    user = await create(1000 * (index + 1));
  } catch (err) {
    user = err.message;

    return <div>{err.message}</div>;
  }
  return (
    <div>
      <div>
        {JSON.stringify(user)} {index}
      </div>
    </div>
  );
};

export default UserServer;
