import { Suspense } from "react";
import { create, formAction } from "../actions";
import UserServer from "./user-server";

const Page = async () => {
  const user = await create();
  return (
    <div>
      This is server component
      <div>
        {Array.from({ length: 6 }).map((_, index) => {
          return (
            <Suspense fallback={<div>Loading...</div>} key={index}>
              <UserServer key={index} index={index} />
            </Suspense>
          );
        })}
      </div>
      <form action={formAction}>
        <input type="text" name="my-value" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Page;
