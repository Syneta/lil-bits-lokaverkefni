'use client'

import React, { useState } from 'react';

interface Dish {
    id: number;
    name: string;
    price: number;
}

interface Drink {
    id: number;
    name: string;
    price: number;
}

interface OrderItem {
    item: Dish | Drink;
    quantity: number;
}

const OrderComponent: React.FC = () => {
    const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

    const addItemToOrder = (item: Dish | Drink, quantity: number) => {
        // Create a new order item and add it to the existing order
        const newOrderItem: OrderItem = { item, quantity };
        setOrderItems((prevOrder) => [...prevOrder, newOrderItem]);
    };

    // You can add other methods (e.g., removeItem, clearOrder) here

    return (
        <div>
            <h1>Your Order</h1>
            <ul>
                {orderItems.map((orderItem, index) => (
                    <li key={index}>
                        {orderItem.item.name} (Quantity: {orderItem.quantity})
                    </li>
                ))}
            </ul>
            {/* Add UI components for selecting dishes and drinks */}
            {/* Example: <DishSelector addItem={addItemToOrder} /> */}
            {/* Example: <DrinkSelector addItem={addItemToOrder} /> */}
        </div>
    );
};

export default OrderComponent;
