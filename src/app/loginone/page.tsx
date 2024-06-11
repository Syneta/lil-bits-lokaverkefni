'use client'

import { NextButton } from "../components/button"
import { Order } from "../order"

export default function LoginPage() {
    return (
        <div>
            <h1>Email</h1>
            <Order nameType="email" />
            <h2>Enjoy</h2>
            <NextButton pageName="drinkstwo" name="Choose drink" />
        </div>
    )
}