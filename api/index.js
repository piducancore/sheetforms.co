const { append } = require("../utils/spreadsheets");
const { allowCors } = require("../utils/cors");

const handler = async ({ body }, res) => {
  const { spreadsheetId, range, values } = body;
  const { status, statusText } = await append({ spreadsheetId, range, values });
  res.json({ status, statusText });
};

module.exports = allowCors(handler);
