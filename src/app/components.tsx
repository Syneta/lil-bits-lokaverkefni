'use client'

import React, { useState } from 'react';
import { Dish, Drink, Order, ApiDish, ApiDrink } from './types';
import { FetchMeal, FetchDrink, RenderDrink } from './api';
import Image from 'next/image';
import Link from 'next/link';
import { Links } from './components/nav-links';

export const HeaderComponent = () => {
    return (
        <div className='flex flex-row gap-2 items-center align-middle'>
            <Image src='/lil-bits-logo.png' alt='logo' width={150} height={150} />
            <Links />
        </div>
    );
}