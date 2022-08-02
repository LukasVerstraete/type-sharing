import { ReactElement } from "react";

export type HeaderProps = {
  name: string;
};

export function Header(props: HeaderProps): ReactElement {
  const { name } = props;

  return (
    <div className="sticky top-0 bg-purple-100 p-2 flex justify-between align-center">
      <h1 className="text-lg m-0 leading-1">CraxIT - {name}</h1>
      <div className="flex gap-3">
        <button className="py-2 px-3 bg-purple-200 rounded-md hover:bg-purple-300">
          test
        </button>
        <button className="py-2 px-3 bg-purple-200 rounded-md hover:bg-purple-300">
          test 2
        </button>
        <button className="py-2 px-3 bg-purple-200 rounded-md hover:bg-purple-300">
          test 3
        </button>
      </div>
    </div>
  );
}
