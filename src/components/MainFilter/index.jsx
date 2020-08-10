import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./style.scss";

const MainFilter = () => {
  const [filtered, setFiltered] = React.useState("");
  const [sorted, setSorted] = React.useState("");
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
  ];
  const filter_out = (e) => {
    setFiltered(e);
  };
  const sorted_out = (e) => {
    setSorted(e);
  };
  const filterSort = (
    <Menu>
      <Menu.Item key="0" onClick={() => sorted_out("По популярности")}>
        По популярности
      </Menu.Item>
      <Menu.Item key="1" onClick={() => sorted_out("От дешёвого к дорогому")}>
        От дешёвого к дорогому
      </Menu.Item>
      <Menu.Item key="2" onClick={() => sorted_out("От дорогого к дешёвом")}>
        От дорогого к дешёвому
      </Menu.Item>
    </Menu>
  );

  const filterFilter = (
    <Menu>
      {filterType &&
        filterType.map((item, index) => (
          <Menu.Item key={index} onClick={() => filter_out(item)}>
            {item}
          </Menu.Item>
        ))}
    </Menu>
  );

  return (
    <div className="mc_sort">
      <Dropdown overlay={filterSort} trigger={["click"]}>
        <button
          className="ant-dropdown-link"
          onClick={(e) => e.preventDefault()}
        >
          {sorted ? sorted : "Сортировка"} <DownOutlined />
        </button>
      </Dropdown>

      <Dropdown overlay={filterFilter} trigger={["click"]}>
        <button
          className="ant-dropdown-link"
          onClick={(e) => e.preventDefault()}
        >
          {filtered ? filtered : "Фильтр"} <DownOutlined />
        </button>
      </Dropdown>

      <div className="mcs_bg">
        <div className="for_boy">
          <input type="checkbox" id="boy" />
          <label htmlFor="boy">Мальчик</label>
        </div>

        <div className="for_girl">
          <input type="checkbox" id="girl" className="ch_girl" />
          <label htmlFor="girl" className="label_girl">
            Девочка
          </label>
        </div>
      </div>
    </div>
  );
};

export default MainFilter;
