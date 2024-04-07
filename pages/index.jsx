import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import CardsContainer from "../components/CardsContainer";

const inter = Inter({ subsets: ["latin"] });

const signOut = (event) => {
  event.preventDefault;
  localStorage.removeItem("token");
};

const showLoginButton = () => {
  return (
    <>
      <Link
        href="/login"
        className="text-center flex px-5 py-1 hover:border rounded-md hover:underline-offset-1 hover:bg-indigo-400 hover:text-[#3b49df]"
      >
        Log in
      </Link>
    </>
  );
};

const showCreateAccountButton = () => {
  return (
    <>
      <Link
        href="/"
        className="text-center bg-white border rounded-md flex px-5 py-1 text-[#3b49df] font-medium hover:text-white hover:bg-[#3b49df] hover:underline-offset-4"
      >
        Create Account
      </Link>
    </>
  );
};

const showSignOutButton = () => {
  return (
    <>
      <Link
        href="/"
        className="text-center bg-white border rounded-md flex px-5 py-1 text-[#3b49df] font-medium hover:text-white hover:bg-[#3b49df] hover:underline-offset-4"
        onClick={signOut}
      >
        Sign Out
      </Link>
    </>
  );
};

export default function Home() {
  return (
    <main className="bg-zinc-100 flex flex-col gap-5 min-h-screen h-full box-content text-[#575757]">
      <section
        id="navbar"
        className="bg-white px-40 flex flex-rowg gap-2 justify-between p-2"
      >
        <div className="flex flex-row gap-3">
          <div className="">
            <img
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt="DEV Logo"
              className="h-10 w-[50px]"
            />
          </div>
          <form className="border rounded-md h-10 w-96 flex justify-between align-middle gap-2 p-1">
            <input type="text" placeholder="Search..." className="grow" />
            <button className="grow-0 px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="crayons-icon c-btn__icon"
                focusable="false"
              >
                <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"></path>
              </svg>
            </button>
          </form>
        </div>
        <div className="flex gap-2">
          {!localStorage.token && showLoginButton()}
          {!localStorage.token && showCreateAccountButton()}
          {localStorage.token && showSignOutButton()}
        </div>
      </section>
      <section className="flex flex-row w-full min-h-screen gap-5 justify-center px-40">
        <div className="flex flex-col grow-0 max-w-48">
          <div className="flex flex-col gap-3 ">
            <div className="flex flex-col gap-5 p-3 bg-white border rounded-md">
              <h3 className="text-xl font-bold">
                DEV Community is a community of 1,388,591 amazing developers
              </h3>
              <p className="text-base">
                We&apos;re a place where coders share, stay up-to-date and grow
                their careers.
              </p>
              {!localStorage.token && showLoginButton()}
              {!localStorage.token && showCreateAccountButton()}
              {localStorage.token && showSignOutButton()}
            </div>
            <div className="p-3 flex flex-col gap-3">
              <div className="flex flex-row">
                <Link href="" className="flex flex-row gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 44 44"
                    width="24"
                    height="24"
                  >
                    <g class="nc-icon-wrapper">
                      <path
                        fill="#A0041E"
                        d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"
                      ></path>
                      <path fill="#FFE8B6" d="M9 20L22 7l13 13v17H9z"></path>
                      <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
                      <path
                        fill="#66757F"
                        d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"
                      ></path>
                      <path
                        fill="#66757F"
                        d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"
                      ></path>
                      <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
                      <path
                        fill="#55ACEE"
                        d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"
                      ></path>
                      <path
                        fill="#5C913B"
                        d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"
                      ></path>
                    </g>
                  </svg>
                  Home
                </Link>
              </div>
              <div className="flex flex-row">
                <Link href="" className="flex flex-row gap-3">
                  <span class="c-link__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 44 44"
                      width="24"
                      height="24"
                    >
                      <g class="nc-icon-wrapper">
                        <path
                          fill="#292F33"
                          d="M10 19h24v2H10zm15 15c0 2.208-.792 4-3 4-2.209 0-3-1.792-3-4s.791-2 3-2c2.208 0 3-.208 3 2z"
                        ></path>
                        <path
                          fill="#66757F"
                          d="M22 35c-6.627 0-10 1.343-10 3v2h20v-2c0-1.657-3.373-3-10-3z"
                        ></path>
                        <path
                          fill="#99AAB5"
                          d="M22 4a9 9 0 00-9 9v7h18v-7a9 9 0 00-9-9z"
                        ></path>
                        <g fill="#292F33" transform="translate(4 4)">
                          <circle cx="15.5" cy="2.5" r="1.5"></circle>
                          <circle cx="20.5" cy="2.5" r="1.5"></circle>
                          <circle cx="17.5" cy="6.5" r="1.5"></circle>
                          <circle cx="22.5" cy="6.5" r="1.5"></circle>
                          <circle cx="12.5" cy="6.5" r="1.5"></circle>
                          <circle cx="15.5" cy="10.5" r="1.5"></circle>
                          <circle cx="10.5" cy="10.5" r="1.5"></circle>
                          <circle cx="20.5" cy="10.5" r="1.5"></circle>
                          <circle cx="25.5" cy="10.5" r="1.5"></circle>
                          <circle cx="17.5" cy="14.5" r="1.5"></circle>
                          <circle cx="22.5" cy="14.5" r="1.5"></circle>
                          <circle cx="12.5" cy="14.5" r="1.5"></circle>
                        </g>
                        <path
                          fill="#66757F"
                          d="M13 19.062V21c0 4.971 4.029 9 9 9s9-4.029 9-9v-1.938H13z"
                        ></path>
                        <path
                          fill="#66757F"
                          d="M34 18a1 1 0 00-1 1v2c0 6.074-4.925 11-11 11s-11-4.926-11-11v-2a1 1 0 00-2 0v2c0 7.18 5.82 13 13 13s13-5.82 13-13v-2a1 1 0 00-1-1z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  Podcasts
                </Link>
              </div>
              <div className="flex flex-row">
                <Link href="" className="flex flex-row gap-3">
                  <span class="c-link__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 44 44"
                      width="24"
                      height="24"
                    >
                      <g transform="translate(4 4)">
                        <path
                          fill="#31373D"
                          d="M34.074 18l-4.832 3H28v-4c0-.088-.02-.169-.026-.256C31.436 15.864 34 12.735 34 9a8 8 0 00-16.001 0c0 1.463.412 2.822 1.099 4H14.92c.047-.328.08-.66.08-1a7 7 0 10-14 0 6.995 6.995 0 004 6.317V29a4 4 0 004 4h15a4 4 0 004-4v-3h1.242l4.832 3H35V18h-.926zM28.727 3.977a5.713 5.713 0 012.984 4.961L28.18 8.35a2.276 2.276 0 00-.583-.982l1.13-3.391zm-.9 6.342l3.552.592a5.713 5.713 0 01-4.214 3.669 3.985 3.985 0 00-1.392-1.148l.625-2.19a2.425 2.425 0 001.429-.923zM26 3.285c.282 0 .557.027.828.067l-1.131 3.392c-.404.054-.772.21-1.081.446L21.42 5.592A5.703 5.703 0 0126 3.285zM20.285 9c0-.563.085-1.106.236-1.62l3.194 1.597-.002.023c0 .657.313 1.245.771 1.662L23.816 13h-1.871a5.665 5.665 0 01-1.66-4zm-9.088-.385A4.64 4.64 0 0112.667 12c0 .344-.043.677-.113 1H10.1c.145-.304.233-.641.233-1a2.32 2.32 0 00-.392-1.292l1.256-2.093zM8 7.333c.519 0 1.01.105 1.476.261L8.22 9.688c-.073-.007-.145-.022-.22-.022a2.32 2.32 0 00-1.292.392L4.615 8.803A4.64 4.64 0 018 7.333zM3.333 12c0-.519.105-1.01.261-1.477l2.095 1.257c-.007.073-.022.144-.022.22 0 .75.36 1.41.91 1.837a3.987 3.987 0 00-1.353 1.895C4.083 14.881 3.333 13.533 3.333 12z"
                        ></path>
                        <circle fill="#8899A6" cx="24" cy="19" r="2"></circle>
                        <circle fill="#8899A6" cx="9" cy="19" r="2"></circle>
                        <path
                          fill="#8899A6"
                          d="M24 27a2 2 0 00-2-2H11a2 2 0 00-2 2v6a2 2 0 002 2h11a2 2 0 002-2v-6z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  Videos
                </Link>
              </div>
              <div className="flex flex-row">
                <Link href="" className="flex flex-row gap-3">
                  <span class="c-link__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 44 44"
                      width="24"
                      height="24"
                    >
                      <g class="nc-icon-wrapper">
                        <path
                          fill="#FFD983"
                          d="M36.017 24.181L21.345 9.746C20.687 9.087 19.823 9 18.96 9H8.883C7.029 9 6 10.029 6 11.883v10.082c0 .861.089 1.723.746 2.38L21.3 39.017a3.287 3.287 0 004.688 0l10.059-10.088c1.31-1.312 1.28-3.438-.03-4.748zm-23.596-8.76a1.497 1.497 0 11-2.118-2.117 1.497 1.497 0 012.118 2.117z"
                        ></path>
                        <path
                          fill="#D99E82"
                          d="M13.952 11.772a3.66 3.66 0 00-5.179 0 3.663 3.663 0 105.18 5.18 3.664 3.664 0 00-.001-5.18zm-1.53 3.65a1.499 1.499 0 11-2.119-2.12 1.499 1.499 0 012.119 2.12z"
                        ></path>
                        <path
                          fill="#C1694F"
                          d="M12.507 14.501a1 1 0 11-1.415-1.414l8.485-8.485a1 1 0 111.415 1.414l-8.485 8.485z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  Tags
                </Link>
              </div>
              <div className="flex flex-row">
                <Link href="" className="flex flex-row gap-3">
                  <span class="c-link__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 44 44"
                      width="24"
                      height="24"
                    >
                      <g class="nc-icon-wrapper">
                        <path
                          fill="#FFD983"
                          d="M33 15.06c0 6.439-5 7.439-5 13.44 0 3.098-3.123 3.359-5.5 3.359-2.053 0-6.586-.779-6.586-3.361C15.914 22.5 11 21.5 11 15.06c0-6.031 5.285-10.92 11.083-10.92C27.883 4.14 33 9.029 33 15.06z"
                        ></path>
                        <path
                          fill="#CCD6DD"
                          d="M26.167 36.5c0 .828-2.234 2.5-4.167 2.5-1.933 0-4.167-1.672-4.167-2.5 0-.828 2.233-.5 4.167-.5 1.933 0 4.167-.328 4.167.5z"
                        ></path>
                        <path
                          fill="#FFCC4D"
                          d="M26.707 14.293a.999.999 0 00-1.414 0L22 17.586l-3.293-3.293a1 1 0 10-1.414 1.414L21 19.414V30a1 1 0 102 0V19.414l3.707-3.707a.999.999 0 000-1.414z"
                        ></path>
                        <path
                          fill="#99AAB5"
                          d="M28 35a2 2 0 01-2 2h-8a2 2 0 01-2-2v-6h12v6z"
                        ></path>
                        <path
                          fill="#CCD6DD"
                          d="M15.999 36a1 1 0 01-.163-1.986l12-2a.994.994 0 011.15.822.999.999 0 01-.822 1.15l-12 2a.927.927 0 01-.165.014zm0-4a1 1 0 01-.163-1.986l12-2a.995.995 0 011.15.822.999.999 0 01-.822 1.15l-12 2a.927.927 0 01-.165.014z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  DEV Help
                </Link>
              </div>

              <div className="flex flex-row">
                <Link href="" className="flex flex-row gap-3">
                  <span class="c-link__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 44 44"
                      width="24"
                      height="24"
                    >
                      <path
                        fill="#DD2E44"
                        d="M39.885 15.833c0-5.45-4.418-9.868-9.867-9.868-3.308 0-6.227 1.633-8.018 4.129-1.791-2.496-4.71-4.129-8.017-4.129-5.45 0-9.868 4.417-9.868 9.868 0 .772.098 1.52.266 2.241C5.751 26.587 15.216 35.568 22 38.034c6.783-2.466 16.249-11.447 17.617-19.959.17-.721.268-1.469.268-2.242z"
                      ></path>
                    </svg>
                  </span>
                  Advertise on DEV
                </Link>
              </div>

              <div className="flex flex-row">
                <Link href="" className="flex flex-row gap-3">
                  <span class="c-link__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 44 44"
                      width="24"
                      height="24"
                    >
                      <g class="nc-icon-wrapper">
                        <path
                          fill="#FFAC33"
                          d="M38.724 33.656c-1.239-.01-1.241 1.205-1.241 1.205H22.5c-5.246 0-9.5-4.254-9.5-9.5s4.254-9.5 9.5-9.5 9.5 4.254 9.5 9.5c0 3.062-1.6 5.897-3.852 7.633h5.434C35.022 30.849 36 28.139 36 25.361c0-7.456-6.045-13.5-13.5-13.5-7.456 0-13.5 6.044-13.5 13.5 0 7.455 6.044 13.5 13.5 13.5h14.982s-.003 1.127 1.241 1.139c1.238.012 1.228-1.245 1.228-1.245l.014-3.821s.001-1.267-1.241-1.278zM9 18.26a16.047 16.047 0 014-4.739V13c0-5 5-7 5-8s-1-1-1-1H5C4 4 4 5 4 5c0 1 5 3.333 5 7.69v5.57z"
                        ></path>
                        <path
                          fill="#BE1931"
                          d="M17.091 33.166a9.487 9.487 0 01-4.045-8.72l-3.977-.461c-.046.452-.069.911-.069 1.376 0 4.573 2.28 8.608 5.76 11.051l2.331-3.246z"
                        ></path>
                        <path
                          fill="#BE1931"
                          d="M10 29.924s-5.188-.812-5 1 5-1 5-1zm0 .312s-4.125 2.688-2.938 3.75S10 30.236 10 30.236z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  Contact{" "}
                </Link>
              </div>
            </div>
            <div className="p-3 flex flex-row gap-2">
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-labelledby="au0auyoy2gli79mrp9c4tce6edsv06n"
                  class="crayons-icon c-link__icon"
                >
                  <title id="au0auyoy2gli79mrp9c4tce6edsv06n">Twitter</title>
                  <path
                    d="M22.162 5.656a8.383 8.383 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.211 4.211 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.395 8.395 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.495 8.495 0 002.087-2.165l-.001-.001z"
                    fill="#65bbf2"
                  ></path>
                </svg>
              </Link>
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-labelledby="ajzae1wp8fqtsh8n2sqh9qhrsdorfpzw"
                  class="crayons-icon c-link__icon"
                >
                  <title id="ajzae1wp8fqtsh8n2sqh9qhrsdorfpzw">Facebook</title>
                  <path d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.188 19.188 0 00-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1h-4.598z"></path>
                </svg>
              </Link>
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-labelledby="ahaeevdbf9m34xedi8pr4xn66sclasbe"
                  class="crayons-icon c-link__icon"
                >
                  <title id="ahaeevdbf9m34xedi8pr4xn66sclasbe">Github</title>
                  <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z"></path>
                </svg>
              </Link>
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-labelledby="atj4oxweldm122dqbvt927qd9uueqa9a"
                  class="crayons-icon c-link__icon"
                >
                  <title id="atj4oxweldm122dqbvt927qd9uueqa9a">Instagram</title>
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"></path>
                </svg>
              </Link>
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-labelledby="a3r7tmlrauvph6fdm99pji4l40cr5bo"
                  class="crayons-icon c-link__icon"
                >
                  <title id="a3r7tmlrauvph6fdm99pji4l40cr5bo">Twitch</title>
                  <path d="M4.3 3H21v11.7l-4.7 4.7h-3.9l-2.5 2.4H7v-2.4H3V6.2L4.3 3zM5 17.4h4v2.4h.095l2.5-2.4h3.877L19 13.872V5H5v12.4zM15 8h2v4.7h-2V8zm0 0h2v4.7h-2V8zm-5 0h2v4.7h-2V8z"></path>
                </svg>
              </Link>
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-labelledby="amr4zqgww47ekbep7u22gsh9zfqsm78c"
                  class="crayons-icon c-link__icon"
                >
                  <title id="amr4zqgww47ekbep7u22gsh9zfqsm78c">Mastodon</title>
                  <path d="M21.258 13.99c-.274 1.41-2.456 2.955-4.962 3.254-1.306.156-2.593.3-3.965.236-2.243-.103-4.014-.535-4.014-.535 0 .218.014.426.04.62.292 2.215 2.196 2.347 4 2.41 1.82.062 3.44-.45 3.44-.45l.076 1.646s-1.274.684-3.542.81c-1.25.068-2.803-.032-4.612-.51-3.923-1.039-4.598-5.22-4.701-9.464-.031-1.26-.012-2.447-.012-3.44 0-4.34 2.843-5.611 2.843-5.611 1.433-.658 3.892-.935 6.45-.956h.062c2.557.02 5.018.298 6.451.956 0 0 2.843 1.272 2.843 5.61 0 0 .036 3.201-.397 5.424zm-2.956-5.087c0-1.074-.273-1.927-.822-2.558-.567-.631-1.308-.955-2.229-.955-1.065 0-1.871.41-2.405 1.228l-.518.87-.519-.87C11.276 5.8 10.47 5.39 9.405 5.39c-.921 0-1.663.324-2.229.955-.549.631-.822 1.484-.822 2.558v5.253h2.081V9.057c0-1.075.452-1.62 1.357-1.62 1 0 1.501.647 1.501 1.927v2.79h2.07v-2.79c0-1.28.5-1.927 1.5-1.927.905 0 1.358.545 1.358 1.62v5.1h2.08V8.902l.001.001z"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="grow">
          <CardsContainer />
        </div>
        <div className="flex flex-col grow-0 gap-3 max-w-48">
          <div className="flex flex-col bg-white border rounded-md gap-3 p-3">
            <h3 className="text-xl font-bold">#discuss</h3>
            <p className="text-xs">
              Discussion threads targeting the whole community
            </p>
            <hr />
            <Link href={"/"}>
              How do you deal with digital eyer strain and dry eyes?
            </Link>
            <p>11 comments</p>
            <hr />
            <Link href={"/"}>What Are Your Best Clean Code Tips</Link>
            <p>11 comments</p>
            <hr />
            <Link href={"/"}>
              Networking Connections: Is it Quality or Quantity=
            </Link>
            <p>7 comments</p>
            <hr />
            <Link href={"/"}>Caption This! 🤔💭</Link>
            <p>11 comments</p>
            <hr />
            <Link href={"/"}>What was your win this week</Link>
          </div>
          <div className="flex flex-col bg-white border rounded-md gap-3 p-3">
            <h3 className="text-xl font-bold">#watercooler</h3>
            <p className="text-xs">Light, and off-topic conversation.</p>
            <hr />
            <Link href={"/"}>
              How do you deal with digital eyer strain and dry eyes?
            </Link>
            <p>11 comments</p>
            <hr />
            <Link href={"/"}>What Are Your Best Clean Code Tips</Link>
            <p>11 comments</p>
            <hr />
            <Link href={"/"}>
              Networking Connections: Is it Quality or Quantity=
            </Link>
            <p>7 comments</p>
            <hr />
            <Link href={"/"}>Caption This! 🤔💭</Link>
            <p>11 comments</p>
            <hr />
            <Link href={"/"}>What was your win this week</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
