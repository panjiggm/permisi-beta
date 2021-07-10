var Airtable = require("airtable");
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

const tableRegister = base("register");
const tableEmail = base("email");

const minifyRecords = (records) => {
  return records.map((record) => {
    return {
      id: record.id,
      fields: record.fields,
    };
  });
};

export { tableRegister, tableEmail, minifyRecords };
