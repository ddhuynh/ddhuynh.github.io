// This file is a component which takes a string + delay, and forces that string to appear with a given delay.
import { useState, useEffect } from "react";

interface TextDelayInfo
{
  text: string;
  delay: number;
}

export default function FadeText({text, delay}: TextDelayInfo)
{
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className={visible ? "fadeText" : "fadeTextHidden"}>
      {text}
    </span>
  )
}
