import React from "react";

import { PICKER_FORMAT } from "@components/Periods";

import ReactDatePicker from "react-datepicker";

const Picker = ({ date, onChange, className = "" }: any) => {
  return (
    <ReactDatePicker
      dateFormat={PICKER_FORMAT}
      selected={date ? new Date(date) : null}
      onChange={onChange}
      className={className}
    />
  );
};

export default Picker;
