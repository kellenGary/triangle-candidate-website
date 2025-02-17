import { google } from 'googleapis';

export async function GET() {
    const base64EncodedKey = process.env.ENCODED_KEY;
    const decodedKey = Buffer.from(base64EncodedKey, 'base64').toString('utf-8');
    const key = JSON.parse(decodedKey)
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            private_key: key.replace(/\\n/g, "\n")
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"]
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Define the sheet names you want to query
    const sheetNames = ["Form Responses 1", "Extra Credit", "Form Responses 4"];

    const range = "B:C";
    try {
        let allData = [];

        // Loop through each sheet and fetch data
        for (const sheetName of sheetNames) {
            const response = await sheets.spreadsheets.values.get({
                spreadsheetId: spreadsheetId,
                range: `${sheetName}!${range}`
            });

            if (response.data.values && response.data.values.length > 1) {
                // Add the sheet name to the data for identification
                const sheetData = response.data.values.slice(1).map(row => ({ ...row, sheet: sheetName }));
                allData = allData.concat(sheetData);
            }
        }

        return new Response(JSON.stringify(allData), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (e) {
        console.error(e);
        return new Response(JSON.stringify({ error: e.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}