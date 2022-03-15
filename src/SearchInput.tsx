import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import classNames from "classnames";

import useDebounce from "@hooks/debounce";
import DropDown from "./DropDown";

const SearchInput = ({ onClick, onChange, name, error, clearDict }: any) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState<any>({});
  const [isFetching, setFetching] = useState(false);
  const [isShow, setShow] = useState(false);
  const [inputRef, setInputRef] = useState<HTMLDivElement>(
    {} as HTMLDivElement
  );

  const debouncedSearch = useDebounce(search, 500);

  const getInputRef = (ref: any) => {
    setInputRef(ref);
  };

  const handleInputCHange = async () => {
    const data = await onChange(debouncedSearch);
    setData(data || []);
    setFetching(false);
  };

  const handleInputBlur = async () => {
    setShow(false);

    if (search) {
      setSearch(selected.name);
    } else {
      onClick({ value: "", name, isRequired: true });
    }
  };

  const items = () => {
    return data.map((item: any) => (
      <div
        key={Math.random()}
        className="select__item pointer"
        onClick={() => {
          setSearch(item.name);
          setSelected(item);
          onClick({ value: item.value, name });
          setShow(false);
        }}
      >
        {item.name}
      </div>
    ));
  };

  useEffect(() => {
    if (debouncedSearch && isShow) {
      handleInputCHange();
    } else {
      setData([]);
      setFetching(false);
    }
    //eslint-disable-next-line
  }, [debouncedSearch]);

  useEffect(() => {
    if (clearDict) {
      setSearch("");
      onClick({ value: "", name });
    }

    //eslint-disable-next-line
  }, [clearDict]);

  return (
    <div className="relative">
      <input
        type="text"
        className={classNames("input input_fw", { input_error: error })}
        onChange={(e) => {
          setShow(true);
          setFetching(true);
          setSearch(e.target.value);
        }}
        onClick={() => setShow(!isShow)}
        onBlur={handleInputBlur}
        ref={getInputRef}
        value={search}
      />
      {isFetching && (
        <div className="input-spinner">
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        </div>
      )}

      <DropDown
        show={isShow && !!data.length}
        inputRef={inputRef}
        items={data.length}
        search={!!data.length}
      >
        <div className="select__scroll">{items()}</div>
      </DropDown>
    </div>
  );
};

export default SearchInput;
