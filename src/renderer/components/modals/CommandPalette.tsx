import autobind from "autobind-decorator";
import * as React from "react";

import { QuickSelect } from "components/modals";
import { ICommandPaletteProps } from "props/modals";

/** The CommandPalette component, a QuickSelect for general commands. */
class CommandPalette extends React.PureComponent<ICommandPaletteProps> {

    /**
     * Defines how the command palette component is rendered.
     *
     * @returns a JSX element representing the command palette view
     */
    public render(): JSX.Element {
        return <QuickSelect
            isOpen={this.props.isOpen}
            onClose={this.props.onClose}
            initialItems={this.renderItems()}
            onSelect={this.handleSelect}
            theme={this.props.theme} />;
    }

    /**
     * Renders the items passed to the CommandPalette's QuickSelect.
     *
     * @returns a list of rendered items to be passed to the QuickSelect
     */
    private renderItems(): JSX.Element[] {
        const itemKeys = Object.keys(this.props.applicationCommands);

        return itemKeys.map(item => <li id={item} value={item}>{item}</li>);
    }

    /**
     * Handles invoking the command chosen in the QuickSelect.
     *
     * @param selectedItem the item selected in the QuickSelect
     */
    @autobind
    private handleSelect(selectedItem: string) {
        this.props.applicationCommands[selectedItem]();
    }
}

export default CommandPalette;
