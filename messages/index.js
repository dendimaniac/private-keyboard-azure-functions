module.exports = async function (context, req) {
    return {
      "target": "newMessage",
      "arguments": [ req.body ]
    };
  };