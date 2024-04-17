import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/router";

const CreatePostPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    const token = localStorage.token;

    const response = await fetch("https://k-challenge.devfba.mx/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: data.postTitle,
        content: data.postContent,
        tags: data.postTags,
        cover:
          "https://res.cloudinary.com/practicaldev/image/fetch/s--CbZjKhMp--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/f9bp06ymy5cdurg16r5w.jpeg",
      }),
    });

    const json = await response.json();

    console.log(json);

    router.push("/");

    // setError("root", { message: "Error: Post not created" });
  };

  return (
    <section className="flex flex-row justify-center bg-zinc-100">
      <div className="w-3/5">
        <form
          action=""
          className="flex flex-col gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="border bg-white w-3/5 rounded-md flex flex-col gap-3">
            {/* <input type="file" id="postPicture" /> */}
            <input
              type="text"
              className="text-4xl font-bold"
              placeholder="New post title here"
              id="postTitle"
              name="postTitle"
              {...register("postTitle", {
                required: { value: true, message: "Post Title is required" },
              })}
            />
            <input
              type="text"
              placeholder="Add up to 4 tags"
              id="postTags"
              name="postTags"
              {...register("postTags")}
            />
            <textarea
              name=""
              id="postContent"
              cols="30"
              rows="10"
              placeholder="Write your post content here..."
              {...register("postContent", {
                required: { value: true, message: "First Name is required" },
              })}
            ></textarea>
          </div>
          <div className="flex flex-row gap-5 ">
            <button className="text-center bg-white border rounded-md flex px-5 py-1 text-[#3b49df] font-medium hover:text-white hover:bg-[#3b49df] hover:underline-offset-4">
              Publish
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreatePostPage;
