const fsPromises = require("fs").promises;
async function showRoute(req, res, next) {
  const method = req.method;
  const url = req.protocol + "://" + req.get("host");

  const string = `${url}  >>  ${method}  >>  ${req.originalUrl}`;
  console.log(string);
  const rawData = await fsPromises.readFile(
    "./middlewares/route.json",
    "utf-8"
  );
  let data;
  try {
    data = JSON.parse(rawData);
  } catch (err) {
    data = [];
  }
  const newData = [...data, string];
  await fsPromises.writeFile(
    "./middlewares/route.json",
    JSON.stringify(newData)
  );
  next();
}

module.exports = showRoute;
