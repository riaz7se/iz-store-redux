const num = [175, 50, 25];

const final = num.reduce((prev, num) => {
  return prev - num;
});

// console.log("Final: ", final);

function wrapper() {
  console.log("wraper..1");
  return () => {
    console.log("Inside thunk..1");
  };
}
wrapper()();

console.log(nanoid())