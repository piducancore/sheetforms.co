# append-to-sheet

This is a (Vercel) serverless function to append stuff to a spreadsheet using Google Sheets API.

## Usage

This function accepts a `POST` request with 3 arguments:

- `spreadsheetId` (string) _optional_ (defaults to `SPREADSHEET_ID` environment variable)
- `range` (string) _optional_ (defaults to `A1`)
- `values` (array) _required_

## Deploy to Vercel

Use the button below to easily deploy to Vercel and configure with your own `GOOGLE_CLIENT_EMAIL`, `GOOGLE_PRIVATE_KEY` and an optional `SPREADSHEET_ID` environment variables.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fpiducancore%2Fappend-to-sheet&env=API_KEY,SERVICE_URL)
