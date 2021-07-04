const { appendToSpreadsheet } = require("../utils/spreadsheets");

const handler = async ({ spreadsheetId, range, values }, res) => {
  try {
    const { status, statusText } = await appendToSpreadsheet({ spreadsheetId, range, values });
    res.json({ status, statusText });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Enable cors https://vercel.com/support/articles/how-to-enable-cors
const allowCors = (fn) => async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS,POST");
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

module.exports = allowCors(handler);
