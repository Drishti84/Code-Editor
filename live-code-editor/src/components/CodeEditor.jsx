import { Sandpack } from "@codesandbox/sandpack-react";
import { generateCode } from "../utils/Gemini";


export default function CodeEditor() {
  const handleGenerate = async () => {
    const aiCode = await generateCode("Generate a React component with a button.");
    setEditorCode(aiCode); // Replace editor code with AI-generated code
  };
  return (
    <>
       <Sandpack
      template="react"
      theme="dark"
      options={{ showConsole: true, showTabs: true, wrapContent: true }}
      style={{ height: "00px" }}
    />

<button onClick={handleGenerate}>Generate Code</button>

    </>
 

    
  );
}
