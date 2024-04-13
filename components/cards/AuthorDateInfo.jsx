const AuthorDateInfo = (props) => {
  return (
    <div className="flex flex-row gap-3">
      <img
        src={props.userPic}
        alt="ProfilePic"
        className="border rounded-full size-8"
      />
      <div>
        <p className="text-sm font-medium">{props.user}</p>
        <p className="text-xs">{props.date}</p>
      </div>
    </div>
  );
};

export default AuthorDateInfo;
