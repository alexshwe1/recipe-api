exports = function({ query, headers, body}, response) {
    const result = context.services
    .get("mongodb-atlas")
    .db("recipes-db")
    .collection("recipes")
    .insertOne(JSON.parse(body.text())); // TODO: add input validation
    
    return result;
};
