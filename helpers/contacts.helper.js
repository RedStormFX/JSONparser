class ContactsHelper {
  mapContacts(contacts, companies) {
    const mappedContacts = [];

    for (let index = 0; index < contacts.length; index++) {
      const contact = contacts[index];

      if (!contact.name.full) continue;

      const company = companies[contact.metadata.company_lid];
      const mappedContact = this.mapContact(contact, company);
      mappedContacts.push(mappedContact);
    }

    return mappedContacts;
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

module.exports = new ContactsHelper();
