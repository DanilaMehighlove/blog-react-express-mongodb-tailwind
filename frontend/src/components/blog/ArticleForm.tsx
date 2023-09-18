import { Button, Input, Textarea } from "../form-elements";

export function ArticleForm() {

  return(
    <div className="flex w-full h-full flex-col gap-y-4 pt-4 pb-4">
      <div className="w-full flex flex-col">
        <h4>Title</h4>
        <Input />
      </div>
      <div className="w-full flex flex-col">
        <h4>Text</h4>
        <Textarea />
      </div>
      <div className="self-start">
        <Button text="Create" />
      </div>
    </div>
  );
}