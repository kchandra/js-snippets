const nums = [1,2,3,4,5];

const add = (a,b) => a+b;

var sum = nums.reduce(add);
console.log(sum)

const reductions = [
  {
    offerRequestId: "X1-A",
    address: "123 Main St"
  },
  {
    offerRequestId: "X1-B",
    address: "567 Main St"
  },
  {
    offerRequestId: "X1-C",
    address: "123 1st Ave"
  }
]

const reductionsByOrid = reductions.reduce((acc, cv)=>{
  acc[cv.offerRequestId] = cv;
  return acc;
}, {})

console.log(reductionsByOrid);

for(const reduction of reductions) {
  console.log(reduction);
}