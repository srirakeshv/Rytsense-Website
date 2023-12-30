import React, { Fragment, useState } from "react";
import countryCodes from "../../../country-codes";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import emailjs from "emailjs-com";

const people = [
  "Select Range",
  "Between $10k to $50k",
  "Between $50k to $100k",
  "More than $100k",
];

const ContactForm = () => {
  const sendEmail = (templateParams) => {
    emailjs
      .send(
        // Your service ID, template ID, and user ID from EmailJS dashboard
        "service_n0jdj6l",
        "template_ilx8g3o",
        templateParams,
        "9h4HjBNDR3YPES61s"
      )
      .then(
        (response) => {
          console.log("Email sent:", response.status, response.text);
          setIsSubmitted(true); // Set submitted state to show success message
          resetForm(); // Reset the form after successful submission
        },
        (error) => {
          console.error("Email could not be sent:", error);
          // Handle error state or show an error message
        }
      );
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactnumber: "",
    messages: "",
  });
  const [selected, setSelected] = useState(countryCodes.countries[0]);
  const [selected1, setSelected1] = useState(people[0]);

  const [selectedCountry, setSelectedCountry] = useState(
    countryCodes.countries[0]?.code || ""
  );

  const [originalSelectedCountry, setOriginalSelectedCountry] = useState(
    countryCodes.countries[0]?.code || ""
  );
  const [selectedRange, setSelectedRange] = useState("");
  const [originalSelectedRange, setOriginalSelectedRange] = useState("");
  const [rangeText, setRangeText] = useState("");

  const resetForm = () => {
    // console.log("Before reset:", formData);
    setFormData((prevFormData) => {
      // console.log("Before reset:", prevFormData);

      const updatedFormData = {
        name: "",
        email: "",
        contactnumber: "",
        messages: "",
        skype: "",
        file: "",
        ranges: people[0],
      };

      // console.log("After reset:", updatedFormData);

      return updatedFormData;
    });
    setSelectedCountry(originalSelectedCountry);
    setSelectedRange(originalSelectedRange);
    console.log("After reset:", formData);
    setErrorMessages({
      name: "",
      email: "",
      contactnumber: "",
      messages: "",
    });
  };

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log("Updating state:", name, value);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    if (value.trim() === "") {
      setErrorMessages((prevErrorMessages) => ({
        ...prevErrorMessages,
        [name]: `${
          name.charAt(0).toUpperCase() + name.slice(1)
        } cannot be empty.`,
      }));
    } else {
      setErrorMessages((prevErrorMessages) => ({
        ...prevErrorMessages,
        [name]: "",
      }));
    }
    if (name === "ranges") {
      setSelectedRange(value);
    }
    //
    if (name === "contactnumber") {
      if (!/^\d+$/.test(value)) {
        // Set error message for invalid phone number
        setErrorMessages((prevErrorMessages) => ({
          ...prevErrorMessages,
          [name]: "Invalid phone number.",
        }));
      } else {
        // Reset error message and update formData without concatenation
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        setErrorMessages((prevErrorMessages) => ({
          ...prevErrorMessages,
          [name]: "",
        }));
      }
    } else {
      // For other inputs, use the value as is
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    if (name === "ranges") {
      setSelectedRange(value); // Update the selected range
    }
  };
  const concatenateCountryCode = () => {
    return `${selectedCountry}${formData.contactnumber}`;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrorMessages = {};
    const fullContactNumber = concatenateCountryCode();
    // console.log("Full Contact Number:", fullContactNumber);
    // Check each field for emptiness
    Object.entries(formData).forEach(([fieldName, value]) => {
      if (
        fieldName !== "file" &&
        fieldName !== "skype" &&
        fieldName !== "ranges" &&
        value.trim() === ""
      ) {
        newErrorMessages[fieldName] = `${
          fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
        } cannot be empty.`;
      }
    });

    // console.log("Error Messages after update:", newErrorMessages);
    setErrorMessages(newErrorMessages);

    if (Object.keys(newErrorMessages).length === 0) {
      // console.log("Form submitted successfully!");
      setIsSubmitted(true);
      const combinedContact = `${selectedCountry}${formData.contactnumber}`;
      // console.log("Combined Contact:", combinedContact);
      const templateParams = {
        name: formData.name,
        email: formData.email,
        contactnumber: fullContactNumber,
        messages: formData.messages,
        skype: formData.skype,
        range: formData.ranges,
        file: formData.file,
        // Add other parameters needed in your email template
      };

      sendEmail(templateParams);

      setTimeout(() => {
        setIsSubmitted(false);
        resetForm();
        setSelected1(people[0]);
        setSelected(countryCodes.countries[0]);
      }, 2000);
    }
  };

  return (
    <div>
      <div className="max-w-7xl p-5 mx-auto shadow-lg rounded-2xl">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-7 sm:flex-row">
            <div className="flex-1">
              <div className="border-b-2 border-slate-300 py-3 relative flex flex-col gap-5">
                <img
                  src="/images/user (1).png"
                  alt="icon"
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                ></img>
                <input
                  className="pl-10 w-full focus:outline-0"
                  type="text"
                  id="nameid"
                  name="name"
                  placeholder="Your Full Name*"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {errorMessages.name && (
                <p className="text-red-500 text-sm mt-2">
                  {errorMessages.name}
                </p>
              )}
            </div>
            <div className="flex-1">
              <div className="border-b-2 border-slate-300 py-3 relative flex flex-col gap-5">
                <img
                  src="/images/message.png"
                  alt="icon"
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                ></img>
                <input
                  className="pl-10 w-full focus:outline-0"
                  type="email"
                  id="emailid"
                  name="email"
                  placeholder="Your Email*"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {errorMessages.email && (
                <p className="text-red-500 text-sm mt-2">
                  {errorMessages.email}
                </p>
              )}
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-7 sm:flex-row">
            <div className="flex-1">
              <div className="border-b-2 border-slate-300 py-3 relative flex items-center">
                <img
                  src="/images/phone-call.png"
                  alt="icon"
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                ></img>
                {/* <div className="pl-10">
                  <select
                    className="pl-0 w-32 focus:outline-0 text-left"
                    id="countryCode"
                    name="countryCode"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                  >
                    {countryCodes.countries.map((country) => (
                      <option
                        className="text-left font-semibold"
                        value={country.code}
                      >
                        {`${country.name} (${country.code})`}
                      </option>
                    ))}
                  </select>
                </div> */}
                <div className="pl-10">
                  <div className="w-60">
                    <Listbox
                      value={selected}
                      id="countryCode"
                      name="countryCode"
                      onChange={(value) => {
                        setSelected(value);
                        setSelectedCountry(value.code);
                        // Add the id and name attributes
                        document.getElementById("countryCode").id =
                          "countryCode";
                        document.getElementById("countryCode").name =
                          "countryCode";
                      }}
                    >
                      <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                          <div className="flex items-center">
                            <img
                              src={selected.img}
                              alt={selected.name}
                              className="h-4 w-6 mr-2"
                            />
                            <span className="block truncate">
                              {`${selected.name} (${selected.code})`}
                            </span>
                          </div>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {countryCodes.countries.map((person, personIdx) => (
                              <Listbox.Option
                                key={personIdx}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active
                                      ? "bg-amber-100 text-amber-900"
                                      : "text-gray-900"
                                  }`
                                }
                                value={person}
                              >
                                {({ selected }) => (
                                  <>
                                    <div className="flex items-center">
                                      <img
                                        src={person.img}
                                        alt={person.name}
                                        className="h-4 w-6 mr-2"
                                      />
                                      <span
                                        className={`block truncate ${
                                          selected
                                            ? "font-medium"
                                            : "font-normal"
                                        }`}
                                      >
                                        {`${person.name} (${person.code})`}
                                      </span>
                                    </div>
                                    {selected ? (
                                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                        <CheckIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
                  </div>
                </div>
                <input
                  className="pl-10 w-full focus:outline-0"
                  type="number"
                  id="contactnumber"
                  name="contactnumber"
                  value={formData.contactnumber}
                  onChange={handleInputChange}
                  placeholder="Contact No*"
                  required
                />
              </div>
              {errorMessages.contactnumber && (
                <p className="text-red-500 text-sm mt-2">
                  {errorMessages.contactnumber}
                </p>
              )}
            </div>
            <div className="flex-1">
              <div className="border-b-2 border-slate-300 pt-5 pb-5 relative">
                <img
                  src="/images/skype.png"
                  alt="icon"
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                ></img>
                <input
                  className="pl-10 w-full focus:outline-0"
                  type="text"
                  id="skypeid"
                  name="skype"
                  value={formData.skype}
                  onChange={handleInputChange}
                  placeholder="Skype"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-7 sm:flex-row">
            <div className="flex-1 mt-4 flex gap-7">
              <div className="flex-1 border-b-2 border-slate-300 py-3 flex">
                <input
                  className="flex-1 pl-2 w-full focus:outline-0"
                  type="file"
                  id="files"
                  name="file"
                  value={formData.file}
                  onChange={handleInputChange}
                />
                <p className="flex-0 text-sm text-black mt-1">
                  (Max size 20MB)
                </p>
              </div>
            </div>
            <div className="flex-1 mt-4 flex gap-7">
              <div className="flex-1 border-b-2 border-slate-300 py-3 flex flex-col gap-2">
                <label className="font-normal" htmlFor="ranges">
                  Project Budget
                </label>
                <div className="w-10">
                  {/* <p className="flex-1 text-slate-800">{formData.ranges}</p> */}
                  {/* <select
                    className="pl-2 w-ful mt-3 focus:outline-0 flex-1"
                    id="rangesid"
                    name="ranges"
                    value={formData.ranges}
                    onChange={handleInputChange}
                  >
                    <option className="text-slate-700" value="">
                      Select Range
                    </option>
                    <option
                      className="text-slate-700"
                      value="Between $10k to $50k"
                    >
                      Between $10k to $50k
                    </option>
                    <option
                      className="text-slate-700"
                      value="Between $50k to $100k"
                    >
                      Between $50k to $100k
                    </option>
                    <option className="text-slate-700" value="More than $100k">
                      More than $100k
                    </option>
                  </select> */}
                  <div className="z-10 w-72">
                    <Listbox
                      value={selected1}
                      id="rangesid"
                      name="ranges"
                      onChange={(value) => {
                        setSelected1(value);
                        // Update the formData.ranges value using handleInputChange
                        handleInputChange({
                          target: { name: "ranges", value: value },
                        });
                      }}
                    >
                      <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                          <span className="block truncate">{selected1}</span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                              className="h-5 w-5 text-blue1"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {people.map((person, personIdx) => (
                              <Listbox.Option
                                key={personIdx}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active
                                      ? "bg-blue1 text-white"
                                      : "text-gray-900"
                                  }`
                                }
                                value={person}
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${
                                        selected ? "font-medium" : "font-normal"
                                      }`}
                                    >
                                      {person}
                                    </span>
                                    {selected ? (
                                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                        <CheckIcon
                                          className="h-5 w-5 text-blue1"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 mt-4 flex gap-7">
            <div className="flex-1">
              <div className="border-b-2 border-slate-300 py-3 relative">
                <img
                  src="/images/chat.png"
                  alt="icon"
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "10px",
                  }}
                ></img>
                <textarea
                  className="pl-10 w-full focus:outline-0"
                  id="message"
                  name="messages"
                  value={formData.messages}
                  onChange={handleInputChange}
                  placeholder="Your Message*"
                  required
                ></textarea>
              </div>
              {errorMessages.messages && (
                <p className="text-red-500 text-sm mt-2">
                  {errorMessages.messages}
                </p>
              )}
            </div>
          </div>
          <div className="mt-4  flex items-center">
            <button
              type="submit"
              className="ml-auto bg-blue1 p-4 w-28 text-white"
            >
              Send
            </button>
            <div className="text-blue1" style={{ marginLeft: "-10px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-center">
            {isSubmitted && (
              <p className="text-green-500 mt-4">
                Form submitted successfully!
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
