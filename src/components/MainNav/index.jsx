import React from "react";
import "./style.scss";

const MainNav = () => {
  const toogleRef = React.useRef(null);
  const buttRef = React.useRef(null);
  const [togleView, setTogleView] = React.useState(null);

  const filterType = [
    "Гигиена и уход",
    "Питание и кормление",
    "Прогулка и путишествие",
    "Детская комната",
    "Одежда и обувь",
    "Игрушки и игры",
    "Школа и констовары",
    "Книги",
    "Спорт и отдых",
    "Ещё",
  ];
  const menuToogle = React.useCallback((e) => {
    if (
      !e.path.includes(toogleRef.current) &&
      !e.path.includes(buttRef.current)
    ) {
      setTogleView(null);
    }
  }, []);
  React.useEffect(() => {
    document.querySelector("body").addEventListener("mouseover", menuToogle);
    return () =>
      document
        .querySelector("body")
        .removeEventListener("mouseover", menuToogle);
  }, [menuToogle]);
  return (
    <div className="nav">
      <div className="nav_wrap">
        <ul ref={buttRef}>
          {filterType &&
            filterType.map((item, index) => (
              <li key={index} onMouseEnter={() => setTogleView(index)}>
                {item}
              </li>
            ))}
        </ul>
        {togleView === 0 && (
          <div className="nav_toogle toggle_0" ref={toogleRef}>
            <div className="nt_wrap">
              <div className="nt_box">
                <a href="#/" className="ntb_title">
                  <img src="img/stroller.jpg" alt="" />
                  Коляски
                </a>

                <a href="#/">asdasd</a>
                <a href="#/">zxczxc zxc zx z</a>
                <a href="#/">asdas as zxc 3</a>
                <a href="#/">qweqweas asdas 4</a>
                <a href="#/" className="nt_box_all">
                  Все 10 категорий
                </a>
              </div>
              <div className="nt_box">
                <a href="#/" className="ntb_title">
                  <img src="img/stroller.jpg" alt="" />
                  Коляски
                </a>

                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/" className="nt_box_all">
                  Все 10 категорий
                </a>
              </div>
              <div className="nt_box">
                <a href="#/" className="ntb_title">
                  <img src="img/stroller.jpg" alt="" />
                  Коляски
                </a>

                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/" className="nt_box_all">
                  Все 10 категорий
                </a>
              </div>
            </div>
          </div>
        )}
        {togleView === 1 && (
          <div className="nav_toogle toggle_1" ref={toogleRef}>
            <div className="nt_wrap">
              <div className="nt_box">
                <a href="#/">
                  <img src="img/photo.png" alt="" />
                  Коляски
                </a>

                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/" className="nt_box_all">
                  Все 10 категорий
                </a>
              </div>
              <div className="nt_box">
                <a href="#/">
                  <img src="img/stroller.jpg" alt="" />
                  Коляски
                </a>

                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/" className="nt_box_all">
                  Все 10 категорий
                </a>
              </div>
              <div className="nt_box">
                <a href="#/">
                  <img src="img/stroller.jpg" alt="" />
                  Коляски
                </a>

                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/" className="nt_box_all">
                  Все 10 категорий
                </a>
              </div>
            </div>
          </div>
        )}
        {togleView === 2 && (
          <div className="nav_toogle toggle_2" ref={toogleRef}>
            <div className="nt_wrap">
              <div className="nt_box">
                <a href="#/">
                  <img src="img/stroller.jpg" alt="" />
                  Коляски
                </a>

                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/" className="nt_box_all">
                  Все 10 категорий
                </a>
              </div>
              <div className="nt_box">
                <a href="#/">
                  <img src="img/stroller.jpg" alt="" />
                  Коляски
                </a>

                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/" className="nt_box_all">
                  Все 10 категорий
                </a>
              </div>
              <div className="nt_box">
                <a href="#/">
                  <img src="img/stroller.jpg" alt="" />
                  Коляски
                </a>

                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/" className="nt_box_all">
                  Все 10 категорий
                </a>
              </div>
            </div>
          </div>
        )}
        {togleView === 3 && (
          <div className="nav_toogle toggle_3" ref={toogleRef}>
            <div className="nt_wrap">
              <div className="nt_box">
                <a href="#/">
                  <img src="img/stroller.jpg" alt="" />
                  Коляски
                </a>

                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/" className="nt_box_all">
                  Все 10 категорий
                </a>
              </div>
              <div className="nt_box">
                <a href="#/">
                  <img src="img/stroller.jpg" alt="" />
                  Коляски
                </a>

                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/" className="nt_box_all">
                  Все 10 категорий
                </a>
              </div>
              <div className="nt_box">
                <a href="#/">
                  <img src="img/stroller.jpg" alt="" />
                  Коляски
                </a>

                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/" className="nt_box_all">
                  Все 10 категорий
                </a>
              </div>
            </div>
          </div>
        )}
        {togleView === 4 && (
          <div className="nav_toogle toggle_4" ref={toogleRef}>
            <div className="nt_wrap">
              <div className="nt_box">
                <a href="#/">
                  <img src="img/stroller.jpg" alt="" />
                  Коляски
                </a>

                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/" className="nt_box_all">
                  Все 10 категорий
                </a>
              </div>
              <div className="nt_box">
                <a href="#/">
                  <img src="img/stroller.jpg" alt="" />
                  Коляски
                </a>

                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/" className="nt_box_all">
                  Все 10 категорий
                </a>
              </div>
              <div className="nt_box">
                <a href="#/">
                  <img src="img/stroller.jpg" alt="" />
                  Коляски
                </a>

                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/" className="nt_box_all">
                  Все 10 категорий
                </a>
              </div>
            </div>
          </div>
        )}
        {togleView === 5 && (
          <div className="nav_toogle toggle_5" ref={toogleRef}>
            <div className="nt_wrap">
              <div className="nt_box">
                <a href="#/">
                  <img src="img/stroller.jpg" alt="" />
                  Коляски
                </a>

                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/" className="nt_box_all">
                  Все 10 категорий
                </a>
              </div>
              <div className="nt_box">
                <a href="#/">
                  <img src="img/stroller.jpg" alt="" />
                  Коляски
                </a>

                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/" className="nt_box_all">
                  Все 10 категорий
                </a>
              </div>
              <div className="nt_box">
                <a href="#/">
                  <img src="img/stroller.jpg" alt="" />
                  Коляски
                </a>

                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/" className="nt_box_all">
                  Все 10 категорий
                </a>
              </div>
              <div className="nt_box">
                <a href="#/">
                  <img src="img/stroller.jpg" alt="" />
                  Коляски
                </a>

                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/" className="nt_box_all">
                  Все 10 категорий
                </a>
              </div>
            </div>
          </div>
        )}
        {togleView === 6 && (
          <div className="nav_toogle toggle_6" ref={toogleRef}>
            <div className="nt_wrap">
              <div className="nt_box">
                <a href="#/">
                  <img src="img/stroller.jpg" alt="" />
                  Коляски
                </a>

                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/" className="nt_box_all">
                  Все 10 категорий
                </a>
              </div>
              <div className="nt_box">
                <a href="#/">
                  <img src="img/stroller.jpg" alt="" />
                  Коляски
                </a>

                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/" className="nt_box_all">
                  Все 10 категорий
                </a>
              </div>
              <div className="nt_box">
                <a href="#/">
                  <img src="img/stroller.jpg" alt="" />
                  Коляски
                </a>

                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/" className="nt_box_all">
                  Все 10 категорий
                </a>
              </div>
            </div>
          </div>
        )}
        {togleView === 7 && (
          <div className="nav_toogle toggle_7" ref={toogleRef}>
            <div className="nt_wrap">
              <div className="nt_box">
                <a href="#/">
                  <img src="img/stroller.jpg" alt="" />
                  Коляски
                </a>

                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/" className="nt_box_all">
                  Все 10 категорий
                </a>
              </div>
              <div className="nt_box">
                <a href="#/">
                  <img src="img/stroller.jpg" alt="" />
                  Коляски
                </a>

                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/" className="nt_box_all">
                  Все 10 категорий
                </a>
              </div>
              <div className="nt_box">
                <a href="#/">
                  <img src="img/stroller.jpg" alt="" />
                  Коляски
                </a>

                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/" className="nt_box_all">
                  Все 10 категорий
                </a>
              </div>
            </div>
          </div>
        )}
        {togleView === 8 && (
          <div className="nav_toogle toggle_8" ref={toogleRef}>
            <div className="nt_wrap">
              <div className="nt_box">
                <a href="#/">
                  <img src="img/stroller.jpg" alt="" />
                  Коляски
                </a>

                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/" className="nt_box_all">
                  Все 10 категорий
                </a>
              </div>
              <div className="nt_box">
                <a href="#/">
                  <img src="img/stroller.jpg" alt="" />
                  Коляски
                </a>

                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/" className="nt_box_all">
                  Все 10 категорий
                </a>
              </div>
              <div className="nt_box">
                <a href="#/">
                  <img src="img/stroller.jpg" alt="" />
                  Коляски
                </a>

                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/" className="nt_box_all">
                  Все 10 категорий
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default MainNav;
