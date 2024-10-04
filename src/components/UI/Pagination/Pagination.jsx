import React from "react";
import { getPageArray } from "../../../utils/page";


const Pagination = ({totalPages, page, changePages}) => {
    let pagesArray = getPageArray(totalPages);
    return (
        <div className="page__wrapper">
        {pagesArray.map( p => 
          <span
          onClick={() => changePages(p)} 
          key={p} 
          className={page === p ? 'page page__current' : 'page'}
          >
            {p}
          </span>
        )}
      </div>
    )
}

export default Pagination;