import React, { useState, useEffect } from "react";
import Select from "./Select";
import moment from "moment";

import { useHelpers } from "@hooks/helpers";

import DatePicker, { registerLocale } from "react-datepicker";
import { enGB } from "date-fns/esm/locale";

export const PICKER_FORMAT = "MMM dd, yyyy";
export const API_FORMAT = "YYYY-MM-DD";

export const DEFAULT_MAX_DAY = (date: string) => {
  return moment(date || new Date()).format(API_FORMAT);
};
export const DEFAULT_MIN_DAY = (type: string) => {
  let day = moment().get("date");
  let isClose = day > 3;
  let condition = type === "last 6" ? (isClose ? 6 : 7) : isClose ? 3 : 4;

  return moment()
    .subtract(condition, "month")
    .set("date", 1)
    .format(API_FORMAT);
};

export const LAST_MAX_DATE = () => {
  let day = moment().get("date");
  let isClose = day > 3;
  let maxMonth = moment().subtract(isClose ? 1 : 2, "month");
  return moment(maxMonth)
    .set("date", maxMonth.daysInMonth())
    .format(API_FORMAT);
};

interface PeriodsProps {
  onPeriodChange(data: object, name: string): void;
  period: { from: any; to: any };
  filters?: { from: any; to: any };
  page?: string;
  maxDate?: any;
  custom?: boolean;
}

