module.exports = async function (context, req) {
  console.log(req.body);

  return {
    target: "newMessage",
    arguments: [req.body],
  };
};
