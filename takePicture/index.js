module.exports = async function (context, req) {
  console.log(req.body);

  return {
    target: "takePicture",
    arguments: [req.body],
  };
};
