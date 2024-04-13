import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import CardImage from "../../components/cards/CardImage";
import NavBar from "../../components/NavBar";
import AuthorDateInfo from "@/components/cards/AuthorDateInfo";

const PostDetail = () => {
  const router = useRouter();

  const [token, setToken] = useState(null);
  const [post, setPost] = useState({});

  useEffect(() => {
    setToken(localStorage.token);

    fetch(
      `https://kodemia-backend-challenge-d515b23a922f.herokuapp.com/post/${router.query.id}`
    )
      .then((response) => response.json())
      .then((json) => setPost(json.data))
      .catch((error) => console.log(error));

    console.log("Post: ", post);
  }, []);

  return (
    <main>
      <NavBar token={token}></NavBar>
      <section className="grid grid-cols-12 w-full min-h-screen gap-3 max-w-screen-md justify-center m-auto">
        <div className="border-black border max-h-full w-full col-span-1">
          Emoticoes
        </div>
        <div className="border-black border max-h-full w-full col-span-8">
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
        <div className="border-black border max-h-full w-full col-span-3">
          <div className="flex flex-row gap-3">
            <img
              src={post?.user?.profile_picture}
              alt="ProfilePic"
              className="border rounded-full size-8"
            />
            <div>
              <p className="text-sm font-medium">{`${post?.user?.first_name} ${post?.user?.last_name}`}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PostDetail;
