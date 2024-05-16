import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { LOGIN_ROUTE, MAIN_ROUTE } from "../utils/consts";
import logo from "../images/logo.svg";
import { Button } from "react-bootstrap";
import { PopupAdmin } from "../components/PopupAdmin";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const [popupInfo, setPopupInfo] = useState(false);
  const [popupCheck, setPopupCheck] = useState(false);
  const [popupHelp, setPopupHelp] = useState(false);

  const history = useNavigate();
  return (
    <>
      <PopupAdmin isActive={popupInfo} setIsActive={setPopupInfo}>
        <Card className="family-tree-card">
          <Card.Body className="card-body-tree">
            <Card.Title>
              Памятка о мошеннических схемах с использованием <br></br>{" "}
              телефонных звонков
            </Card.Title>
            <Card.Text></Card.Text>
            <Card.Text>
              ПАМЯТКА о признаках, по которым можно понять, что телефонный
              звонок поступил от мошенника. Мошенники в разговоре могут
              использовать следующие лексические приемы: - пользуются сложными,
              запутанными фразами, например говорят: «информация заблокирована,
              дабы недобросовестные сотрудники банка не имели возможности
              выполнять противоправные действия»; - сами придумывают термины,
              например «финансовый номер», «финансовые ячейки»; - всячески
              отговаривают собеседника от попыток посоветоваться с
              родственниками или знакомыми, пугают уголовной ответственностью за
              это. Мошенники могут использовать эти фразы, чтобы узнать
              информацию и после украсть деньги со счетов:
              <br /> <br />
              • В каких банковских структурах вы обслуживаетесь, кроме
              Сбербанка? Мы запрашиваем эту информацию, чтобы отправить запрос в
              банки-партнёры для проверки информации. <br />
              • Сообщите, какие финансовые инструменты у вас есть, какой
              остаточный баланс по ним. Это делается для того, чтобы банк мог
              компенсировать сумму списания в полном объёме. <br />
              • Скажите, вы являетесь вкладчиком нашего банка? Являетесь ли вы
              зарплатным клиентом банка, есть ли у вас другие счета? Что нужно
              помнить. Сотрудник банка видит информацию о клиенте, данные об
              открытых продуктах и операциях по ним. Он не будет спрашивать о
              наличии вкладов в банке и суммах на депозитах и картах. Тем более
              не будет узнавать номер карты, срок её действия и трёхзначный код
              с оборота. Если по телефону пытаются выспросить какие-либо
              сведения, разговор нужно прекратить, даже если номер собеседника
              определился как номер известного банка. Мошенники часто используют
              технологию подмены номера, поэтому клиент банка при входящем
              звонке видит «нужный» телефон, а не тот, с которого звонят на
              самом деле. Злоумышленники могут использовать эти фразы, чтобы
              запутать собеседника или войти в доверие: <br />
              • В случае дальнейших мошеннических операций банк будет обязан
              компенсировать разницу в 100% объёме. <br />
              • Была подана заявка на смену финансового номера. Вы данную заявку
              подтверждаете? <br />
              • Я звоню вам из технического отдела, который занимается вопросами
              по факту мошенничества. <br />
              • Мы можем подозревать, что ваши паспортные данные были
              скомпрометированы, и утечка может происходить также с других
              банковских структур, поэтому скажите, какую заявку подавать в
              банки-партнёры: обычную или экстренную? Что нужно помнить. Если по
              телефону говорят о непонятных операциях или списаниях, повторяют
              одни и те же фразы, ссылаются на сотрудничество с другими банками
              и не отвечают на уточняющие вопросы, разговор нужно прекратить.
              Лучше перезвонить в банк или написать в службу поддержки через
              банковское приложение и там задать интересующие вопросы. Чтобы
              запугать собеседника и вынудить его поделиться личными данными,
              мошенники используют такие фразы: <br />
              • Так как вы не подтверждаете ни одного из вышеперечисленных
              действий, мы можем расценивать данные действия как мошеннические.
              <br />• Если вы сообщили нам неверный баланс, то банк зачислит
              разницу в свою сторону.
              <br /> • Вся информация о вашем лицевом счёте заблокирована.{" "}
              <br /> • Сейчас вы как клиент нашего банка должны быть первым
              лицом, которое заинтересовано в сохранности ваших денежных
              средств. <br /> • Вы можете отказаться от услуги страхования, но в
              таком случае банк не несёт ответственности за списание и другие
              действия со стороны мошенников. <br /> • Я слышу голос на заднем
              фоне. Это ваши родственники? Для банка они являются третьими
              лицами и не допускаются к данной операции, согласно статье 183
              Уголовного кодекса о неразглашении банковской тайны.
            </Card.Text>
          </Card.Body>
        </Card>
      </PopupAdmin>
      <PopupAdmin isActive={popupCheck} setIsActive={setPopupCheck}>
        {" "}
        <Card className="family-tree-card">
          <Card.Body className="card-body-tree">
            <Form className="form">
              <Card.Title> Проверка номера</Card.Title>
              <Card.Text className="popup-text">
                {" "}
                Спокойно проверьте, кому принадлежит номер телефона: спамерам,
                мошенникам или компании
              </Card.Text>

              <Form.Control
                required
                className="input-phone"
                placeholder="Введите номер телефона для проверки"
              />
              <Button className="fit-content">Проверить</Button>
            </Form>
          </Card.Body>
        </Card>
      </PopupAdmin>{" "}
      <PopupAdmin isActive={popupHelp} setIsActive={setPopupHelp}>
        {" "}
        <Card className="family-tree-card">
          <Card.Body className="card-body-tree">
            <Form className="form">
              <Card.Title>Запросите помощь </Card.Title>

              <Card.Text className="popup-text">
                {" "}
                Введите свой номер телефона и получите консультацию по всем
                вопросам у квалифицированного специалиста
              </Card.Text>

              <Form.Control
                required
                className="input-phone"
                placeholder="Введите свой номер телефона"
              />
              <Button className="fit-content ">Запросить помощь</Button>
            </Form>
          </Card.Body>
        </Card>
      </PopupAdmin>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container fluid="xxl" className="container-my">
          <NavLink className="logo" to={MAIN_ROUTE}>
            <img src={logo} alt="" />
            <div className="logo-text">МОЙ ПОМОЩНИК</div>
          </NavLink>
          <Navbar.Toggle className="burger" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            style={{ justifyContent: "right" }}
            id="responsive-navbar-nav"
          >
            <Nav className="nav-inner">
              <Button
                className="header-btn"
                variant={"primary"}
                onClick={() => setPopupInfo(true)}
              >
                Памятка
              </Button>
              <Button
                className="header-btn"
                variant={"primary"}
                onClick={() => setPopupCheck(true)}
              >
                Проверка номера
              </Button>
              <Button
                className="header-btn"
                variant={"primary"}
                onClick={() => setPopupHelp(true)}
              >
                Кнопка помощи
              </Button>
            </Nav>
            <Nav className="ml-auto" style={{ alignItems: "end" }}>
              <Button
                className="header-btn"
                variant={"primary"}
                onClick={() => history(LOGIN_ROUTE)}
              >
                Авторизация
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
