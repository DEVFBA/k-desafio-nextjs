import { useEffect, useState } from "react";
import MainCard from "./MainCard";
import SecondaryCard from "./SecondaryCard";

const CardsContainer = (props) => {
  return (
    <section className="p-1 gap-10 p-10 text-black">
      <ul className="flex flex-row gap-10 text-lg p-2">
        <li className="font-bold">Relevant</li>
        <li>Latest</li>
        <li>Top</li>
      </ul>
      <section className="flex flex-col gap-2">
        {props.posts.map((post, index) => {
          if (index >= 0 && index <= 2) {
            return (
              <MainCard
                key={`key-${index}`}
                postId={post._id}
                title={post.title}
                user={`${post.user?.first_name} ${post.user?.last_name}`}
                date={post.updatedAt}
                userPic={post.user.profile_picture}
                content={`${post.content.substring(0, 100)}...`}
                tags={post.tags}
                cover={post.cover}
              ></MainCard>
            );
          }

          return (
            <SecondaryCard
              key={`key-${index}`}
              postId={post._id}
              title={post.title}
              user={`${post.user?.first_name} ${post.user?.last_name}`}
              date={post.updatedAt}
              userPic={post.user?.profile_picture}
              content={`${post.content.substring(0, 100)}...`}
              tags={post.tags}
              cover={post.cover}
            ></SecondaryCard>
          );
        })}
      </section>
    </section>
  );
};

export default CardsContainer;
