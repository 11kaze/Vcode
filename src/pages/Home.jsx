import React from "react";
import { CopyBlock, dracula, monokai,googlecode, codepen } from 'react-code-blocks';
import codeSnippets from '../snippets/js.json'


const Home = () => {
  return (
    <div className="home_wrapper p-5">
      {codeSnippets.map((snippet, index) => (
        <div className="m-1 code_block" key={snippet.id}>
          <pre>{snippet.title}</pre>
          <CopyBlock
            text={snippet.code}
            language={snippet.lang}
            showLineNumbers={false}
            theme={dracula}
            codeBlock
          />
        </div>
      ))}
    </div>
  );
};

export default Home;
