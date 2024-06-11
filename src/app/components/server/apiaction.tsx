'api client'

import { OrderType } from '../../types';

const getOrders = async (): Promise<OrderType[]> => {
    const res = await fetch('http://localhost:3001/api/orders');

    if(!res.ok) {
        throw new Error('Failed to fetch orders');
    }

    const response = await res.json();
    return response;
}

const postOrder = async (order: OrderType): Promise<OrderType[]> => {
    const res = await fetch('http://localhost:3001/api/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
    });

    if(!res.ok) {
        throw new Error('Failed to post order');
    }

    const response = await res.json();
    return response;
}

const deleteOrder = async (id: string): Promise<OrderType[]> => {
    const res = await fetch(`http://localhost:3001/api/orders/${id}`, {
        method: 'DELETE',
    });

    if(!res.ok) {
        throw new Error('Failed to delete order');
    }

    const response = await res.json();
    return response;
}

const updateOrder = async (id: string, order: OrderType): Promise<OrderType[]> => {
    const res = await fetch(`http://localhost:3001/api/orders/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
    });

    if(!res.ok) {
        throw new Error('Failed to update order');
    }

    const response = await res.json();
    return response;
}

export const apiAction = {
    getOrders,
    postOrder,
    deleteOrder,
    updateOrder,
}