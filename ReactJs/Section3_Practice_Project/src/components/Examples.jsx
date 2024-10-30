import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";

export default function Examples() {

    const [selectedItem, setSelectedItem] = useState();

    let tabContent = <p>Please select the topic.</p>

    if (selectedItem) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedItem].title}</h3>
                <p>{EXAMPLES[selectedItem].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedItem].code}
                    </code>
                </pre>
            </div>
        )
    }

    function handleSelect(SelectedItem) {
        setSelectedItem(SelectedItem);
        console.log(selectedItem);
    }
    return (
        <section id="examples">
            <h2>Exapmles</h2>
            <menu>
                <TabButton isSelected={selectedItem === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
                <TabButton isSelected={selectedItem === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedItem === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedItem === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
            </menu>
            {tabContent}
        </section>
    )
}