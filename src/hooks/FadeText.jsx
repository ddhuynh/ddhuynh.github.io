import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

export default function FadeText({text, delay})
{
  const [visible, setVisible] = useState(false);

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

FadeText.propTypes = {
  text: PropTypes.string,
  delay: PropTypes.number
}
