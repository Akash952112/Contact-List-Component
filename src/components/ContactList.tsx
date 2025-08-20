import { useState } from "react";
import "./ContactList.css";
// used own static data as no json was provided
import CONTACT_DATA from "../constant";

const ContactList = () => {
  const [search, setSearch] = useState("");
  const [contactList, setContactList] = useState(CONTACT_DATA);

  const handleSearch = (searchTerm: string) => {
    setSearch(searchTerm);
    if (searchTerm == "") {
      setContactList(CONTACT_DATA);
      return;
    }
    const updatedList = CONTACT_DATA.filter((contact) => {
      return contact.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setContactList(updatedList);
  };

  return (
    <div>
      <h1>My Contacts</h1>
      <input
        name="searchBar"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        className="input"
        placeholder="Search"
      />
      <div className="container">
        {contactList.map((data) => (
          <div className="contact">
            <img src={data.avatar} className="contactAvatar" />
            <div className="contactDetail">
              <div className="contactName">
                {data.name.split("").map((char) => (
                  <span
                    className={
                      search.toLowerCase().includes(char.toLowerCase())
                        ? "heighLightText"
                        : ""
                    }
                  >
                    {char}
                  </span>
                ))}
              </div>
              <div>{data.number}</div>
            </div>
          </div>
        ))}
        {contactList.length == 0 && search && <div>No contacts found</div>}
      </div>
    </div>
  );
};

export default ContactList;
