import React from "react";
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import Loader from "../components/Loader/Loader";
const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <>
      <Container
        className="d-flex justify-content-center align-items-center auth-container"
      >
        <Card style={{ width: 600 }} className="p-5">
          <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
          <Form
            className="d-flex flex-column"
          >
            
            {!isLogin && (
              <>
                <Form.Control
                  required
                  className="mt-3"
                  placeholder="Введите ваше имя"
                />
                <Form.Control
                  required
                  className="mt-3"
                  placeholder="Введите вашу фамилию"
                />
              </>
            )}

            <Form.Control
              required
              className="mt-3"
              placeholder="Введите ваш email..."
            />
            <Form.Control
              required
              className="mt-3"
              placeholder="Введите ваш пароль..."
              type="password"
            />

            <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
              {isLogin ? (
                <div className="auth-message">
                  Нет аккаунта?{" "}
                  <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                </div>
              ) : (
                <div className="auth-message">
                  Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                </div>
              )}
              <Button>{isLogin ? "Войти" : "Регистрация"}</Button>
            </Row>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export default Auth;
