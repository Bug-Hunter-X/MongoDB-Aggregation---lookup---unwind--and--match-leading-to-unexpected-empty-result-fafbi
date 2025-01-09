# MongoDB Aggregation Pipeline Bug

This repository demonstrates a subtle bug in a MongoDB aggregation pipeline involving `$lookup`, `$unwind`, and `$match`. The pipeline unexpectedly returns an empty array even when matching documents should exist.

## Bug Description
The aggregation pipeline is designed to join two collections, unwind the joined array, and then filter based on the existence of a field within the joined document.  However, when the target field is absent in all joined documents, the pipeline incorrectly returns an empty array instead of the expected documents.

## How to Reproduce
1.  Clone this repository.
2.  Setup a MongoDB instance.
3.  Create two collections (collectionA, collectionB) with the appropriate data.
4.  Run the script `bug.js` which will execute the faulty aggregation pipeline. You will observe an empty array as a result.
5.  Run the script `bugSolution.js` to see the corrected pipeline which handles this scenario correctly.

## Solution
The solution involves modifying the `$match` stage to handle the case where the field might be missing. Instead of checking for existence using `$exists: false`, use `$eq: null` or adapt the logic to account for absent fields. The improved version is shown in `bugSolution.js`.
