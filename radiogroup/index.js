module.exports = async function (context, req) {
  console.log(req.body);

  return {
    target: "newCheckRadio",
    arguments: [req.body],
  };
};
