import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-primary">Breaking News</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-12" to="/">
          Bangladeshi Prime Minister Sheikh Hasina to Visit China
        </Link>
        <Link className="mr-12" to="/">
          Attack on Quota protesters: RU students withdraw rail blockade after 4
          hours
        </Link>
        <Link className="mr-12" to="/">
          Myanmar responded positively in taking back Rohingyas: FM Hasan
        </Link>
        <Link className="mr-12" to="/">
          Russia hikes taxes to help fund Ukraine offensive
        </Link>
        <Link className="mr-12" to="/">
          Ambanis hire over 100 pvt planes for wedding
        </Link>
        <Link className="mr-12" to="/">
          England great Anderson retires with one final flourish
        </Link>
        <Link className="mr-12" to="/">
          Messi enjoying ‘last battles’ for Argentina
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
