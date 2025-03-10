/**
 * MarkdownPreviewer component.
 * 
 * This component allows users to input markdown text in a text editor and see a live preview of 
 * the rendered HTML.
 * 
 * The component maintains the current markdown text as state and handles the conversion of 
 * markdown to HTML using the 'marked' library.
 */
class MarkdownPreviewer extends React.Component {
    /**
     * Constructor to initialize the component's state.
     * 
     * @param {object} props - The props passed to the component. This is an empty object here 
     *                          as we are not passing any props from the parent component.
     */
    constructor(props) {
        super(props);
        // Initial state with a sample markdown content
        this.state = {
            markdown: "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n"
        };

        // Binding methods to ensure proper context for event handlers
        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * Handle changes to the markdown input.
     * 
     * This method is triggered when the user types in the editor. It updates the state with the new
     * markdown content.
     * 
     * @param {Event} event - The input change event triggered by the user.
     */
    handleChange(event) {
        // Updates the `markdown` state with the new input text
        this.setState({ markdown: event.target.value });
    }

    /**
     * Render the main JSX structure of the component.
     * 
     * This method renders the editor and preview sections.
     * 
     * It returns the JSX structure for the MarkdownPreviewer component, containing:
     * - An editor section with a textarea for markdown input.
     * - A preview section that shows the rendered HTML from markdown.
     * 
     * @returns {JSX.Element} The JSX to render the MarkdownPreviewer component.
     */
    render() {
        const { markdown } = this.state;  // Destructuring to extract markdown from state

        return (
            <div className="markdown-previewer">
                {/* Editor Section */}
                <div className="editorWrap">
                    <h2 class="text-center">Editor</h2>
                    {/* Markdown editor component */}
                    <Editor markdown={markdown} onChange={this.handleChange} />
                </div>

                {/* Preview Section */}
                <div className="previewWrap">
                    <h2 class="text-center">Preview</h2>
                    {/* Markdown preview component */}
                    <Preview markdown={markdown} />
                </div>
            </div>
        );
    }
}

/**
 * Editor component for the markdown input.
 * 
 * This component renders a textarea where the user can input their markdown text.
 * 
 * It takes the current markdown text and a callback function (`onChange`) as props to handle
 * changes to the text in the editor.
 */
class Editor extends React.Component {

    /**
     * Editor component constructor.
     * @param {Object} props - The props for the Editor component.
     * @param {string} props.markdown - The current markdown text.
     * @param {Function} props.onChange - The function to call when the content changes.
     * @constructor
     */
    constructor(props) {
        super(props);
    }

    /**
     * Render the editor section for markdown input.
     *
     * This method returns a textarea element where the user can input or edit the markdown text.
     *
     * @returns {JSX.Element} The JSX to render the Editor component.
     */
    render() {
        const { markdown, onChange } = this.props;
        return (
            <textarea
                id="editor"               // Unique identifier for the editor
                onChange={onChange}        // Calls the parent `handleChange` when the text changes
                value={markdown}           // Bind the value of textarea to the current markdown state
                type="text"                // Specify that this is a text input
            />
        )
    }
}

// PropTypes for the Editor component
Editor.propTypes = {
    markdown: PropTypes.string.isRequired, // The markdown content being edited
    onChange: PropTypes.func.isRequired // Function to handle changes in the editor
};

/**
 * Preview component for rendering markdown as HTML.
 * 
 * This component uses the `marked` library to convert the markdown input into HTML.
 * It also uses Prism for syntax highlighting of code blocks.
 */
class Preview extends React.Component {

    /**
     * Preview component constructor.
     * @param {Object} props - The props for the Preview component.
     * @param {string} props.markdown - The current markdown text to be rendered.
     * @constructor
     */
    constructor(props) {
        super(props);
    }

    /**
     * Render the editor section for markdown input.
     *
     * This method returns a textarea element where the user can input or edit the markdown text.
     *
     * @returns {JSX.Element} The JSX to render the Editor component.
     */
    render() {
        const { markdown } = this.props;
        return (
            <div
                id="preview"  // Unique identifier for the preview section. This ID allows us to target the div via CSS or JavaScript.
                // The dangerouslySetInnerHTML property in React is used to directly insert raw HTML into the DOM, bypassing React's default rendering behavior. It's called "dangerous" because it can lead to security risks like XSS (cross-site scripting) if not handled properly.
                // dangerouslySetInnerHTML in React is a property that allows you to directly set raw HTML content into a component, bypassing React's usual HTML escaping for security. It’s often used when rendering HTML from external sources, but it comes with a risk of cross-site scripting (XSS) attacks if the HTML isn't properly sanitized. To use it, you set an object with a __html key containing the raw HTML string as its value. Since it can introduce security vulnerabilities, it should be used cautiously and only with trusted content.
                dangerouslySetInnerHTML={{
                    // __html is a special React property that expects raw HTML. Here, it is set to the result of the marked() function, which converts the markdown content (stored in the markdown variable) into HTML. This HTML is then injected into the div.
                    // marked is a library that parses markdown text and converts it to HTML. It takes the raw markdown text as input (markdown) and returns the corresponding HTML. This is useful for rendering markdown in a format that can be displayed as styled HTML content.
                    __html: marked(markdown, {  // Use the `marked` library to convert markdown text into HTML
                        breaks: true,              // Enable line breaks in markdown by converting \n to <br> HTML tags. This option enables automatic conversion of line breaks in the markdown to HTML <br> tags. By default, markdown doesn't create line breaks unless you add two spaces or use specific syntax. Setting breaks: true ensures that any line breaks (\n) in the markdown text are converted to <br>, making the content appear as expected.
                        /* (code) => Prism.highlight(code, Prism.languages.javascript, "javascript"):
                        This is an arrow function that handles the syntax highlighting of code blocks. It takes the raw code (from a code block in markdown) as input and uses the Prism.highlight() method to apply syntax highlighting.
                        Prism.highlight(code, ...) takes three arguments:
                        - code: The actual code string from the markdown (inside a code block).
                        - Prism.languages.javascript: This tells Prism to apply JavaScript-specific syntax highlighting.
                        - "javascript": This is the language identifier used by Prism to correctly apply the syntax highlighting rules for JavaScript.
                        */
                        // highlight: (code) => Prism.highlight(code, Prism.languages.javascript, "javascript") // Highlight code blocks using Prism.js for syntax highlighting.
                    })
                }}
            />
        );
    }
}

// PropTypes for the Preview component
Preview.propTypes = {
    markdown: PropTypes.string.isRequired // The markdown content to be rendered as HTML
};

// Rendering the MarkdownPreviewer component into the DOM
ReactDOM.render(<MarkdownPreviewer />, document.getElementById("root"));