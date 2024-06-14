'use client'

import { NextButton } from "../components/button"
import { Order } from "../order"
import { Overview } from "../overview"

export default function CheckoutFourPage() {
    return(
        <>
        <h1>Checkout Four</h1>
        <Overview />
        <Order nameType="checkout" />
        <NextButton pageName="" name="Finish order" />
        </>
    )
}