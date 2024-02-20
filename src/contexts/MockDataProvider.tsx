import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

export interface MockDataContextTypes {
  mockData: any;
  selectedDataFile: string;
  setSelectedDataFile: React.Dispatch<React.SetStateAction<string>>;
}

interface MockDataProviderTypes {
  children: ReactNode;
}

export const MockDataContext = createContext<MockDataContextTypes | undefined>(
  undefined
);

export const MockDataProvider: React.FC<MockDataProviderTypes> = ({
  children
}) => {
  const [selectedDataFile, setSelectedDataFile] =
    useState<string>("auckland.json");

  const [mockData, setMockData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./" + selectedDataFile);
        const jsonData = await response.json();
        setMockData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [selectedDataFile]);

  const contextValue: MockDataContextTypes = {
    mockData,
    selectedDataFile,
    setSelectedDataFile
  };

  return (
    <MockDataContext.Provider value={contextValue}>
      {children}
    </MockDataContext.Provider>
  );
};

export const useMockData = () => {
  return useContext(MockDataContext);
};
