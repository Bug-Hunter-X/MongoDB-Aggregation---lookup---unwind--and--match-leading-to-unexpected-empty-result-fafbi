```javascript
const pipeline = [
  {
    $lookup: {
      from: "collectionB",
      localField: "_id",
      foreignField: "foreignKey",
      as: "result",
    }
  },
  {
    $unwind: "$result" 
  },
  {
    $match: {
      "result.someField": null,
    }
  }
];

const result = await collectionA.aggregate(pipeline).toArray();
```