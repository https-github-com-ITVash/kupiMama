import React from "react";
import "./style.scss";

import { Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
const { SubMenu } = Menu;

const MainNav = () => {
  const toogleRef = React.useRef(null);
  const buttRef = React.useRef(null);
  const [togleView, setTogleView] = React.useState(null);
  const [mobil, setMobil] = React.useState(1);
  const [mobileVisible, setMobileVisible] = React.useState(false);
  const handleClick = (e) => {
    setMobil(e.key);
  };
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
                <a href="">
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
                <a href="">
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
                <a href="">
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
                <img src="img/logo.png" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
            </div>
          </div>
        )}
        {togleView === 2 && (
          <div className="nav_toogle toggle_2" ref={toogleRef}>
            <div className="nt_wrap">
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
            </div>
          </div>
        )}
        {togleView === 3 && (
          <div className="nav_toogle toggle_3" ref={toogleRef}>
            <div className="nt_wrap">
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
            </div>
          </div>
        )}
        {togleView === 4 && (
          <div className="nav_toogle toggle_4" ref={toogleRef}>
            <div className="nt_wrap">
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
            </div>
          </div>
        )}
        {togleView === 5 && (
          <div className="nav_toogle toggle_5" ref={toogleRef}>
            <div className="nt_wrap">
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
            </div>
          </div>
        )}
        {togleView === 6 && (
          <div className="nav_toogle toggle_6" ref={toogleRef}>
            <div className="nt_wrap">
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
            </div>
          </div>
        )}
        {togleView === 7 && (
          <div className="nav_toogle toggle_7" ref={toogleRef}>
            <div className="nt_wrap">
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
            </div>
          </div>
        )}
        {togleView === 8 && (
          <div className="nav_toogle toggle_8" ref={toogleRef}>
            <div className="nt_wrap">
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
              <div className="nt_box">
                <img src="img/stroller.jpg" alt="" />
                <a href="#/">Коляска 1</a>
                <a href="#/">Коляска 2</a>
                <a href="#/">Коляска 3</a>
                <a href="#/">Коляска 4</a>
                <a href="#/">Коляска 5</a>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="nav_wrap_mobil">
        <span>
          <MenuOutlined
            onClick={() => {
              setMobileVisible((prev) => !prev);
            }}
          />
        </span>
        {mobileVisible && (
          <Menu
            theme={"light"}
            onClick={handleClick}
            style={{ width: 256 }}
            defaultOpenKeys={[""]}
            selectedKeys={[mobil]}
            mode="inline"
          >
            <SubMenu key="sub1" title="Navigation One">
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="Navigation Two">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub3" title="Navigation Three">
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title="Navigation Three">
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title="Navigation Three">
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
            <SubMenu key="sub6" title="Navigation Three">
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
            <SubMenu key="sub7" title="Navigation Three">
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
            <SubMenu key="sub8" title="Navigation Three">
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        )}
      </div>
    </div>
  );
};

export default MainNav;
