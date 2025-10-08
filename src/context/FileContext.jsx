// File: src/context/FileContext.jsx
import React, { createContext, useState, useContext } from "react";
import { extractText } from "../utils/extractText";

const FileContext = createContext();

export const FileProvider = ({ children }) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileContent, setFileContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [progressMessage, setProgressMessage] = useState("");

  const handleFileUpload = async (file) => {
    setUploadedFile(file);
    setFileContent("");
    setIsLoading(true);
    setProgressMessage("Processing PDF with OCR...");

    try {
      const text = await extractText(file, setProgressMessage);
      setFileContent(text);
      setProgressMessage("✅ PDF processed successfully!");
      setTimeout(() => setIsLoading(false), 1000);
    } catch (error) {
      console.error("Error during OCR:", error);
      setProgressMessage("❌ Failed to extract text from PDF.");
    }
  };

  const clearFile = () => {
    setUploadedFile(null);
    setFileContent("");
    setIsLoading(false);
    setProgressMessage("");
  };

  return (
    <FileContext.Provider
      value={{
        uploadedFile,
        fileContent,
        handleFileUpload,
        clearFile,
        isLoading,
        progressMessage,
      }}
    >
      {children}
    </FileContext.Provider>
  );
};

export const useFile = () => useContext(FileContext);