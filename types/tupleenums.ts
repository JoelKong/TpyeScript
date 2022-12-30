const color: [number, number, number] = [255, 0, 255];

type Responsee = [number, string];
const goodRes: Responsee = [200, "OK"];

//Enums
const enum OrderStatus {
  PENDING = 10,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const myStatus = OrderStatus.DELIVERED;
function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
  ERROR = 234,
}

ArrowKeys.LEFT;
