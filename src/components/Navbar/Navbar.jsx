import cartImg from "../../assets/shopping_cart.png";

const Navbar = ({ addToCart }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
          </ul>
        </div>
        <a className="btn bg-transparent border-none text-xl text-[#9514FA]">
          DigiTools
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <div className="relative cursor-pointer">
          <img className="w-6 md:w-7" src={cartImg} alt="Cart" />
          {addToCart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {addToCart.length}
            </span>
          )}
        </div>

        <p>Login</p>
        <a className="btn btn-primary bg-linear-65 from-[#4F39F6] to-[#9514FA] border-none rounded-full hover:shadow-xl transition duration-300 hover:-translate-y-1">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Navbar;
