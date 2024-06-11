'use client'

import React, { useState, useEffect } from 'react';
import { apiAction } from './components/server/apiaction';
import { OrderType } from './types';



export const Overview = () => {
    const [orderData, setOrderData] = useState<OrderType[]>([]);
    const [newOrderItem, setNewOrderItem] = useState<OrderType | null>(null);

    useEffect(() => {
        // Fetch order items from the server
        const fetchOrder = async () => {
            try {
                const fetchedOrder = await apiAction.getOrders();
                setOrderData(fetchedOrder);
            } catch (e) {
                console.error('Error fetching expenses:', e);
            }
        };

        fetchOrder(); // Call the fetchOrder function
    }, []); // Empty dependency array to run once on component mount
    if (!orderData) {
        return <div>Loading order...</div>
    }

    return (
        <div>
            <h1>Order Details</h1>
            {orderData.map((order) => (
                <div key={order.email}>
                    <p>Email: {order.email}</p>
                    <p>Count: {order.count}</p>
                    <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                    <h3>Dish: {order.dish.name}</h3>
                    <p>Price: {order.dish.price} ISK</p>
                    <img width={200}src={order.dish.imageSource} alt={order.dish.name} />
                    {order.drinks.map((drink) => (
                        <div key={drink.id}>
                            <h4>{drink.name}</h4>
                            <p>Brewer: {drink.brewer}</p>
                            <p>Category: {drink.category}</p>
                            <p>Description: {drink.description}</p>
                            <p>Price: {drink.price} ISK</p>
                            <img width={200} src={drink.imageSource} alt={drink.name} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
