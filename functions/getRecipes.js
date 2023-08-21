exports = function({ query, headers, body}, response) {
    const docs = context.services
      .get("mongodb-atlas")
      .db("recipes-db")
      .collection("recipes")
      .find({})
      .toArray();
    
    return docs;
};
