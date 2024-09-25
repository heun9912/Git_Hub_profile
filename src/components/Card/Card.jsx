import "./Card.css";
function Card({
  title,
  content,
  backgroundColor,
  textColor,
  img,
  array = ["rea"],
}) {
  return (
    <div
      className="card"
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      <img src={img}></img>
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
      <p>{array[0]}</p>
    </div>
  );
}
// 하나의(단일의) 함수만 내부로 보낼때 defallt
export default Card;
