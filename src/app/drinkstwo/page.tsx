'use client'
import Link from 'next/link';

import exp from "constants";
import { RenderDrink } from "../components/server/api";
import { NextButton } from "../components/button";
import { Order } from '../order';

export default function DrinkPage() {
    return (
        <div>
            <Order nameType='drink' />
            <NextButton pageName="mealsthree" name="Choose meal" />
            <RenderDrink />
        </div>
    )
}

