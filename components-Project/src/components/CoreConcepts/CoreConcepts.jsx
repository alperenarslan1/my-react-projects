import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../../data";
import "./CoreConcept.css";
import Section from "../Section/Section";

function CoreConcepts() {
   return (
      <Section
         id="core-concepts"
         title="Core concepts"
      >
         <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
               <CoreConcept
                  key={conceptItem.title}
                  {...conceptItem}
               />
            ))}
         </ul>
      </Section>
   );
}

export default CoreConcepts;
