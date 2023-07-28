import pilot from "./bfdf85_bb32704cfdf641b78b2207124c945fc8.webp";
import "./App.css";
function svyaz() {
  return (
    <div className="box2">
      <img className="pilot" src={pilot}></img>
      <h2>Свяжитесь мо мной</h2>
      <p>info@mysite.com | Телефон: +7 (945) 000-00-00</p>
      <input placeholder="Имя"></input>
      <input placeholder="Эл. почта"></input>
      <input placeholder="Телефон"></input>
      <textarea placeholder="Добавьте сообщение..."></textarea>
      <p className="share">Отправить</p>
    </div>
  );
}
export default svyaz;
