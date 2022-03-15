import React, { Component, Fragment } from "react";

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

class Pagination extends Component {
  constructor(props) {
    super(props);
    const {
      totalRecords = null,
      pageLimit = 30,
      pageNeighbours = 0,
      classNames = "",
      currentPage = 1,
    } = props;

    this.classNames = classNames;
    this.pageLimit = typeof pageLimit === "number" ? pageLimit : 30;
    this.totalRecords = typeof totalRecords === "number" ? totalRecords : 0;

    this.pageNeighbours =
      typeof pageNeighbours === "number"
        ? Math.max(0, Math.min(pageNeighbours, 2))
        : 0;

    this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);

    this.state = { currentPage };
  }

  componentDidMount() {
    this.gotoPage(1);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pageLimit !== this.props.pageLimit) {
      this.gotoPage(1);
    }

    if (prevProps.currentPage !== this.props.currentPage) {
      this.setState({ currentPage: this.props.currentPage });
    }
  }

  getTotal = () => {
    return Math.ceil(this.props.totalRecords / this.props.pageLimit);
  };

  gotoPage = (page) => {
    const { onPageChanged = (f) => f } = this.props;

    const currentPage = Math.max(0, Math.min(page, this.getTotal()));

    const paginationData = {
      currentPage,
      totalPages: this.getTotal(),
      pageLimit: this.props.pageLimit,
      totalRecords: this.totalRecords,
    };

    this.setState({ currentPage }, () => onPageChanged(paginationData));
  };

  handleClick = (page, evt) => {
    evt.preventDefault();
    this.gotoPage(page);
  };

  handleMoveLeft = (evt) => {
    evt.preventDefault();
    this.gotoPage(this.state.currentPage - this.pageNeighbours);
  };

  handleMoveRight = (evt) => {
    evt.preventDefault();
    this.gotoPage(this.state.currentPage + this.pageNeighbours);
  };

  fetchPageNumbers = () => {
    const totalPages = this.getTotal();
    const currentPage = this.state.currentPage;
    const pageNeighbours = this.pageNeighbours;

    const totalNumbers = this.pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      let pages = [];

      const leftBound = currentPage - pageNeighbours;
      const rightBound = currentPage + pageNeighbours;
      const beforeLastPage = totalPages - 1;

      const startPage = leftBound > 2 ? leftBound : 2;
      const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

      pages = range(startPage, endPage);

      const pagesCount = pages.length;
      const singleSpillOffset = totalNumbers - pagesCount - 1;

      const leftSpill = startPage > 2;
      const rightSpill = endPage < beforeLastPage;

      const leftSpillPage = LEFT_PAGE;
      const rightSpillPage = RIGHT_PAGE;

      if (leftSpill && !rightSpill) {
        const extraPages = range(startPage - singleSpillOffset, startPage - 1);
        pages = [leftSpillPage, ...extraPages, ...pages];
      } else if (!leftSpill && rightSpill) {
        const extraPages = range(endPage + 1, endPage + singleSpillOffset);
        pages = [...pages, ...extraPages, rightSpillPage];
      } else if (leftSpill && rightSpill) {
        pages = [leftSpillPage, ...pages, rightSpillPage];
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  render() {
    if (!this.totalRecords) return null;

    if (this.getTotal() === 1) return null;

    const { currentPage } = this.state;
    const pages = this.fetchPageNumbers();

    return (
      <Fragment>
        <nav aria-label="Countries Pagination">
          <ul className={`pagination ${this.classNames}`}>
            {pages.map((page, index) => {
              if (page === LEFT_PAGE)
                return (
                  <li key={index} className="page-item">
                    <div
                      className="page-link"
                      aria-label="Previous"
                      onClick={this.handleMoveLeft}
                    >
                      <span aria-hidden="true">&laquo;</span>
                      <span className="sr-only">Previous</span>
                    </div>
                  </li>
                );

              if (page === RIGHT_PAGE)
                return (
                  <li key={index} className="page-item">
                    <div
                      className="page-link"
                      aria-label="Next"
                      onClick={this.handleMoveRight}
                    >
                      <span aria-hidden="true">&raquo;</span>
                      <span className="sr-only">Next</span>
                    </div>
                  </li>
                );

              return (
                <li
                  key={index}
                  className={`page-item${
                    currentPage === page ? " active" : ""
                  }`}
                >
                  <div
                    className="page-link"
                    onClick={(e) => this.handleClick(page, e)}
                  >
                    {page}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </Fragment>
    );
  }
}

export default Pagination;