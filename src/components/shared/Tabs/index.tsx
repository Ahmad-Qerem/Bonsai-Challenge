import React, { ReactNode, useState } from "react";

interface TabItem {
  link: ReactNode;
  content: ReactNode;
}
interface TabsProps {
  items: TabItem[];
}

const Tabs: React.FC<TabsProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="container tabs-container">
      <div className="tabs">
        {items.map((item, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {item.link}
          </div>
        ))}
      </div>
      <div className="content">
        {items.map((item, index) => (
          <div
            key={index}
            className={`tab-panel ${activeTab === index ? "show" : ""}`}
          >
            <div className="tap-content">{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
