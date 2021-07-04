const { google } = require("googleapis");

async function appendToSpreadsheet({ spreadsheetId, range, values }) {
  try {
    const auth = await google.auth.getClient({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    const { spreadsheets } = google.sheets({ version: "v4", auth });

    const result = await spreadsheets.values.append({
      spreadsheetId: spreadsheetId || process.env.SPREADSHEET_ID,
      range: range || "A1",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      resource: { values: [values] },
    });

    return result;
  } catch (err) {
    throw err;
  }
}

module.exports = { appendToSpreadsheet };
