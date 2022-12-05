import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Uniblog</span>
        <span className="headerTitleSm">Let's share experiences through</span>
      </div>
      <img
        className="headerImg"
        src="/blog.jpg"
        alt=""
      />
    </div>
  );
}
