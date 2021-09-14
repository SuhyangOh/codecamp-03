import { Rate } from "antd";
import { useState } from "react";

export default function RatePage() {
  const [value, setValue] = useState(3);

  function handleChange(value: number) {
    setValue(value);
    alert(value + "점");
  }
  return (
    <div>
      <Rate onChange={handleChange} value={value} />
      <br />
      <div>{value && value}점</div>
    </div>
  );
}
