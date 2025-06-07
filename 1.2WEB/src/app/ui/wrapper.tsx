import { NavLink, Outlet, useNavigate} from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { themeClasses } from "../../modules/chat/theme";

export const Wrapper = () => {
  // const navigate = useNavigate();
  // // useEffect(() => {
  // //   navigate("/profile");
  // // }, []);


    const [search, setSearch] = useState("");

    const navItems = [
      {
        to: "/chat/1",
        label: "shoqqan",
        img: "https://www.fath24.cn/hs-fs/hubfs/Global%20Site/Logos/Logo%202021%20screen.png?width=777&height=777&name=Logo%202021%20screen.png"
      },
      {
        to: "/chat/2",
        label: "Mirs",
        img: "https://tse2.mm.bing.net/th/id/OIP.vlQ3K51ZPjyRURlYu-D-IwHaHa?r=0&rs=1&pid=ImgDetMain"
      },
      {
        to: "/chat/ai",
        label: "A shoqqan",
        img: "https://tse2.mm.bing.net/th/id/OIP.6_gA1SXabeFv8LyQreHVTQHaE8?r=0&w=1000&h=667&rs=1&pid=ImgDetMain"
      },
      {
        to: "/settings",
        label: "the shoqqan",
        img: "https://media.istockphoto.com/id/957769188/pt/vetorial/atom-drawn-with-formula-vector-abstract-illustration-on-white.jpg?s=612x612&w=0&k=20&c=aZAtQwEyPl38LBZsm_b_oMO1OEKTwLYCLgfUBCr1SGg="
      },
    ];

    const filteredNavItems = navItems.filter(item =>
      item.label.toLowerCase().includes(search.toLowerCase())
    );


  return (
    <article className={"w-screen min-h-screen flex flex-col "}>
      {/* Header */}
 
      <div className="flex flex-1 ">
        <aside className={themeClasses.sidebar}>
          <header className="w-full h-16 bg-primary-blue text-text-primary flex items-center px-8 shadow">
            <button className="mr-4 flex items-center justify-center">

              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="p-2 w-10 h-14">
                <rect y="4" width="24" height="2" rx="1" fill="black"/>
                <rect y="11" width="24" height="2" rx="1" fill="black"/>
                <rect y="18" width="24" height="2" rx="1" fill="black"/>
              </svg>
            </button>
            <div className="w-110 bg-light-blue rounded-full justify-center flex items-center gap-x-2 p-2 flex-1">
              <button>
                <svg width="100" height="24" viewBox="0 0 24 24" fill="none" color="currentColor">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                  <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </button>
              <input
                className="w-full rounded-full px-4 py-1 bg-white text-black"
                placeholder="Поиск..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <img src="https://tse3.mm.bing.net/th/id/OIP.RjRTe6VeBPgiXibb6ZtKMAHaE6?r=0&rs=1&pid=ImgDetMain" alt="head" className="h-10 w-10 rounded-full border-2 border-blue-200" />
            </div>
          </header>
          {filteredNavItems.map(({ to, label, img }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `w-full h-14 text-text-primary hover:bg-bg-secondary transition-colors border-b border-[e4e4e7] ${
                  isActive ? "bg-bg-secondary" : ""
                } flex items-center justify-start rounded-lg p-2 gap-x-2`
              }
            >
              <img src={img} alt={label} className="h-14 w-14 rounded-full" />
              <span className="text-lg text-[#000000]">{label}</span>
            </NavLink>
          ))}
        </aside>
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </article>
  );
};


