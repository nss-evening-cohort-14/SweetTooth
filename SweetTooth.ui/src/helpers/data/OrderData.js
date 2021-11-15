import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getOrderItems = (orderId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders/${orderId}orderItems`)
    .then((res) => {
      if (res.data) {
        console.warn(res.data);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const addOrderItem = (orderItem) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/ordersItems`, orderItem)
    .then(() => getOrderItems(orderItem.orderId).then(resolve))
    .catch((error) => reject(error));
});
// [HttpPost("orderItems")]
// public IActionResult AddOrderItem(OrderItem item)
// {
//     _repo.AddOrderItem(item);
//     return Created($"/api/orders/{item.Id}", item);
// }

const updateOrderItem = (orderItem) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/orderItems/update/${orderItem.id}`, orderItem)
    .then(() => getOrderItems(orderItem.orderId).then(resolve))
    .catch((error) => reject(error));
});
// [HttpPut("orderItems/update/{orderItemId}")]
// public IActionResult UpdateOrderItem(Guid orderItemId, OrderItem orderItem)
// {
//     var orderItemToUpdate = _repo.GetOrderItemByOrderItemId(orderItemId);

//     if (orderItemToUpdate == null)
//     {
//         return NotFound($"Could not find Order Item with the id {orderItemId} for updating");
//     }

//     var updatedOrderItem = _repo.UpdateOrderItem(orderItemId, orderItem);

//     return Ok(updatedOrderItem);

const getSingleOrder = (orderId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders/${orderId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getOrderByUserId = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders/user/${userId}`)
    .then((response) => {
      if (response.data) {
        resolve(response.data);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const getUnprocessedOrderByUserId = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders/unprocessed/${userId}`)
    .then((response) => {
      if (response.data) {
        resolve(response.data);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const getOrders = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  getSingleOrder,
  getOrderByUserId,
  getOrders,
  getUnprocessedOrderByUserId,
  getOrderItems,
  addOrderItem,
  updateOrderItem
};
