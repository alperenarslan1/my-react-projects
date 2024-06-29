import { useState } from "react";
import TabButton from "../TabButton/TabButton";
import { EXAMPLES } from "../../data";
import "./Examples.css";
import Section from "../Section/Section";
import Tabs from "../Tabs/Tabs";

function Examples() {
   const [selectedTopic, setSelectedTopic] = useState();

   function clickHandle(selectedButton) {
      setSelectedTopic(selectedButton);
      console.log(selectedTopic);
   }

   let tabContent = "Please click a button";
   if (selectedTopic) {
      tabContent = (
         <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
               <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
         </div>
      );
   }

   return (
      <Section
         id="examples"
         title="Tab buttons"
      >
         <Tabs
            buttons={
               <>
                  <TabButton
                     isSelected={selectedTopic === "components"}
                     click={() => clickHandle("components")}
                  >
                     Component
                  </TabButton>
                  <TabButton
                     isSelected={selectedTopic === "jsx"}
                     click={() => clickHandle("jsx")}
                  >
                     JSX
                  </TabButton>
                  <TabButton
                     isSelected={selectedTopic === "props"}
                     click={() => clickHandle("props")}
                  >
                     Props
                  </TabButton>
                  <TabButton
                     isSelected={selectedTopic === "state"}
                     click={() => clickHandle("state")}
                  >
                     State
                  </TabButton>
               </>
            }
            ButtonContainer="menu"
         >
            {tabContent}
         </Tabs>
      </Section>
   );
}

export default Examples;
