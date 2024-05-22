"use client";
//@ts-nocheck
import React, { useState } from "react";
import styled from "styled-components";

const TerminalWrapper = styled.div`
  border: 2px solid #00ff00;
  padding: 10px;
  margin: 20px auto;
  width: 90%;
  max-width: 800px;
  background-color: #000;
`;

const TerminalContent = styled.pre`
  white-space: pre-wrap;
  margin: 0;
  color: #00ff00;
  a {
    color: #00ff00;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const InputWrapper = styled.div`
  display: flex;
`;

const Prompt = styled.span`
  color: #00ff00;
  font-family: "Courier New", Courier, monospace;
`;

const Input = styled.input`
  background: none;
  border: none;
  color: #00ff00;
  font-family: "Courier New", Courier, monospace;
  outline: none;
  width: 100%;
  caret-color: #00ff00;
`;

const Terminal = () => {
  const [output, setOutput] = useState(`Welcome to my personal website!

> Ahmet Tahir Yıldız
> JavaScript & Blockchain Developer

Type 'help' to see more commands.
`);

const handleCommand = (command: any) => {
    let newOutput = output;
    const trimmedCommand = command.trim().toLowerCase(); // Boşlukları ve büyük harfleri kaldır
    if (trimmedCommand === "help") {
      newOutput += "\nAvailable commands: help, about, contact, twitter, linkedin, github";
    } else if (trimmedCommand === "about") {
      newOutput += "\nI am a JavaScript & Blockchain Developer.";
    } else if (trimmedCommand === "contact") {
      newOutput += "\nYou can contact me at ahmetatylz55@gmail.com";
    } else if (trimmedCommand === "twitter") {
      newOutput += '\nTwitter: <a href="https://x.com/LandoC4lrissian" target="_blank">Twitter</a>';
    } else if (trimmedCommand === "linkedin") {
      newOutput += '\nLinkedIn: <a href="https://www.linkedin.com/in/ahmet-tahir-y%C4%B1ld%C4%B1z-05205b2b0/" target="_blank">LinkedIn</a>';
    } else if (trimmedCommand === "github") {
      newOutput += '\nGitHub: <a href="https://github.com/LandoC4lrissian" target="_blank">GitHub</a>';
    } else {
      newOutput += `\nCommand not found: ${trimmedCommand}`;
    }
    setOutput(newOutput + "\n> ");
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      handleCommand(e.target.value);
      e.target.value = "";
    }
  };

  return (
    <TerminalWrapper>
      <TerminalContent dangerouslySetInnerHTML={{ __html: output }} />
      <InputWrapper>
        <Prompt>$&nbsp;</Prompt>
        <Input type="text" onKeyDown={handleKeyDown} autoFocus />
      </InputWrapper>
    </TerminalWrapper>
  );
};

export default Terminal;
