// src/components/NotificationTicker.js
import React from 'react';
import { Link } from 'react-router-dom'; // If your notifications have internal links

// Sample notifications - in a real app, this might come from an API or state management
const notifications = [
  { id: 1, text: "Admissions for 2025-26 are now open!", link: "/admissions" },
  { id: 2, text: "Annual Sports Meet on Dec 15th. All are invited.", link: "/events/sports-meet" },
  { id: 3, text: "Mid-term examination schedule published.", link: "/notices/exam-schedule" },
  { id: 4, text: "Guest lecture on AI by Dr. Sharma this Friday.", link: "/events/guest-lecture-ai" },
  { id: 5, text: "Holiday declared on Monday for Founder's Day.", link: "/notices/holiday-founder-day" },
  // Add more notifications as needed
];

const NotificationTicker = () => {
  // To make the scroll seamless, we duplicate the content.
  // The number of duplications depends on the total width of your items and screen width.
  // For many items or very long text, one duplication might be enough.
  // If items are few and short, you might need more duplications to fill the visual scroll.
  const tickerItems = [...notifications, ...notifications, ...notifications]; // Duplicated for smoother looping


  return (
    <div className="notification-ticker-container">
      <div className="notification-ticker">
        {tickerItems.map((item, index) => (
          <span key={`${item.id}-${index}`}> {/* Ensure unique keys for duplicated items */}
            {item.link ? (
              <Link to={item.link}>{item.text}</Link>
            ) : (
              item.text
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NotificationTicker;
