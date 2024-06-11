"use client";
import Link from "next/link";

import exp from "constants";
import { RenderDrink } from "../components/server/api";
import { NextButton } from "../components/button";
import { Order } from "../order";

export default function DrinkPage() {
  // move logic and rendering form renderdrink to here, keeps track of selected drinks
  // create another state to keep track of the selected drinks/ids
  // create onclick so that when nextbutton is pressed, update the context

  // step 7: when doing the redo flow, check context if drink is already selected
  return (
    <div>
      <Order nameType="drink" />
      <NextButton pageName="mealsthree" name="Choose meal" />
      <RenderDrink />
    </div>
  );
}
