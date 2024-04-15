// import { useEffect, useState } from "react";
import Link from "next/link";

const signOut = (event) => {
  event.preventDefault;
  localStorage.removeItem("token");
  setToken(null);
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
        href="/new-user"
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

const showCreatePostButton = () => {
  return (
    <>
      <Link
        href="/create-post"
        className="text-center bg-white border rounded-md flex px-5 py-1 text-[#3b49df] font-medium hover:text-white hover:bg-[#3b49df] hover:underline-offset-4"
      >
        Create Post
      </Link>
    </>
  );
};

const NavBar = (props) => {
  return (
    <main>
      <section
        id="navbar"
        className="bg-white px-40 flex flex-rowg gap-2 justify-between p-2"
      >
        <div className="flex flex-row gap-3">
          <div className="">
            <Link href="/">
              <img
                src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                alt="DEV Logo"
                className="h-10 w-[50px]"
              />
            </Link>
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
          {!props.token && showLoginButton()}
          {!props.token && showCreateAccountButton()}
          {props.token && showCreatePostButton()}
          {props.token && showSignOutButton()}
        </div>
      </section>
    </main>
  );
};

export default NavBar;
