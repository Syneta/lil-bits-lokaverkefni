import { NextButton } from "../components/button";
import { Order } from "../order";

export default function DatePage() {
    return(
        <>
        <Order nameType="date" />
        <NextButton pageName="checkout" name="Confirm order" />
        </>
    )
}