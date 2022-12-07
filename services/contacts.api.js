const fs = require("fs");
const path = require("path");

const getModel = () => {
  const filePath = path.join(__dirname, "../response.json");
  const model = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(model);
};

class ContactsAPI {
  getAll() {
    const model = getModel();
    const contacts = model.contacts.results;
    return contacts;
  }
  mapContact(contact, company) {
    return {
      contactName: contact.name.full,
      contactTitle: contact.job_title.title,
      contactLinkedInProfile: contact.social_link,
      contactLocation: `${contact.location.continent}, ${contact.location.country}`,
      companyName: company.name,
      companyWebsite: company.homepage_url,
      companySize: `${company.company_size.min}-${company.company_size.max}`,
      revenue: company.revenue_range.string,
      companyLinkedIn: company.social.linkedin,
    };
  }
}

module.exports = new ContactsAPI();
