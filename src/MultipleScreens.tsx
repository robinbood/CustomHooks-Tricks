import { useState } from "react";

/*So due to the single threaded nature of javascript  and countering  the race of tasks first it executes one ater another*/

const App = () => {
  const [one, setOne] = useState<boolean>(true);
  const [two, setTwo] = useState<boolean>(false);

  const handler = () => {
    setTwo(true);
    setOne(false);
  };
  const handler2 = () => {
    setTwo(false);
  };
  return (
    <div>
      <Screen1 onAhead={handler} />
      <Screen2 onAhead={handler2} />
    </div>
  );
};

type ScreenProps = {
  onAhead: () => void;
};

export const Screen1 = ({ onAhead }: ScreenProps) => {
  return (
    <>
      <div>
        <button onClick={onAhead}>Go Ahead</button>
      </div>
    </>
  );
};

export const Screen2 = ({ onAhead }: ScreenProps) => {
  return (
    <>
      <div>
        <button onClick={onAhead}>Go Ahead</button>
      </div>
    </>
  );
};