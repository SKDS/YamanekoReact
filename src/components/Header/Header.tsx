import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <div className="container-header">
          <div className="logo">
            <a href="/">
              <p>YAMANEKO</p>
            </a>
          </div>
          <div className="search">
            <input type="search" name="" id="" placeholder="Поиск..." />
          </div>
          <nav className="navigation">
            <ul>
              <li>
                <Link to="/project">Проект</Link>
              </li>
              <li>
                <Link to="/releases">Релизы</Link>
              </li>
              <li>
                <a href="/support">Поддержка</a>
              </li>
              <li className="dropdown">
                <button className="dropbtn">
                  Социальные сети
                  <img className="dropbtn" src="../../data/assets/icons/select_button.svg" alt="" />
                </button>
                <div id="myDropdown" className="dropdown-content">
                  <a href="#">Instagram</a>
                  <a href="#">Discord</a>
                  <a href="#">Telegram</a>
                  <a href="#">Youtube</a>
                </div>
              </li>
            </ul>
          </nav>
          <div className="sign-in">
            Войти
            {/* <!-- <p><a className="open_auth" href="#open">ВОЙТИ</a></p> -->
                <!-- Временная кнопка для завершения сессии -->
                <p><a href="../../private/lib/exit.php">выйти</a></p>
                <?php
                    switch(isset($_SESSION['logged_in'])){
                        case 0 : {
                            // Если не авторизован - кнопка войти
                            echo("<p><a href=\"sign-in\">ВОЙТИ</a></p>");
                            break;
                        }
                        case 1 : {
                            //для удобства нажатие на кнопку переводит в админку
                            echo("<p><a href=\"admin\">АВТОРИЗОВАН</a></p>");
                            break;
                        }
                        default : {
                            echo ("<p><a href=\"sign-in\">ВОЙТИ</a></p>");
                        }
                    }
                ?> */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
