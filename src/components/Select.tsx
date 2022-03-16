import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { Caret } from "./Icons";

// window.innerHeight - (elOffsetRect.top + bounding.height + offset);
// idealYPos = idealYPos - dropdownBRect.height + (this.options.coverTrigger ? triggerBRect.height : 0);

interface SelectProps {
  options: any[];
  loading?: boolean;
  onChange({ value, name }: any): void;
  defaultValue?: any;
  isMulti?: boolean;
  isSearch?: boolean;
  max?: number;
  checked?: any[];
  notAll?: boolean;
  readOnly?: boolean;
  error?: boolean;
  className?: string;
  fixed?: boolean;
}

const Select: React.FC<SelectProps> = ({
  options,
  loading,
  onChange,
  defaultValue,
  isMulti,
  isSearch,
  max,
  checked,
  notAll,
  readOnly,
  error = false,
  className = "",
  fixed = false,
}) => {
  const [search, setSearch] = useState("");
  const [checkedItems, setChecked] = useState(checked || []);
  const [selected, setValue] = useState({
    name: !defaultValue ? "Select" : getDefaultValue().name,
    value: !defaultValue ? "" : getDefaultValue().value,
  });

  const [inputRef, setInputRef] = useState<HTMLDivElement>(
    {} as HTMLDivElement
  );
  const [menuRef, setMenuRef] = useState<HTMLDivElement>({} as HTMLDivElement);
  const searchInputRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  const scrollRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  const [isShow, setShow] = useState(false);
  const [scrollTop, setScroll] = useState(0);
  const [disableScroll, setDisableScroll] = useState(false);

  const handleAllChange = () => {
    onChange({ value: [] });

    setChecked([]);
    setShow(false);
  };

  const handleOkClick = () => {
    onChange({ value: checkedItems });
    setSearch("");
    setShow(false);
  };

  const handleSelectClick = () => {
    if (readOnly) return;

    setShow(!isShow);
    setSearch("");
    setDisableScroll(false);
  };

  const onInputBlur = () => {
    setShow(false);
    setSearch("");

    if (isMulti) {
      setChecked(checked || []);
    }
  };

  const handleOptionClick = (data: any) => {
    if (isMulti) {
      handleMultiClick(data);
      return;
    }

    setValue(data);
    onChange(data);
    blurInput();
  };

  const handleMultiClick = (data: any) => {
    if (checkedItems.length >= max! && !checkedItems.includes(data.value)) {
      return;
    }

    const newArray = [...checkedItems];

    const checked = newArray.includes(data.value)
      ? newArray.filter((value) => value !== data.value)
      : newArray.concat(data.value);

    setChecked(checked);
  };

  const blurInput = () => {
    if (!inputRef) return;

    inputRef.blur();
  };

  function getDefaultValue() {
    const option = options.filter(
      (item: any) => item.value === defaultValue
    )[0];

    return {
      name:
        option && (option.name || option.name === 0) ? option.name : "Select",
      value: option && (option.value || option.value === 0) ? option.value : "",
    };
  }

  const onMenuMouseDown = (e: any) => {
    e.stopPropagation();
    e.preventDefault();

    menuRef.classList.add("active");
    setTimeout(() => {
      if (menuRef) {
        menuRef.classList.remove("active");
      }
    }, 100);

    if (e.target.classList.contains("search-field")) {
      searchInputRef.current.focus();
      setShow(true);
      return;
    }

    inputRef.focus();
  };

  const onInputMouseDown = () => {
    inputRef.classList.add("active");

    setTimeout(() => {
      inputRef.classList.remove("active");
    }, 100);
  };

  const getInputRef = (ref: any) => {
    setInputRef(ref);
  };

  const handleMenuScroll = (e: any) => {
    setScroll(e.target.scrollTop);
  };

  const getMenuRef = (ref: any) => {
    setMenuRef(ref);
  };

  const setScrollPosition = (ref: any) => {
    const selectedItem: any = document.querySelectorAll(
      ".select__item_active"
    )[0];

    if (ref && selectedItem && !disableScroll) {
      const selectedTop = selectedItem.offsetTop;
      let scroll = scrollTop;

      if (
        scrollTop + scrollRef.current.offsetHeight < selectedTop ||
        scrollTop > selectedTop + 40
      ) {
        scroll = selectedTop - selectedItem.offsetHeight;
      }

      const selectScroll: any = document.querySelector(".select__scroll");
      selectScroll.scroll(0, scroll);
      setDisableScroll(true);
    }
  };

  const getOptionItem = (
    option: { name: string; value: any; borderBottom: any; borderTop: any },
    idx: number
  ) => {
    const isSelected =
      option.value === selected.value || checkedItems.includes(option.value);

    return (
      <div
        key={idx}
        className={classNames("select__item", "pointer", {
          select__item_active: isSelected,
          borderBottom: option.borderBottom,
          borderTop: option.borderTop,
        })}
        onClick={() => handleOptionClick(option)}
      >
        {isMulti ? (
          <div className="df ai-center">
            <input
              type="checkbox"
              value={option.value}
              className="mr-10"
              checked={checkedItems.includes(option.value)}
              disabled={
                checkedItems.length >= max! &&
                !checkedItems.includes(option.value)
              }
              readOnly
            />
            <span>{option.name}</span>
          </div>
        ) : (
          option.name
        )}
      </div>
    );
  };

  const renderOptions = () => {
    return options.map((option, idx) => {
      if (
        !search ||
        (option.name &&
          option.name.toLowerCase().indexOf(search.toLowerCase()) > -1)
      ) {
        return getOptionItem(option, idx);
      }

      return null;
    });
  };

  const getSelectedName = () => {
    const checkedCount = checkedItems.length;
    if (loading) {
      return "Loading...";
    }

    if (isMulti) {
      if (checkedCount) {
        return `${checkedCount} of ${options.length}`;
      }

      return notAll ? "Select" : "All";
    }

    return selected.name;
  };

  const setDropdownPosition = () => {
    let inputRect = inputRef.getBoundingClientRect();
    let header: any = document.querySelector(".header");
    let headerHeight = header ? header.offsetHeight : 0;
    let menuHeight = menuRef.offsetHeight;

    let selectItem: any = document.querySelectorAll(".select__item");

    let topSpace = inputRect.top - headerHeight;
    let bottomSpace = window.innerHeight - (inputRect.top + inputRect.height);
    let spaceHeight = bottomSpace > topSpace ? bottomSpace : topSpace;

    let okBtnWrap: any = document.querySelector(".ok-btn-wrap");

    let newHeight = menuHeight < spaceHeight ? menuHeight : spaceHeight - 10;

    newHeight = selectItem[0]
      ? selectItem[0].offsetHeight * selectItem.length
      : 50;

    if (okBtnWrap && selectItem.length) {
      newHeight += 55;
    }

    newHeight = newHeight < spaceHeight ? newHeight : spaceHeight - 10;

    menuRef.style.height = newHeight + "px";

    let isLarge = bottomSpace - menuRef.offsetHeight < 0;
    let top = "100%";
    let left = "0%";

    if (fixed) {
      top = inputRect.top + inputRect.height + "px";
      left = inputRect.left + "px";
      menuRef.style.width = inputRect.width + "px";
      menuRef.style.left = left;
    }

    if (isLarge && bottomSpace < topSpace) {
      const start = fixed ? inputRect.top : 0;

      top = start - menuRef.offsetHeight + "px";
    }

    menuRef.style.top = top;

    if (isMulti && okBtnWrap) {
      let scrollHeight = menuRef.offsetHeight - okBtnWrap.offsetHeight;

      if (!notAll && !search) {
        scrollHeight -= selectItem[0].offsetHeight;
      }

      scrollRef.current.style.maxHeight = scrollHeight + "px";
    }
  };

  const scrollHandler = () => {
    if (fixed) {
      setShow(false);
    }
  };

  useEffect(() => {
    if (
      !defaultValue &&
      typeof defaultValue !== "string" &&
      typeof defaultValue !== "number"
    )
      return;

    setValue({
      name: getDefaultValue().name,
      value: getDefaultValue().value,
    });

    // eslint-disable-next-line
  }, [defaultValue]);

  useEffect(() => {
    setChecked(checked || []);
  }, [checked]);

  useEffect(() => {
    if (!inputRef || !Object.keys(inputRef).length) return;

    setTimeout(() => {
      setDropdownPosition();
    }, 1);

    // eslint-disable-next-line
  }, [search]);

  useEffect(() => {
    if (!menuRef || !Object.keys(menuRef).length) return;

    setDropdownPosition();
    setScrollPosition(menuRef);

    const baseTable = document.querySelector(".BaseTable__body");

    if (baseTable) {
      baseTable.addEventListener("scroll", scrollHandler);
      document.addEventListener("scroll", scrollHandler);
    }

    return () => {
      if (baseTable) {
        baseTable.removeEventListener("scroll", scrollHandler);
        document.removeEventListener("scroll", scrollHandler);
      }
    };

    // eslint-disable-next-line
  }, [menuRef]);

  return (
    <div className="select">
      <input
        ref={getInputRef}
        className={classNames(
          `select__field input input_fw pointer ${className}`,
          {
            input_error: error,
          }
        )}
        onBlur={onInputBlur}
        onClick={handleSelectClick}
        onMouseDown={onInputMouseDown}
        value={search}
        placeholder={getSelectedName()}
        readOnly={readOnly || !isSearch || !isShow}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Caret classNames={classNames("caret", { active: isShow })} />
      {isShow && (
        <div
          ref={getMenuRef}
          className={`select__dropdown ${fixed ? "fixed" : ""}`}
          onMouseDown={onMenuMouseDown}
          onScroll={handleMenuScroll}
        >
          {isMulti && !search && !notAll && (
            <AllCheckedItem onAllClick={handleAllChange} />
          )}
          <div className="select__scroll" ref={scrollRef}>
            {renderOptions()}
          </div>
          {isMulti && <OkBtn onOkClick={handleOkClick} />}
        </div>
      )}
    </div>
  );
};

const AllCheckedItem = ({ onAllClick }: any) => {
  return (
    <div
      className={classNames("select__item custom-option", "pointer")}
      onClick={onAllClick}
    >
      All
    </div>
  );
};

const OkBtn = ({ onOkClick }: any) => {
  return (
    <div
      className="ok-btn-wrap"
      style={{
        padding: "10px",
        // position: "absolute",
        bottom: 0,
        width: "100%",
        boxShadow: "0 -2px 3px -2px rgba(0,0,0,.4)",
      }}
    >
      <button className="button button_main" onClick={onOkClick}>
        Ok
      </button>
    </div>
  );
};

export default Select;
