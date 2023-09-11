interface IButton {
  text?: string;
}

export function Button({text}: IButton) {

  return (
    <button className="border-double border-4 border-green-800 rounded-md p-1 pr-5 pl-5">{text}</button>
  );
}