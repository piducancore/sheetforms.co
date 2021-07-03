const { appendToSpreadsheet } = require("../utils/spreadsheets");

module.exports = async (req, res) => {
  try {
    const { spreadsheetId, range, values } = JSON.parse(req.body);
    await appendToSpreadsheet({ spreadsheetId, range, values });
    res.status(200).json({ data: "success" });
  } catch (error) {
    res.status(500).json({ error });
  }
};
