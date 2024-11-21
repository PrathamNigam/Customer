import React, { useState } from 'react';

const customerGuide = [
  {
    question: "How do I place an order?",
    answer: "To place an order, browse our menu, add items to your cart, and go to checkout to confirm your order. You’ll receive a confirmation with an order number and tracking link. Need help? Our support team is here to assist!"
  },
  {
    question: "How do I cancel an order?",
    answer: "You can cancel your order within the first few minutes by selecting 'Cancel' in the 'Orders' section. If it’s already in preparation, cancellations may be restricted, but reach out to us, and we’ll do our best to help."
  },
  {
    question: "How does our kitchen system work?",
    answer: "Our kitchen is organized for efficiency, with each order moving through stations for preparation, cooking, and packaging. We follow rigorous quality checks so that each meal is freshly made and reaches you in perfect condition."
  },
  {
    question: "What are our hygiene standards?",
    answer: "We maintain high hygiene standards by requiring staff to wear gloves, masks, and hairnets, and regularly sanitize cooking areas. Our ingredients are carefully sourced and stored safely to ensure freshness and cleanliness."
  },
  {
    question: "How do I track my order?",
    answer: "After placing your order, you’ll receive a tracking link that shows real-time updates. If you have any trouble with tracking, contact us, and we’ll provide the latest update on your delivery."
  }
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState(''); // State to store selected platform
  const filteredGuide = customerGuide.filter((item) =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handlePlatformSelect = (platform) => {
    setSelectedPlatform(platform);  // Set the selected platform
    setIsDropdownOpen(false);  // Close the dropdown after selection
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-slate-50 overflow-x-hidden">
      <div className="flex justify-center py-5">
        <div className="max-w-[960px] w-full px-4">
          <div className="px-4 py-3">
            <label className="flex items-center h-12 w-full bg-[#e7eef4] rounded-xl">
              <div className="text-[#49779c] flex items-center justify-center pl-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                </svg>
              </div>
              <input
                placeholder="Search through FAQs"
                className="flex w-full px-4 bg-[#e7eef4] text-[#0d151c] placeholder:text-[#49779c] rounded-xl outline-none"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </label>
          </div>

          {/* Dropdown Button */}
          <div className="relative py-4">
            <button
              onClick={toggleDropdown}
              className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e7eef4] text-[#0d151c] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Choose Platform</span>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-full bg-[#e7eef4] rounded-xl shadow-lg mt-2">
                <ul className="py-2">
                  <li
                    className="px-4 py-2 text-[#0d151c] hover:bg-[#d0e2ef] cursor-pointer"
                    onClick={() => handlePlatformSelect('Amazon')}
                  >
                    Amazon
                  </li>
                  <li
                    className="px-4 py-2 text-[#0d151c] hover:bg-[#d0e2ef] cursor-pointer"
                    onClick={() => handlePlatformSelect('Swiggy')}
                  >
                    Swiggy
                  </li>
                  <li
                    className="px-4 py-2 text-[#0d151c] hover:bg-[#d0e2ef] cursor-pointer"
                    onClick={() => handlePlatformSelect('Flipkart')}
                  >
                    Flipkart
                  </li>
                  <li
                    className="px-4 py-2 text-[#0d151c] hover:bg-[#d0e2ef] cursor-pointer"
                    onClick={() => handlePlatformSelect('Zepto')}
                  >
                    Zepto
                  </li>
                  <li
                    className="px-4 py-2 text-[#0d151c] hover:bg-[#d0e2ef] cursor-pointer"
                    onClick={() => handlePlatformSelect('Zomato')}
                  >
                    Zomato
                  </li>
                  <li
                    className="px-4 py-2 text-[#0d151c] hover:bg-[#d0e2ef] cursor-pointer"
                    onClick={() => handlePlatformSelect('Others')}
                  >
                    Others
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Box Between Search and Results */}
          <div className="flex justify-between items-center bg-[#e7eef4] p-4 rounded-xl mb-4">
            <div className="text-[#49779c] font-bold">Submit a Ticket</div>
            <div className="flex items-center gap-4">
              {selectedPlatform && (
                <div className="text-[#0d151c] font-medium">
                  Selected Platform: <span className="font-bold">{selectedPlatform}</span>
                </div>
              )}
              <button className="bg-[#49779c] text-white px-6 py-2 rounded-xl">
                New Support Ticket
              </button>
            </div>
          </div>

          {/* Search Results */}
          <div className="flex flex-col gap-4">
            {filteredGuide.length === 0 ? (
              <p>No results found</p>
            ) : (
              filteredGuide.map((item, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                  <h3 className="text-lg font-bold">{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
