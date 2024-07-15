import { useState } from 'react';
import styled from 'styled-components';
import React from 'react';

interface ITabsProps {
  tabs: TTab[];
}

type TTab = {
  label: string;
  content: JSX.Element | React.ReactNode | string;
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: 1024px;
  border-radius: 16px;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.primary};
  min-height: 200px;
  height: 100%;
`;

const TabLabelsWrapper = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
`;

const TabLabel = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  font-size: 24px;
  font-weight: 600;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  text-align: center;
  display: flex;
  align-items: center;
  border-radius: 12px;
  background-color: ${({ isActive, theme }) => (isActive ? theme.text : theme.body)};
  color: ${({ isActive, theme }) => (isActive ? theme.body : theme.text)};
`;

const TabContentWrapper = styled.div`
  display: flex;
  flex-flow: column;
  padding: 12px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Tabs = ({ tabs }: ITabsProps) => {
  const [activeTab, setActiveTab] = useState<TTab>(tabs[0]);
  const tabsLabels = tabs?.map((tab) => tab.label);

  const handleChangeTab = (label: string) => {
    setActiveTab(tabs.find((tab) => tab.label === label) ?? tabs[0]);
  };

  return (
    <Wrapper>
      <TabLabelsWrapper>
        {tabsLabels.map((label) => (
          <TabLabel
            key={label}
            onClick={() => handleChangeTab(label)}
            isActive={label === activeTab.label}>
            {label}
          </TabLabel>
        ))}
      </TabLabelsWrapper>
      <TabContentWrapper>
        {tabs.find((tab) => tab.label === activeTab.label)?.content}
      </TabContentWrapper>
    </Wrapper>
  );
};

export default Tabs;
