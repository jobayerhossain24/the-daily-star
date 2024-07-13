import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LZone1 from "../../../assets/1.png";
import LZone2 from "../../../assets/2.png";
import LZone3 from "../../../assets/3.png";
const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="space-y-6">
      <h2 className="text-2xl">All Categories</h2>
      <div>
        {categories.map((category) => (
          <Link
            className="block ml-4 text-xl font-semibold"
            key={category.id}
            to={`/category/${category.id}`}
          >
            {category.name}
          </Link>
        ))}
      </div>

      <div className="p-4 space-y-3 mb-6">
        <img src={LZone1} alt="" />
        <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
        <img src={LZone2} alt="" />
        <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
        <img src={LZone3} alt="" />
        <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
      </div>
    </div>
  );
};

export default LeftSideNav;
