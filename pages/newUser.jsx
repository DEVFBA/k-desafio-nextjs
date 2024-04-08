import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";

const CreateUserPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    console.log("Entra: ", data);

    const response = await fetch(
      "https://kodemia-backend-challenge-d515b23a922f.herokuapp.com/user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: data.firstName,
          email: data.email,
          password: data.password,
          gender: "Male",
          phone: "000000000",
          last_name: data.lastName,
          profile_picture:
            "https://res.cloudinary.com/dxifbzhn2/image/upload/v1712516460/Perfil_Y…",
        }),
      }
    );

    const json = await response.json();

    console.log(json);

    router.push("/login");
    setError("root", { message: "Error: User not created" });
    console.log("Errors: ", errors);
  };

  return (
    <>
      <section className="bg-zinc-100 h-screen w-full flex flex-row justify-center">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <h2>Create you account</h2>
          {/* <label htmlFor="profilePicture">Profile Image</label>
          <input
            type="file"
            name="profilePicture"
            id="profilePicture"
            {...register("profilePicture")}
          /> */}
          <label htmlFor="firstName">
            First Name <span>*</span>
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            required
            {...register("firstName", {
              required: { value: true, message: "First Name is required" },
            })}
          />
          <label htmlFor="lastName">
            Last Name <span>*</span>
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            required
            {...register("lastName", {
              required: { value: true, message: "LastName is required" },
            })}
          />
          <label htmlFor="email">
            Email <span>*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            {...register("email", {
              required: { value: true, message: "Email is required" },
            })}
          />
          <label htmlFor="password">
            Password <span>*</span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            {...register("password", {
              required: { value: true, message: "Password is required" },
            })}
          />
          <label htmlFor="passwordConfirmation">
            Password Confirmation<span>*</span>
          </label>
          <input
            type="password"
            name="passwordConfirmation"
            id="passwordConfirmation"
            required
            {...register("passwordConfirmation", {
              required: {
                value: true,
                message: "Password Confirmation is required",
              },
            })}
          />
          <button className="border">Sign up</button>
        </form>
      </section>
    </>
  );
};

export default CreateUserPage;
