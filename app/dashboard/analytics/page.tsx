import { Table } from "@/components/ui/table";
import React from "react";

export default async function Page() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => json);

  return (
    <div>
      <Table />
    </div>
  );
}
