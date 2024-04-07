const MainCard = (props) => {
  return (
    <article className="bg-white border rounded-md flex flex-col justify-center align-middle gap-5 px-5 py-7 ">
      <img src={props.cover} alt="" className="w-full max-h-80" />
      <div className="flex flex-row gap-3">
        <img
          src={props.userPic}
          alt="ProfilePic"
          className="border rounded-full size-8"
        />
        <div>
          <p className="text-sm font-medium">
            {props.user ? props.user : "User Not Found"}
          </p>
          <p className="text-xs">{props.date}</p>
        </div>
      </div>
      <div className="px-14 flex flex-col gap-5">
        <div>
          <h3 className="text-xl font-bold">{props.title}</h3>
          <p className="text-base">{props.content}</p>
        </div>
        <div>{props.tags}</div>
        <div className="flex flex-row gap-6">
          <div className="flex flex-row gap-2">
            <span class="crayons_icon_container">
              <img
                src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                width="18"
                height="18"
              />
            </span>
            <span class="crayons_icon_container">
              <img
                src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
                width="18"
                height="18"
              />
            </span>
            <span class="crayons_icon_container">
              <img
                src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                width="18"
                height="18"
              />
            </span>
            <span class="crayons_icon_container">
              <img
                src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                width="18"
                height="18"
              />
            </span>
            <span>104 reactions</span>
          </div>
          <div>Comments</div>
          <div>Min Read</div>
        </div>
      </div>
    </article>
  );
};

export default MainCard;
