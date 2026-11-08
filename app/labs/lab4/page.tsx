"use client";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";

export default function Lab4() {
  const sayHello = (message: string) =>
  {
    alert(message);
  }
  const sayMyName = () =>
  {
    alert("Yevgeniy");
  }
  const sampleFromParent = () =>
  {
    alert("Sample from parent");
  }
  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello} message="Hello from Lab 4" theSecondFunction={sayMyName} theOtherFunction={sampleFromParent}/>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
    </div>
  );
}