import { sleep } from "@/lib/utils";
import React from "react";

const page = async () => {
  await sleep(2000);
  return <div>Homepage</div>;
};

export default page;
