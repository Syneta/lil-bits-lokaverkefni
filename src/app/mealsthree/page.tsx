'use client'
import { RenderDish } from "../components/server/api";
import { NextButton } from "../components/button";
import { Order } from "../order";

export default function MealsPage() {
    return(
        <>
        <Order nameType="dish" />
        <RenderDish />
        <NextButton pageName="checkoutfour" name="Checkout" />
        </>
    )
}

