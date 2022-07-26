import React from "react";
import "./Filter.css";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

export const Filter = () => {
  return (
    <>
      <div className="side-list">
        <div className="sort-filters">
          <h3 className="filter-heading">Filters</h3>
          <p
            className="filter-btn"
            // onClick={() => dispatch({ type: "CLEAR_ALL" })}
          >
           <FilterAltOutlinedIcon />
          </p>
        </div>
      </div>

      <div className="side-list">
        <h4 className="list-topic">Cost</h4>
        <section className="checkbox-section">
          <label className="checkbox-title">
            <input
              type="checkbox"
              name="checkbox"
              // checked={category.includes(eachCategory)}
              // onChange={() =>
              //   dispatch({ type: "GET_CATEGORY", payload: eachCategory })
              // }
            />
            Rs. 1500-4000
          </label>

          <label className="checkbox-title">
            <input
              type="checkbox"
              name="checkbox"
              // checked={category.includes(eachCategory)}
              // onChange={() =>
              //   dispatch({ type: "GET_CATEGORY", payload: eachCategory })
              // }
            />
            Rs. 4001-7000
          </label>
          <label className="checkbox-title">
            <input
              type="checkbox"
              name="checkbox"
              // checked={category.includes(eachCategory)}
              // onChange={() =>
              //   dispatch({ type: "GET_CATEGORY", payload: eachCategory })
              // }
            />
            Rs. 7001+
          </label>
        </section>

        <h4 className="list-topic">Colour</h4>
        <section className="colour-section">
          <div className="red"></div>
          <div className="blue"></div>
          <div className="yellow"></div>
          <div className="green"></div>
          <div className="green-yellow"></div>
        </section>

        <h4 className="list-topic">Design templates</h4>

        <section className="checkbox-section">
          <label className="checkbox-title">
            <input
              type="checkbox"
              name="checkbox"
              // checked={category.includes(eachCategory)}
              // onChange={() =>
              //   dispatch({ type: "GET_CATEGORY", payload: eachCategory })
              // }
            />
            2
          </label>

          <label className="checkbox-title">
            <input
              type="checkbox"
              name="checkbox"
              // checked={category.includes(eachCategory)}
              // onChange={() =>
              //   dispatch({ type: "GET_CATEGORY", payload: eachCategory })
              // }
            />
            3
          </label>

          <label className="checkbox-title">
            <input
              type="checkbox"
              name="checkbox"
              // checked={category.includes(eachCategory)}
              // onChange={() =>
              //   dispatch({ type: "GET_CATEGORY", payload: eachCategory })
              // }
            />
            3+
          </label>
        </section>

        <h4 className="list-topic">Type</h4>

        <section className="checkbox-section">
          <label className="checkbox-title">
            <input
              type="checkbox"
              name="checkbox"
              // checked={category.includes(eachCategory)}
              // onChange={() =>
              //   dispatch({ type: "GET_CATEGORY", payload: eachCategory })
              // }
            />
            Loafers
          </label>

          <label className="checkbox-title">
            <input
              type="checkbox"
              name="checkbox"
              // checked={category.includes(eachCategory)}
              // onChange={() =>
              //   dispatch({ type: "GET_CATEGORY", payload: eachCategory })
              // }
            />
            Sneakers
          </label>
        </section>
      </div>
    </>
  );
};
