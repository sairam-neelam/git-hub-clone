import React, { useState, useEffect, useRef, ReactNode } from "react";
import "./Tabs.css";

interface Tab {
  id: number | string;
  title: ReactNode | string;
  content: React.ReactNode;
  width?: number; // Width is now optional
  disabled: boolean;
}

interface TabsProps {
  tabs: Tab[];
}

const TabsComponent: React.FC<TabsProps> = ({ tabs }) => {
  const [visibleTabs, setVisibleTabs] = useState<Tab[]>([]);
  const [activeTabId, setActiveTabId] = useState<number | string>(tabs[1].id);
  const [dropdownTabs, setDropdownTabs] = useState<Tab[]>([]);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTabs = () => {
      if (tabsRef.current) {
        const availableWidth = tabsRef.current.offsetWidth;
        let totalWidth = 0;
        const newVisibleTabs: Tab[] = [];
        const newDropdownTabs: Tab[] = [];

        // Assume tabsRef.current.children is an HTMLCollection of tab elements
        const tabElements = tabsRef.current.children;

        tabs.forEach((tab, index) => {
          const tabWidth =
            tab.width || tabElements[index]?.getBoundingClientRect()?.width;
          totalWidth += tabWidth;
          if (totalWidth <= availableWidth) {
            newVisibleTabs.push(tab);
          } else {
            newDropdownTabs.push(tab);
          }
        });

        setVisibleTabs(newVisibleTabs);
        setDropdownTabs(newDropdownTabs);
      }
    };

    updateTabs();
    window.addEventListener("resize", updateTabs);
    return () => window.removeEventListener("resize", updateTabs);
  }, [tabs]);

  return (
    <div>
      <div ref={tabsRef} className="tabs">
        {visibleTabs.map((tab) => (
          <div
            key={tab.id}
            style={{ width: tab.width }}
            onClick={() => !tab.disabled && setActiveTabId(tab.id)}
            className={activeTabId === tab.id ? "tab active" : "tab"}
          >
            {tab.title}
          </div>
        ))}
        {dropdownTabs.length > 0 && (
          <DropdownMenu tabs={dropdownTabs} setActiveTabId={setActiveTabId} />
        )}
      </div>
      <div className="tab-content">
        {tabs.find((tab) => tab.id == activeTabId)?.content}
      </div>
    </div>
  );
};

interface DropdownProps {
  tabs: Tab[];
  setActiveTabId: (id: string) => void;
}

const DropdownMenu: React.FC<DropdownProps> = ({ tabs, setActiveTabId }) => {
  const change = (e: { target: { value: any } }) => {
    setActiveTabId(String(e.target.value));
  };

  return (
    <div className="dropdown">
      <select className="tab-dropdown" onChange={change}>
        {tabs.map((tab) => (
          <option key={tab.id} value={tab.id} disabled={tab.disabled}>
            {tab.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TabsComponent;