const Periods: React.FC<PeriodsProps> = ({
  onPeriodChange,
  period,
  page,
  maxDate,
  custom = false,
}) => {
  const { localStorageGetItem } = useHelpers();

  const [options, setOptions] = useState([
    {
      name: "Last 7 days",
      value: "6",
    },
    {
      name: "Last 28 days",
      value: "27",
    },
    {
      name: "Last 3 months",
      value: "89",
      type: "last 3",
    },
    {
      name: "Last 6 months",
      value: "180",
      type: "last 6",
    },
    {
      name: "Last 365 days",
      value: "365",
    },
    {
      name: "Lifetime",
      value: "life",
      type: "life",
      borderBottom: true,
    },
    {
      name: "2020",
      value: "2020",
      type: "year",
    },
    {
      name: "2019",
      value: "2019",
      type: "year",
      borderBottom: true,
    },
  ]);

  const [isCustom, setCustom] = useState(false);
  const [picker, setPicker] = useState({
    start: period.from ? new Date(period.from) : new Date(),
    end: period.to ? new Date(period.to) : new Date(),
  });

  const handlePickerChange = (date: any, type: string) => {
    setPicker({
      ...picker,
      [type]: new Date(date),
    });

    onPeriodChange(
      {
        ...period,
        [type === "start" ? "from" : "to"]: moment(date).format(API_FORMAT),
      },
      "custom"
    );
  };

  const handleSelectChange = ({ value, type }: any) => {
    if (type === "custom") {
      const from =
        localStorageGetItem("period").from || DEFAULT_MIN_DAY(maxDate);
      const to = localStorageGetItem("period").to || DEFAULT_MAX_DAY(maxDate);

      setPicker({
        start: new Date(from),
        end: new Date(to),
      });

      onPeriodChange({ from, to }, "custom");
      setCustom(true);
      return;
    }

    let from = moment(maxDate)
      .subtract(Number(value), "days")
      .format(API_FORMAT);
    let to = DEFAULT_MAX_DAY(maxDate);

    if (type === "year") {
      const currentYear = moment(value + "-01-01").isSame(moment(), "year");

      from = moment(value + "-01-01").format(API_FORMAT);
      to = currentYear
        ? DEFAULT_MAX_DAY(maxDate)
        : moment(value + "-12-31").format(API_FORMAT);
    }

    if (type === "month") {
      const currentMonth = moment(value).isSame(moment(), "month");
      const date = new Date(value);
      let month: any = date.getMonth() + 1;
      const year = date.getFullYear();
      const monthDays = new Date(year, month, 0).getDate();

      if (month.toString().length === 1) {
        month = "0" + month;
      }

      from = moment(value).format(API_FORMAT);
      to = currentMonth
        ? DEFAULT_MAX_DAY(maxDate)
        : moment(`${year}-${month}-${monthDays}`).format(API_FORMAT);
    }

    if (type === "last 3") {
      from = DEFAULT_MIN_DAY(type);
      to = DEFAULT_MAX_DAY(LAST_MAX_DATE());
    }

    if (type === "last 6") {
      from = DEFAULT_MIN_DAY(type);
      to = DEFAULT_MAX_DAY(LAST_MAX_DATE());
    }

    if (type === "life") {
      from = "";
      to = "";
    }

    onPeriodChange({ from, to }, value);
  };

  // const handleCloseClick = () => {
  //   let from = filters.from || DEFAULT_MIN_DAY(maxDate);
  //   let to = filters.to || LAST_MAX_DATE();

  //   const diff = moment(to).diff(moment(from, API_FORMAT), "days");
  //   const notDefault = diff !== Number(getDefaultValue().value);

  //   from = notDefault ? DEFAULT_MIN_DAY(maxDate) : from;
  //   to = notDefault ? LAST_MAX_DATE() : to;

  //   onPeriodChange(
  //     { from, to },
  //     page === "profile" ? "min" : notDefault ? "89" : getDefaultValue().value
  //   );

  //   setPicker({
  //     start: new Date(from),
  //     end: new Date(to),
  //   });

  //   setCustom(false);
  // };

  const getDefaultValue = () => {
    const isExpire =
      localStorageGetItem("period").expire !== new Date().setHours(0, 0, 0, 0);

    let value = isExpire ? "89" : localStorageGetItem("period").value || "89";

    if (page === "profile") {
      value = "6";
    }

    const defaultValue = options.filter((item) => item.value === value)[0];

    return defaultValue;
  };

  useEffect(() => {
    setPicker({
      start: period.from ? new Date(period.from) : new Date(),
      end: period.to ? new Date(period.to) : new Date(),
    });
  }, [period.from, period.to]);

  useEffect(() => {
    registerLocale("en-GB", enGB);

    setOptions([...options, ...getLastMonths()]);

    const isCustom = localStorageGetItem("period").custom || custom || false;

    setCustom(isCustom);

    // eslint-disable-next-line
  }, []);

  return (
    <div className="custom-period">
      {!isCustom ? (
        <Select
          options={options}
          onChange={handleSelectChange}
          defaultValue={getDefaultValue().value}
        />
      ) : (
        <div className="row relative">
          <div className="col-6">
            <div style={{ flex: "0 0 100%" }}>
              <DatePicker
                dateFormat={PICKER_FORMAT}
                selected={picker.start}
                locale="en-GB"
                onChange={(date) => handlePickerChange(date, "start")}
                startDate={picker.start}
                endDate={picker.end}
                minDate={new Date("2015-01-01")}
                maxDate={picker.end}
                selectsStart
                className="input input_fw"
                disabledKeyboardNavigation
                showYearDropdown
                dropdownMode="select"
                onYearChange={(date) => handlePickerChange(date, "start")}
              />
            </div>
          </div>

          <div className="col-6">
            <div style={{ flex: "0 0 100%" }}>
              <DatePicker
                dateFormat={PICKER_FORMAT}
                selected={picker.end}
                locale="en-GB"
                onChange={(date) => handlePickerChange(date, "end")}
                startDate={picker.start}
                endDate={picker.end}
                minDate={picker.start}
                maxDate={new Date("2023-01-01")}
                selectsEnd
                className="input input_fw"
                disabledKeyboardNavigation
                showYearDropdown
                dropdownMode="select"
                onYearChange={(date) => handlePickerChange(date, "end")}
              />
            </div>
          </div>

          {/* <div className="col-12">
            <div
              className="main-color fs-12 pointer mt-10 dib"
              onClick={handleCloseClick}
            >
              Close
            </div>
          </div> */}
        </div>
      )}
    </div>
  );
};

function getLastMonths() {
  const lastMonths = [];

  for (let i = 0; i <= 2; i++) {
    let x = new Date();
    x.setDate(1);
    x.setMonth(x.getMonth() - i);

    let name = moment(x).format("MMMM YY");
    // name = name.substr(0,1).toUpperCase() + name.substr(1);

    lastMonths.push({
      value: moment(x).format(API_FORMAT),
      name: name,
      type: "month",
    });
  }

  lastMonths.push({
    value: "custom",
    name: "Custom",
    type: "custom",
    borderTop: true,
  });

  return lastMonths;
}

export default Periods;
