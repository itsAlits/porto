export default function Navbar() {
  const dataNav = [
    { name: "Home", href: "/#home" },
    { name: "My Work", href: "/Work" },
    { name: "Education", href: "/#education" },
    { name: "Contact", href: "/#contact" },
    { name: "Download CV", href: "#" },
  ];

  return (
    <div className="fixed top-0 z-50 w-full bg-black/10 px-0 lg:px-10 backdrop-blur-lg">
      <div className="text-white container mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-200 rounded z-1 mt-3 w-52 p-2"
              >
                {dataNav.map((item, index) => (
                  <li key={index}>
                    <a className="py-2" href={item.href}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <a className="text-lg hidden lg:block">daisyUI</a>
          </div>
          <a className="text-lg w-full text-end pe-6 lg:hidden block">
            daisyUI
          </a>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu text-xs text-gray-300 menu-horizontal px-1">
              {dataNav.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
