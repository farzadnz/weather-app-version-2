import React, { ReactNode, createContext, useContext, useState } from "react";

export interface SettingsContextTypes {
  distanceUnit: string;
  tempUnit: string;
  setDistanceUnit: React.Dispatch<React.SetStateAction<string>>;
  setTempUnit: React.Dispatch<React.SetStateAction<string>>;
}

interface SettingsProviderTypes {
  children: ReactNode;
}

export const SettingsContext = createContext<SettingsContextTypes | undefined>(
  undefined
);

export const SettingsProvider: React.FC<SettingsProviderTypes> = ({
  children
}) => {
  const [distanceUnit, setDistanceUnit] = useState<string>("kilometres");

  const [tempUnit, setTempUnit] = useState<string>("celsius");

  const contextValue: SettingsContextTypes = {
    distanceUnit,
    tempUnit,
    setDistanceUnit,
    setTempUnit
  };

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettingConfigs = () => {
  return useContext(SettingsContext);
};
