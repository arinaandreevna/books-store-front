import CardGroup from "react-bootstrap/CardGroup"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

import "./catalog.css"

const Catalog = () => {
  return (
    <>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={require("../assets/goods/1.png")} style={{ width: '50%', margin: 'auto'}} />
          <Card.Body>
            <Card.Title>Идиот</Card.Title>
            <Card.Text>
              Ф.М. Достоевский
            </Card.Text>
            <Card.Text>
              300 рэ
            </Card.Text>
            <Button variant="primary">Добавить в корзину</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={require("../assets/goods/2.png")} style={{ width: '50%', margin: 'auto'}} />
          <Card.Body>
            <Card.Title>Преступление и наказание</Card.Title>
            <Card.Text>
            Ф.М. Достоевский{" "}
            </Card.Text>
            <Card.Text>
              300 рэ
            </Card.Text>
            <Button variant="primary">Добавить в корзину</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={require("../assets/goods/3.png")} style={{ width: '50%', margin: 'auto'}} />
          <Card.Body>
            <Card.Title>Мастер и Маргарита</Card.Title>
            <Card.Text>
              М.А. Булгаков{" "}
            </Card.Text>
            <Button variant="primary">Добавить в корзину</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={require("../assets/goods/4.png")} style={{ width: '50%', margin: 'auto'}} />
          <Card.Body>
            <Card.Title>Удушье</Card.Title>
            <Card.Text>
              Чак Паланик{" "}
            </Card.Text>
            <Button variant="primary">Добавить в корзину</Button>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={require("../assets/goods/5.png")} style={{ width: '50%', margin: 'auto'}} />
          <Card.Body>
            <Card.Title>Жизнь взаймы, или у неба любимчиков нет</Card.Title>
            <Card.Text>
              Эрих Мария Ремарк{" "}
            </Card.Text>
            <Button variant="primary">Добавить в корзину</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={require("../assets/goods/6.png")} style={{ width: '50%', margin: 'auto'}} />
          <Card.Body>
            <Card.Title>Великий Гэтсби</Card.Title>
            <Card.Text>
              Фрэнсис Скотт Фицжеральд{" "}
            </Card.Text>
            <Button variant="primary">Добавить в корзину</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={require("../assets/goods/7.png")} style={{ width: '50%', margin: 'auto'}} />
          <Card.Body>
            <Card.Title>Мы</Card.Title>
            <Card.Text>
              Е.И. Замятин{" "}
            </Card.Text>
            <Button variant="primary">Добавить в корзину</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={require("../assets/goods/8.jpg")} style={{ width: '50%', margin: 'auto'}} />
          <Card.Body>
            <Card.Title>Сияние</Card.Title>
            <Card.Text>
              Стивен Кинг{" "}
            </Card.Text>
            <Button variant="primary">Добавить в корзину</Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
};

export default Catalog;
