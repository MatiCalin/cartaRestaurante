import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { productos } from "../data";

export const CardTwo = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  const array = [
    {
      img: "https://eldiariony.com/wp-content/uploads/sites/2/2022/09/Hamburguesa-con-queso-shutterstock_215936923.jpg?quality=75&strip=all&w=1200",
      title: "Extreme Burguer",
      text: "Hamburguesa con doble carne, doble cheddar, doble bacon, cebolla crispy y salsa barbacoa.",
      text2: "2x$2500",
      button: "Comprar",
    },
    {
      img: "https://www.portablepress.com/wp-content/uploads/2017/10/Fast-food-combo-meal-1.jpg",
      title: "Combo Big Burguer",
      text: "Hamburguesa con doble carne, doble chedar, lechuga, tomate. Salsa a eleccion. Papas y bebida.",
      text2: "$1800",
      button: "Comprar",
    },
    {
      img: "https://todoenuno.app/wp-content/uploads/2022/04/Hamburguesas-2.jpg",
      title: "Hamburguesa Simple",
      text: "Hamburguesa simple de carne, lechuga, tomate, queso y salsa barbacoa.",
      text2: "$1000",
      button: "Comprar",
    },
    {
      img: "http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2013/05/08/4166/0511GT-TO-pizza-caprese-628.jpg?width=768&height=639&mode=crop&quality=75&anchor=middlecenter",
      title: "Pizza Caprese 6 Porciones",
      text: "Pizza con salsa de tomate, queso, rodajas de tomate cherry y albahaca.",
      text2: "$1200",
      button: "Comprar",
    },
    {
      img: "https://morixe.com.ar/files/recetas/thumbs/papascheddarmorixe03.jpg",
      title: "Papas Grill",
      text: "Porcion mediana de papas fritas con bacon y queso chedar.",
      text2: "$900",
      button: "Comprar",
    },
    {
      img: "https://st3.depositphotos.com/3028293/15315/i/600/depositphotos_153159806-stock-photo-chicken-nuggets-and-french-fries.jpg",
      title: "Nuggets de Pollo",
      text: "Porcion de 10 nuggets de pollo, con dos salsas a eleccion y papas fritas.",
      text2: "$1200",
      button: "Comprar",
    },
  ];

  return (
    <div className="CardTwo-Lines">
      <>
        <div>
          <Row xs={1} md={3} className="g-4" style={{ margin: "5rem" }}>
            {array.map((food) => (
              <Col className="cardtwo-container">
                <Card className="card-food border-light secondary" bg="dark">
                  <Card.Img
                    className="cardimage flex-shrink-0 img-fluid rounded"
                    variant="top"
                    src={food.img}
                  />
                  <Card.Body className="card-body">
                    <Card.Title>{food.title}</Card.Title>
                    <Card.Text> {food.text} </Card.Text>
                    <Card.Text> {food.text2} </Card.Text>
                    <Button variant="light">
                      {" "}
                      <a
                        href="http://localhost:3000/menu"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        {" "}
                        {food.button}{" "}
                      </a>{" "}
                    </Button>
                  </Card.Body>
                </Card>
                {productos.map((menu) => (
                  <Col key={menu.id}>
                    {menu.promotion ? (
                      <Card
                        className="card-food border-light secondary"
                        bg="dark"
                      >
                        <div className="offMenu">
                          {menu.promotion ? `${menu.off}%` : ""}
                        </div>
                        <Card.Img
                          className="cardimage flex-shrink-0 img-fluid rounded"
                          variant="top"
                          src={menu.img}
                        />
                        <Card.Body className="card-body">
                          <Card.Title>{menu.title}</Card.Title>
                          <Card.Text> {menu.description} </Card.Text>
                          <Card.Text>
                            {menu.promotion
                              ? `$${(menu.price * menu.off) / 100}`
                              : menu.price}
                          </Card.Text>
                          <Button
                            variant="light"
                            onClick={() => (window.location = "menu")}
                          >
                            Ir a menú
                          </Button>
                        </Card.Body>
                      </Card>
                    ) : (
                      ""
                    )}
                  </Col>
                ))}
              </Col>
            ))}
          </Row>
        </div>
      </>
    </div>
  );
};
