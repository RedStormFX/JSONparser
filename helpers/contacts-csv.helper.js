const os = require("os");
const path = require("path");
const csvWriter = require("csv-writer");

const desktopDir = path.join(os.homedir(), "Desktop");

class ContactsCsvHelper {
  writeCsv(records) {
    const csvWriter = this.createCsvWriter();

    csvWriter.writeRecords(records).then(() => console.log("...Done"));
  }

  createCsvWriter() {
    return csvWriter.createObjectCsvWriter({
      path: `${desktopDir}/contacts-info.csv`,
      header: [
        { id: "contactName", title: "Contact Name" },
        { id: "contactTitle", title: "Contact Title" },
        { id: "contactLinkedInProfile", title: "Contact LinkedIn Profile" },
        { id: "contactLocation", title: "Contact Location" },
        { id: "companyName", title: "Company Name" },
        { id: "companyWebsite", title: "Company Website" },
        { id: "companySize", title: "Company Size" },
        { id: "revenue", title: "Revenue" },
        { id: "companyLinkedIn", title: "Company LinkedIn" },
      ],
    });
  }
}

module.exports = new ContactsCsvHelper();
