import React from "react";
import { Form, Button } from "antd";
import { Headers, Footer, SectionWrap, Forms } from "../components";

const Registration = () => {
  return (
    <>
      <Headers />
      <SectionWrap>
        <div className="registration_content">
          <p className="title">Регистрация</p>

          <Forms />

          <div className="reg_inf">
            <p className="reg_title">Соглашение на обработку личных данных!</p>
            <br />
            <p>
              Статья́ — это жанр журналистики, в котором автор ставит задачу
              проанализировать общественные ситуации, процессы, явления, прежде
              всего с точки зрения закономерностей, лежащих в их основе.
              <br />
              <br />
              Такому жанру как статья присуща ширина практических обобщений,
              глубокий анализ фактов и явлений, четкая социальная
              направленность[источник не указан 3543 дня]. В статье автор
              рассматривает отдельные ситуации как часть более широкого явления.
              Автор аргументированно пишет о своей точке зрения.
              <br />
              <br />В статье выражается развернутая обстоятельная
              аргументированная концепция автора или редакции по поводу
              актуальной социологической проблемы. Также в статье журналист
              обязательно должен интерпретировать факты (это могут быть цифры,
              дополнительная информация, которая будет правильно расставлять
              акценты и ярко раскрывать суть вопроса).
            </p>
          </div>

          <div className="reg_check">
            <input type="checkbox" id="reg_check" />
            <label for="reg_check">Я согласен на обаботку личных данных!</label>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                <p>Зарегистрироваться</p>
              </Button>
            </Form.Item>
          </div>
        </div>
      </SectionWrap>
      <Footer />
    </>
  );
};

export default Registration;
