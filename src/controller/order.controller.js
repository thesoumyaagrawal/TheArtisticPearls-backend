const orderService = require("../services/order.service");

const createOrder = async (req, res) => {
    const user = req.user;
    try {
        let createdOrder = await orderService.createOrder(user, req.body);
        return res.status(201).send(createdOrder);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

const findOrderById = async (req, res) => {
    const user = req.user;
    try {
        let createdOrder = await orderService.findOrderById(user, req.body);
        return res.status(200).send(createdOrder);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

const orderHistory = async (req, res) => {
    const user = req.user;
    try {
        let userOrderHistory = await orderService.orderHistory(user);
        return res.status(200).send(userOrderHistory);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

module.exports = {
    createOrder,
    findOrderById,
    orderHistory,
};
