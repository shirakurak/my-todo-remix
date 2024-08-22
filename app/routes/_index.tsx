import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const action = async ({request}: ActionFunctionArgs) => {
  const formData = await request.formData();
  // console.log(formData)

  const todo = formData.get("todo")
  // console.log(todo)
  return null
}

export default function Index() {
  return (
    <Form method="post">
      <input type="text" name="todo"></input>
      <button>ボタン</button>
    </Form>
  );
}
