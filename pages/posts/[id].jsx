import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import CardImage from "../../components/cards/CardImage";
import NavBar from "../../components/NavBar";
import AuthorDateInfo from "@/components/cards/AuthorDateInfo";

const PostDetail = () => {
  const router = useRouter();

  const [token, setToken] = useState(null);
  const [post, setPost] = useState({});

  useEffect(() => {
    setToken(localStorage.token);

    fetch(`https://k-challenge.devfba.mx/post/${router.query.id}`)
      .then((response) => response.json())
      .then((json) => setPost(json.data))
      .catch((error) => console.log(error));

    console.log("Post: ", post);
  }, []);

  return (
    <main>
      <NavBar token={token}></NavBar>
      <section className="flex flex-row justify-center w-full">
        <section className="flex flex-row min-h-screen gap-3 max-w-screen-lg justify-center">
          <div className="border rounded-md max-h-full w-full grow-0 max-w-10 flex flex-col gap-3">
            <div>
              <div className="flex flex-row justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  role="img"
                  aria-hidden="true"
                  class="crayons-icon"
                >
                  <g clip-path="url(#clip0_988_3276)">
                    <path
                      d="M19 14V17H22V19H18.999L19 22H17L16.999 19H14V17H17V14H19ZM20.243 4.75698C22.505 7.02498 22.583 10.637 20.479 12.992L19.059 11.574C20.39 10.05 20.32 7.65998 18.827 6.16998C17.324 4.67098 14.907 4.60698 13.337 6.01698L12.002 7.21498L10.666 6.01798C9.09103 4.60598 6.67503 4.66798 5.17203 6.17198C3.68203 7.66198 3.60703 10.047 4.98003 11.623L13.412 20.069L12 21.485L3.52003 12.993C1.41603 10.637 1.49503 7.01898 3.75603 4.75698C6.02103 2.49298 9.64403 2.41698 12 4.52898C14.349 2.41998 17.979 2.48998 20.242 4.75698H20.243Z"
                      fill="#525252"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_988_3276">
                      <rect width="24" height="24" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-center">86</p>
            </div>
            <div>
              <div className="flex flex-row justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-hidden="true"
                  class="crayons-icon"
                >
                  <path d="M10 3h4a8 8 0 010 16v3.5c-5-2-12-5-12-11.5a8 8 0 018-8zm2 14h2a6 6 0 000-12h-4a6 6 0 00-6 6c0 3.61 2.462 5.966 8 8.48V17z"></path>
                </svg>
              </div>
              <p className="text-center">41</p>
            </div>
            <div>
              <div className="flex flex-row justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-hidden="true"
                  class="crayons-icon"
                >
                  <path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1zm13 2H6v15.432l6-3.761 6 3.761V4z"></path>
                </svg>
              </div>
            </div>
            <p className="text-center">98</p>
            <div>
              <div className="flex flex-row justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  role="img"
                  aria-labelledby="arf0f094ltb6bf35o5u52erfhwc08v97"
                  aria-hidden="true"
                  class="crayons-icon dropdown-icon"
                >
                  <title id="arf0f094ltb6bf35o5u52erfhwc08v97">More...</title>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="border rounded-md max-h-full w-full grow">
            <CardImage cover={post?.cover}></CardImage>
            <AuthorDateInfo
              userPic={post?.user?.profile_picture}
              date={post?.createdAt}
              user={`${post?.user?.first_name} ${post.user?.last_name}`}
            ></AuthorDateInfo>
            <div>Reactions</div>
            <div>
              <h3 className="text-4xl font-bold">{post.title}</h3>
            </div>
            <div>
              <p>{post.content}</p>
            </div>
          </div>
          <div className="border rounded-md max-h-full w-full grow-0 max-w-60">
            <div className="flex flex-col gap-4 p-3">
              <div className="flex flex-row gap-3">
                <img
                  src={post?.user?.profile_picture}
                  alt="ProfilePic"
                  className="border rounded-full size-8"
                />
                <div className="flex flex-row align-bottom">
                  <p className="text-xl font-medium">{`${post?.user?.first_name} ${post?.user?.last_name}`}</p>
                </div>
              </div>
              <div className="text-center bg-[#3b49df] rounded-md p-3">
                <Link href="/" className="text-base font-medium text-white">
                  Follow
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default PostDetail;
