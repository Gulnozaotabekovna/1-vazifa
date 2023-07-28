import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Glavni from "./glavni";
import Obo from "./obo";
import Svyaz from "./svyaz";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <h1>Олег Марков</h1>
          <div className="navbar">
            <NavLink to="/"> Главная </NavLink>
            <NavLink to="/obo"> Обо мне </NavLink>
            <NavLink to="/svyaz"> Связаться </NavLink>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Glavni />} />
          <Route path="/obo" element={<Obo />} />
          <Route path="/svyaz" element={<Svyaz />} />
        </Routes>
        {/* <div className="box">
          <div>
            <img src="https://static.wixstatic.com/media/d78df6_4517dc1e0b1545bf84dccd915203c870.jpg/v1/fill/w_358,h_358,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d78df6_4517dc1e0b1545bf84dccd915203c870.jpg"></img>
            <img src="https://static.wixstatic.com/media/d78df6_3eea4c192eed4667a602ead5652459c5.jpg/v1/fill/w_358,h_358,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d78df6_3eea4c192eed4667a602ead5652459c5.jpg"></img>
            <img src="https://static.wixstatic.com/media/d78df6_b9747effc3074458a295cf5674f8c73c.jpg/v1/fill/w_358,h_358,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d78df6_b9747effc3074458a295cf5674f8c73c.jpg"></img>
          </div>
          <div>
            <img src="https://static.wixstatic.com/media/d78df6_9f4f79dd27814710b261e3acb931156e.jpg/v1/fill/w_239,h_358,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d78df6_9f4f79dd27814710b261e3acb931156e.jpg"></img>
            <img src="https://static.wixstatic.com/media/d78df6_afe9335eb67640c988d648f7671308e5.jpg/v1/fill/w_358,h_358,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d78df6_afe9335eb67640c988d648f7671308e5.jpg"></img>
            <img src="https://static.wixstatic.com/media/d78df6_24dc2b5011604bc7ada79cbd953a7c5a.jpg/v1/fill/w_358,h_358,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d78df6_24dc2b5011604bc7ada79cbd953a7c5a.jpg"></img>
          </div>
          <div>
            <img src="https://static.wixstatic.com/media/d78df6_914d12d64a57420c99737b9933ebe7fc.jpg/v1/fill/w_358,h_358,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d78df6_914d12d64a57420c99737b9933ebe7fc.jpg"></img>
            <img src="https://static.wixstatic.com/media/d78df6_b572be78b8984e2db58978eb21e433d7.jpg/v1/fill/w_358,h_358,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d78df6_b572be78b8984e2db58978eb21e433d7.jpg"></img>
            <img src="https://static.wixstatic.com/media/d78df6_394a136048754355ad8432b30522c761.jpg/v1/fill/w_358,h_358,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d78df6_394a136048754355ad8432b30522c761.jpg"></img>
          </div>
        </div> */}
        <footer>
          <p>
            <span>© 2035 Олег Марков. Сайт создан на</span>
            <a>Wix.com</a>
          </p>
          <div>
            <a>
              <img src="https://static.wixstatic.com/media/8d2c2a4846503b9067e2fd2f590445c2.wix_mp/v1/fill/w_19,h_19,al_c,usm_0.66_1.00_0.01,enc_auto/8d2c2a4846503b9067e2fd2f590445c2.wix_mp"></img>
            </a>
            <a>
              <img src="https://static.wixstatic.com/media/f33e5c8ff44ad726a15419f6ff97b3fd.png/v1/fill/w_19,h_19,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f33e5c8ff44ad726a15419f6ff97b3fd.png"></img>
            </a>
            <a>
              <img src="https://static.wixstatic.com/media/fe7017590fbd384c7502a64601c7b444.png/v1/fill/w_19,h_19,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fe7017590fbd384c7502a64601c7b444.png"></img>
            </a>
            <a>
              <img src="https://static.wixstatic.com/media/a0a5617532c029a9bcc4b6490606cc49.png/v1/fill/w_19,h_19,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a0a5617532c029a9bcc4b6490606cc49.png"></img>
            </a>
          </div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
