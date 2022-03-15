import React, { useState } from "react";

import { useHelpers } from "@hooks/helpers";
import { useSorting } from "@hooks/sorting";
import { usePagination } from "@hooks/pagination";

import { TableProps } from "@props/index";

import classNames from "classnames";
import Pagination from "./Pagination";

const Table: React.FC<TableProps> = ({
  data,
  cols,
  item,
  classnames = "",
  sort = "",
  isVisibleCol,
  pagination,
}) => {
  const Item: any = item;
  const { getClassNames, handleOrderClick, order } = useSorting(sort);
  const { sortByKey } = useHelpers();
  const { pageLimit, onPageChanged, offset, currentPage } = usePagination(10);

  const [selected, setSelected] = useState<Array<number>>([]);

  const handleRowClick = (id: number) => {
    let newArray: number[] = selected.includes(id) ? [] : [id];

    setSelected(newArray);
  };

  return (
    <>
      <table className={`table ${classnames}`}>
        <thead className={`thead-light`}>
          <tr>
            {cols.map(
              (item: any, idx: number) =>
                ((isVisibleCol && isVisibleCol(item.value)) ||
                  !isVisibleCol) && (
                  <th
                    key={idx}
                    className={classNames(
                      item.noSort ? "no-order-col" : "order-col",
                      getClassNames(item.value)
                    )}
                    onClick={() => handleOrderClick(item.value)}
                    style={{ minWidth: item.min ? item.min + "px" : "inherit" }}
                  >
                    {item.name}
                  </th>
                )
            )}
          </tr>
        </thead>
        <tbody>
          {data &&
            sortByKey(data, order.by, order.dir)
              .slice(offset.from, pagination ? offset.to : undefined)
              .map((item: any, idx: number) => (
                <Item
                  id={idx}
                  key={idx}
                  item={item}
                  selected={selected}
                  onRowClick={handleRowClick}
                  isVisibleCol={isVisibleCol}
                />
              ))}
          {data && !data.length && (
            <tr>
              <td colSpan={12}>
                <h2 className="fw-500 fs-18">No data available</h2>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {!!data.length && pagination && (
        <Pagination
          classNames="mt-20"
          totalRecords={data.length}
          pageLimit={pageLimit}
          pageNeighbours={1}
          onPageChanged={onPageChanged}
          currentPage={currentPage}
        />
      )}
    </>
  );
};

export default Table;
