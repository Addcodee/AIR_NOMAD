import React, { useEffect, useRef, useState } from "react";
import WhereFilter from "../../components/filters/WhereFilter";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  const [open, setOpen] = useState(false);
  const [where, setWhere] = useState(true);
  const [what, setWhat] = useState(false);
  const [who, setWho] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (
        e.target.className === "where" ||
        e.target.className === "countries" ||
        e.target.className === "imgs"
      ) {
        return;
      }
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });
  return (
    <div className="nav">
      <div
        ref={menuRef}
        className={open ? "activeF" : "disabled"}
        onClick={() => setOpen(true)}
      >
        {open ? (
          <div className="filter">
            <div
              onClick={() => {
                setWhere(true);
                setWhat(false);
                setWho(false);
              }}
              className={where ? "active__filter" : "filters"}
            >
              Где?
            </div>
            <div
              onClick={() => {
                setWhere(false);
                setWhat(true);
                setWho(false);
              }}
              className={what ? "active__filter" : "filters"}
            >
              Что?
            </div>
            <div
              onClick={() => {
                setWhere(false);
                setWhat(false);
                setWho(true);
              }}
              className={who ? "active__filter" : "filters"}
            >
              Кто?
            </div>
            <div className="btn__cont">
              <button className="btn__search">Искать</button>
            </div>
          </div>
        ) : (
          "open"
        )}
      </div>
      {where && open ? <WhereFilter /> : null}
    </div>
  );
};

export default NotFoundPage;
