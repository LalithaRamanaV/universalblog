import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Universal</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmxvZ3xlbnwwfHwwfHw%3D&w=1000&q=80"
        alt=""
      />
    </div>
  );
}
