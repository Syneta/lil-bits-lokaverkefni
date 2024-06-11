'use client'

import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { OrderContext } from './ordercontext';
import { Dish, Drink, OrderType } from './types';
import { apiAction } from './components/server/apiaction';

export const Order = ({ nameType }: { nameType: string }) => {
    const order = useContext(OrderContext);

    // Initialize orderData from localStorage or an empty object
    const initialOrderData = JSON.parse(localStorage.getItem('orderData') ?? '') || {
        email: '',
        drink: '',
        dish: '',
    };

    const [orderData, setOrderData] = useState(initialOrderData);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setOrderData((prevOrderData: OrderType) => ({
            ...prevOrderData,
            [name]: value,
        }));
    };

    // Save orderData to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('orderData', JSON.stringify(orderData));
    }, [orderData]);

    return (
        <OrderContext.Provider value={orderData}>
            <div>
                <input
                    type="text"
                    name={nameType}
                    placeholder={'Enter ' + nameType}
                    value={orderData[nameType as keyof typeof orderData]}
                    onChange={handleInputChange}
                />
                <h1>Your Order:</h1>
                <ul>
                    <li>Email: {orderData.email}</li>
                    <li>Drink: {orderData.drink}</li>
                    <li>Meal: {orderData.dish}</li>
                </ul>
            </div>
        </OrderContext.Provider>
    );
};
/*
const OrderComponent: React.FC = () => {
    const [orderItems, setOrderItems] = useState<OrderType[]>([]);
    const [newOrderItem, setNewOrderItem] = useState<OrderType | null>(null);

    const fetchOrder = async () => {
        // Fetch order items from the server
        try {
            const fetchedOrder = await apiAction.getOrders();
            setOrderItems(fetchedOrder);
        } catch (e) {
            console.error('Error fetching expenses:', e);
        }
    }
    if (!orderItems) {
        return <div>Loading order...</div>
    }
    
    const handleAddEmail = (email: string) => {
        setNewOrderItem((prevOrderItem: OrderType | null) => ({
            ...(prevOrderItem || {}),
            email: email,
            id: prevOrderItem?.id || '',
        }));
    }

    const handleAddDrink = (drink: Drink) => {
        setNewOrderItem((prevOrderItem: OrderType | null) => ({
            ...(prevOrderItem || {}),
            drinks: [...(prevOrderItem?.drinks || [])],
            id: prevOrderItem?.id || '',
        }));
    }

    const handleAddDish = (dish: Dish) => {
        setNewOrderItem((prevOrderItem: OrderType | null) => ({
            ...(prevOrderItem || {}),
            dish: dish,
            id: prevOrderItem?.id || '',
        }));
    }

    const handleAddCount = (count: number) => {
        setNewOrderItem((prevOrderItem: OrderType | null) => ({
            ...(prevOrderItem || {}),
            count: count,
            id: prevOrderItem?.id || '',
        }));
    }

    const handleAddDate = (date: Date) => {
        setNewOrderItem((prevOrderItem: OrderType | null) => ({
            ...(prevOrderItem || {}),
            date: date,
            id: prevOrderItem?.id || '',
        }));
    }

    const handleAdd = async (order: OrderType) => {
        try {
            const newOrder: OrderType = {
                id: order.id,
                email: order.email,
                dish: order.dish,
                drinks: order.drinks,
                count: order.count,
                date: order.date
            }
            await apiAction.postOrder(newOrder);

            await fetchOrder();

            setNewOrderItem({count: 0, date: new Date(), dish: {}, drinks: [], email: '', id: ''});

        } catch (e) {
            console.error('Error adding order:', e);
        }
    }
    const handleDelete = async (id: string) => {
        try {
            await apiAction.deleteOrder(id);
            await fetchOrder();
        }catch (e) {
            console.error('Error deleting order:', e);
        }
    }

    return (
        <div>
            <h1>Order</h1>
            <Order nameType="email" />
            <Order nameType="drink" />
            <Order nameType="dish" />
            <button onClick={() => handleAdd(newOrderItem)}>Add Order</button>
            <ul>
                {orderItems.map((order: OrderType) => (
                    <li key={order.id}>
                        <p>Email: {order.email}</p>
                        <p>Drink: {order.drinks.map((drink) => drink.strDrink).join(', ')}</p>
                        <p>Meal: {order.dish.strMeal}</p>
                        <p>Count: {order.count}</p>
                        <p>Date: {order.date}</p>
                        <button onClick={() => handleDelete(order.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
    )
};

export default OrderComponent;
*/