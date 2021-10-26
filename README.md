# sheetforms.co

An open API to save your forms data to a [Google Spreadsheet](https://docs.google.com/spreadsheets).

## How to use?

Make a `POST` request to `https://sheetforms.co/api` like this:

```js
async function handleSubmit() {
  await fetch("https://sheetforms.co/api", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      spreadsheetId: "YOUR_SPREADSHEET_ID",
      values: ["ADD", "SOME", "DATA", "HERE"],
    }),
  });
}
```

And remember to set [sheetforms.co](https://sheetforms.co) as `Editor` in your spreadsheet sharing options.

```sh
# sheetforms.co client email
sheetforms@sheetforms.iam.gserviceaccount.com
```

🥳 That's it.

## Example

Visit [sheetforms.co](https://sheetforms.co) for a live example.

## API

The API takes a `POST` request with the following `body`:

- `spreadsheetId`: The ID of the spreadsheet to save the data to.
- `values`: An array of values to save to the spreadsheet.
- `range`: (_optional_) The range to save the data to.

## Deploy your own

This repository contains a Gatsby site and a serverless function (to communicate with the Google Sheets API), both hosted on Vercel.

Use the button below to easily deploy a copy to Vercel, and configure with your own `GOOGLE_CLIENT_EMAIL`, `GOOGLE_PRIVATE_KEY` and an optional `SPREADSHEET_ID` environment variables.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fpiducancore%2Fsheetforms.co&env=GOOGLE_CLIENT_EMAIL,GOOGLE_PRIVATE_KEY,SPREADSHEET_ID)
