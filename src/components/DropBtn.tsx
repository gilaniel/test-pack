import React, { useState } from "react";
import { Caret } from "@components/Icons";
import classNames from "classnames";

interface DropDownProps {
  children: React.ReactNode;
  title?: any;
  style?: any;
  ico?: any;
  animate?: boolean;
  caret?: boolean;
  closeOnClick?(): void;
  icoWidth?: string;
}

const DropDown: React.FC<DropDownProps> = ({
  children,
  title,
  style,
  ico,
  animate,
  caret,
  closeOnClick,
  icoWidth = "20px",
}) => {
  const [isShow, setShow] = useState(false);

  const [icoMargin] = useState(title ? "mr-5" : "");

  const handleSelectClick = () => {
    setShow(!isShow);
  };

  const onInputBlur = () => {
    setShow(false);
  };

  const onMenuMouseDown = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const handleClick = () => {
    if (!closeOnClick) return;

    setShow(false);
  };

  return (
    <div className="relative">
      <button
        className="pointer df ai-center button button_yellow"
        onBlur={onInputBlur}
        onClick={handleSelectClick}
        style={{ transform: `rotate(${isShow && animate ? "405deg" : 0})` }}
      >
        {ico && <img src={ico} className={icoMargin} width={icoWidth} alt="" />}

        {title && title}
        {caret && (
          <Caret
            classNames={classNames("ml-10 dropdown-caret", {
              "caret-open": isShow,
            })}
          />
        )}
      </button>

      {isShow && (
        <div
          className="select__dropdown"
          style={style}
          onMouseDown={onMenuMouseDown}
          onClick={handleClick}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default DropDown;
