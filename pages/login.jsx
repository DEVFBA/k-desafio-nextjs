import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    const response = await fetch(
      "https://kodemia-backend-challenge-d515b23a922f.herokuapp.com/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      }
    );

    const json = await response.json();

    console.log(json);

    if (json.data?.token) {
      localStorage.setItem("token", json.data.token);
      router.push("/");
      return;
    }

    setError("root", { message: "You shall not pass!!!!" });
  };

  const displayLoginError = () => {
    return (
      <div className="text-[#B91C1C] bg-red-100 p-2">
        <strong>Unable to login</strong>
        <br />
        If you haven't created an account, we recommend signing up with social
        authentication
        <br />
        below. If you havent' received you confirmation email yet,
        <a href="/" className="text-[#3B49DF]">
          {" "}
          click here
        </a>{" "}
        to resend it.
        <br />
        <a href="/" className="text-[#3B49DF]">
          Contact us
        </a>{" "}
        if you continue having trouble.
      </div>
    );
  };

  return (
    <main className="bg-white flex flex-row items-center justify-center h-screen w-full p-16 box-borer">
      <div className="flex flex-col gap-8 h-full px-12 py-6">
        {errors?.root && displayLoginError()}
        <div className="flex flex-col items-center justify-center gap-3">
          <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
            alt="DEV Logo"
            className="h-12 w-[60px]"
          />
          <h1 className="font-bold text-3xl">Join the DEV Community</h1>
          <p className="text-base">
            DEV Community is a community of 1,398,484 amazing developers
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-row border rounded-md p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              role="img"
              aria-hidden="true"
            >
              <path
                d="M12.38 6.615c.901 0 2.033-.61 2.707-1.423.61-.738 1.056-1.768 1.056-2.798 0-.14-.013-.28-.04-.394-1.004.038-2.21.673-2.936 1.525-.572.65-1.094 1.667-1.094 2.71 0 .152.026.304.038.354.064.013.166.026.267.026h.001ZM9.2 22c1.234 0 1.78-.827 3.319-.827 1.564 0 1.906.802 3.28.802 1.348 0 2.25-1.246 3.102-2.467.954-1.4 1.349-2.772 1.373-2.836-.089-.025-2.67-1.08-2.67-4.042 0-2.569 2.034-3.726 2.149-3.815-1.348-1.933-3.395-1.983-3.954-1.983-1.514 0-2.746.915-3.522.915-.84 0-1.946-.865-3.255-.865C6.529 6.882 4 8.942 4 12.832c0 2.416.94 4.972 2.097 6.625C7.088 20.857 7.954 22 9.2 22Z"
                fill="#000"
              ></path>
            </svg>
            <span className="flex flex-row justify-center text-center grow text-base font-medium">
              Continue with Apple
            </span>
          </div>
          <div className="flex flex-row border rounded-md p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              role="img"
              aria-hidden="true"
            >
              <rect
                x="2.5"
                y="2.5"
                width="19"
                height="19"
                rx="3"
                fill="#022830"
              ></rect>
              <path
                d="M12.326 15.382a.229.229 0 0 1 .27.131 1.804 1.804 0 0 0 2.157 1.096c.887-.254 1.467-1.129 1.316-2.042a.217.217 0 0 1 .169-.248l.745-.2a.232.232 0 0 1 .277.16l.004.015a3.084 3.084 0 0 1-2.186 3.526 2.997 2.997 0 0 1-3.631-1.92.223.223 0 0 1 .142-.289l.015-.004.722-.225Z"
                fill="#E9F0E8"
              ></path>
              <path
                d="M10.673 9.915a.229.229 0 0 1-.27-.131 1.804 1.804 0 0 0-2.157-1.096A1.818 1.818 0 0 0 6.93 10.73a.217.217 0 0 1-.168.248l-.745.2a.232.232 0 0 1-.278-.16l-.004-.015a3.084 3.084 0 0 1 2.187-3.526 2.997 2.997 0 0 1 3.63 1.92.223.223 0 0 1-.142.289l-.014.004-.723.225Z"
                fill="#4CFCA7"
              ></path>
              <path
                d="m14.936 8.584-.774.208a.232.232 0 0 1-.278-.16l-.317-1.182a.233.233 0 0 1 .16-.278l.79-.211a.232.232 0 0 0 .16-.278l-.2-.744a.223.223 0 0 0-.277-.16l-1.954.54a.233.233 0 0 0-.16.277l.258.963.316 1.181.317 1.182.012.044.88 3.283c.03.117.146.195.263.164l.73-.196a.233.233 0 0 0 .16-.277l-.73-2.729c-.024-.087.019-.161.107-.185l.862-.23a.233.233 0 0 0 .16-.278l-.2-.744c-.039-.146-.168-.221-.285-.19Zm.986-.06a.24.24 0 0 1 .116-.266.871.871 0 0 0 .428-.975.828.828 0 0 0-.839-.62.212.212 0 0 1-.23-.157l-.2-.744c-.03-.117.044-.246.157-.292l.03-.008a2.02 2.02 0 0 1 2.251 1.508 2.058 2.058 0 0 1-1.192 2.446.235.235 0 0 1-.3-.123l-.007-.03-.214-.74Z"
                fill="#FBC1F5"
              ></path>
            </svg>
            <span className="flex flex-row justify-center text-center grow text-base font-medium">
              Continue with Forem
            </span>
          </div>
          <div className="flex flex-row border rounded-md p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              role="img"
              aria-hidden="true"
            >
              <path
                d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z"
                fill="#171717"
              ></path>
            </svg>
            <span className="flex flex-row justify-center text-center grow text-base font-medium">
              Continue with GitHub
            </span>
          </div>
          <div className="flex flex-row border rounded-md p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              role="img"
              aria-hidden="true"
            >
              <path
                d="M22.162 5.656a8.385 8.385 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.73 1.86 3.48a4.168 4.168 0 0 1-1.894-.522v.052a4.185 4.185 0 0 0 3.355 4.1 4.211 4.211 0 0 1-1.89.073A4.185 4.185 0 0 0 7.97 16.65a8.395 8.395 0 0 1-6.19 1.732 11.83 11.83 0 0 0 6.409 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.497 8.497 0 0 0 2.087-2.165v-.001Z"
                fill="#1EA1F1"
              ></path>
            </svg>
            <span className="flex flex-row justify-center text-center grow text-base font-medium">
              Continue with Twitter
            </span>
          </div>
          <div>
            <hr />
            <span>OR</span>
          </div>
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="email">Email</label>
            <input
              className="border rounded-md leading-7 p-1 text-base"
              type="email"
              name="email"
              id="email"
              {...register("email", {
                required: { value: true, message: "Email is required" },
              })}
            />
            <label htmlFor="password">Password</label>
            <input
              className="border rounded-md leading-7 p-1 text-base"
              type="password"
              name="password"
              id="password"
              {...register("password", {
                required: { value: true, message: "Password is required" },
              })}
            />
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-5">
                <input type="checkbox" name="remember-me" id="remembe-me" />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <Link href="/">Forgot Password?</Link>
            </div>

            <button className="border rounded-md bg-[#3B49DF] text-white p-1 leading-10 font-medium">
              Log in
            </button>
          </form>
          <p>
            By signing in, you are agreeing to our privacy policy, terms of use
            and code of conduct.
          </p>
          <hr />
          <h5>New to DEV Community? Create account.</h5>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
