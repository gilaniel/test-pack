import React, { useEffect, useState } from "react";

const DropDown = ({
  children,
  style,
  show = false,
  search,
  inputRef,
  items = 0,
}: any) => {
  const [isShow, setShow] = useState(show);

  const [menuRef, setMenuRef] = useState<HTMLDivElement>({} as HTMLDivElement);

  const getMenuRef = (ref: any) => {
    setMenuRef(ref);
  };

  const onMenuMouseDown = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
  };

  // const handleClick = () => {
  //   setShow(false);
  // };

  useEffect(() => {
    setShow(show);
  }, [show]);

  const setDropdownPosition = () => {
    let inputRect = inputRef.getBoundingClientRect();
    let header: any = document.querySelector(".header");
    let menuHeight = menuRef.offsetHeight;

    let selectItem: any = document.querySelectorAll(".select__item");

    let topSpace = inputRect.top - header.offsetHeight;
    let bottomSpace = window.innerHeight - (inputRect.top + inputRect.height);
    let newHeight = bottomSpace > topSpace ? bottomSpace : topSpace;

    newHeight = menuHeight < newHeight ? menuHeight : newHeight - 10;

    if (search) {
      newHeight = selectItem[0]
        ? selectItem[0].offsetHeight * selectItem.length
        : 50;

      if (newHeight > 500) {
        newHeight = 500;
      }
    }

    menuRef.style.height = newHeight + "px";

    let isLarge = bottomSpace - menuRef.offsetHeight < 0;
    let top = "100%";

    if (isLarge && bottomSpace < topSpace) {
      top = 0 - menuRef.offsetHeight + "px";
    }

    menuRef.style.top = top;
  };

  useEffect(() => {
    if (!menuRef || !Object.keys(menuRef).length) return;

    setTimeout(() => {
      setDropdownPosition();
    }, 10);
    // eslint-disable-next-line
  }, [menuRef, search, items]);

  if (!isShow) return null;

  return (
    <div
      ref={getMenuRef}
      className="select__dropdown"
      style={style}
      onMouseDown={onMenuMouseDown}
      // onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default DropDown;
