import { Calendar } from "antd";
import { useState } from "react";

export default function CalendarPage() {
  const [dateValue, setDateValue] = useState("");
  const [monthValue, setMonthValue] = useState("");

  function onSelect(value) {
    setDateValue(value.format("YYYY-MM-DD"));
    setMonthValue(value.format("MM"));
  }

  return (
    <div>
      <Calendar onSelect={onSelect} />
      {dateValue && dateValue}
      <br />
      {monthValue && monthValue + "월"}
    </div>
  );
}
