/**
 * Display component - Displays the current value on the screen
 * @class Display
 * @extends React.Component
 */
class Display extends React.Component {

    /**
     * Constructor for the Display component.
     * @param {Object} props - The properties passed to this component
     */
    constructor(props) {
        super(props); // Call the parent class constructor
    }

    /**
     * Renders the current value on the display screen.
     * @returns {JSX.Element} - The JSX code that defines the display UI
     */
    render() {
        return (
            <div className="outputScreen" id="display">
                {this.props.currentValue} {/* Display the current value passed from the parent */}
            </div>
        );
    }
}

// PropTypes for the Display component
Display.propTypes = {
    currentValue: PropTypes.string.isRequired, // 'currentValue' should be a string and is required
};

/**
 * Formula component - Displays the formula (or operation history) on the screen
 * @class Formula
 * @extends React.Component
 */
class Formula extends React.Component {

    /**
     * Constructor for the Formula component.
     * @param {Object} props - The properties passed to this component
     */
    constructor(props) {
        super(props); // Call the parent class constructor
    }

    /**
     * Renders the formula on the formula screen.
     * @returns {JSX.Element} - The JSX code that defines the formula display UI
     */
    render() {
        return <div className="formulaScreen">{this.props.formula}</div>; // Display the formula passed from the parent
    }
}

// PropTypes for the Formula component
Formula.propTypes = {
    formula: PropTypes.string.isRequired, // 'formula' should be a string and is required
};

/**
 * Button component - Represents a button in the calculator
 * @class Button
 * @extends React.Component
 */
class Button extends React.Component {

    /**
     * Constructor for the Button component.
     * @param {Object} props - The properties passed to this component
     */
    constructor(props) {
        super(props); // Call the parent class constructor
        this.handleClick = this.handleClick.bind(this); // Bind handleClick method to this instance
    }

    /**
     * Handles button click events based on the button's label.
     * The action depends on whether it's a number, operator, or special function like 'AC' or '='.
     */
    handleClick() {

        // Destructure label, onClick, operatorClick, evaluateClick, decimalClick, and initializeClick from props.
        const { label, onClick, operatorClick, evaluateClick, decimalClick, initializeClick } = this.props;

        // If the button is 'AC', clear the calculator
        if (label === 'AC') {
            initializeClick(); // If the button is 'AC', clear the calculator
        } else if (label === '=') {
            evaluateClick(); // If it's '=', evaluate the expression
        } else if (['/', 'x', '-', '+'].includes(label)) {
            operatorClick({ target: { value: label } }); // If it's an operator, call operatorClick
        } else if (label === '.') {
            decimalClick(); // If it's a decimal, call decimalClick
        } else {
            onClick({ target: { value: label } }); // Otherwise, it's a number, call onClick
        }
    }

    /**
     * Renders the button with appropriate styles based on the label.
     * @returns {JSX.Element} - The JSX code that defines the button UI
     */
    render() {
        // Destructure label and id from props
        const { label, id } = this.props;
        // Determine the class name based on the label
        const className = ['+', '-', 'x', '/'].includes(label) ? ' button operator' : // If it's an operator button then add the 'operator' class
            ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].includes(label) ? ' button number' : ' button'; // If it's a number button then add the 'number' class else add the default 'button' class

        return (
            <button id={id} className={className} onClick={this.handleClick}> {/* Add the id and class to the button and pass the handleClick method as the onClick event handler*/}
                {label} {/* Display the label on the button */}
            </button>
        );
    }
}

// PropTypes for the Button component
Button.propTypes = {
    id: PropTypes.string.isRequired, // 'id' should be a string and is required
    label: PropTypes.string.isRequired, // 'label' should be a string and is required
    onClick: PropTypes.func.isRequired, // 'onClick' should be a function and is required
    operatorClick: PropTypes.func.isRequired, // 'operatorClick' should be a function and is required
    evaluateClick: PropTypes.func.isRequired, // 'evaluateClick' should be a function and is required
    decimalClick: PropTypes.func.isRequired, // 'decimalClick' should be a function and is required
    initializeClick: PropTypes.func.isRequired, // 'initializeClick' should be a function and is required
};

/**
 * Calculator component - Contains the logic for the calculator, its state, and behavior
 * @class Calculator
 * @extends React.Component
 */
class Calculator extends React.Component {
    /**
     * Constructor for the Calculator component.
     * Initializes the state to store current value, formula, previous value, and evaluation state.
     * @param {Object} props - The properties passed to this component
     */
    constructor(props) {
        super(props); // Call the parent class constructor
        /**
         * The state of the Calculator component.
         * @type {Object}
         * @property {string} currentVal - The current value being displayed on the calculator screen.
         * @property {string} prevVal - The previous value, used for storing the result of the formula.
         * @property {string} formula - The formula or expression being typed.
         * @property {boolean} evaluated - Whether the result of the formula has been evaluated.
        */
        this.state = {
            currentVal: '0', // Initially set current value to '0'
            prevVal: '0', // Initially, the previous value is '0'
            formula: '', // The formula or expression being typed
            evaluated: false, // Whether the result of the formula has been evaluated
        };

        // Binding methods to this instance of Calculator
        this.maxDigitWarning = this.maxDigitWarning.bind(this);
        this.handleOperators = this.handleOperators.bind(this);
        this.handleEvaluate = this.handleEvaluate.bind(this);
        this.initialize = this.initialize.bind(this);
        this.handleDecimal = this.handleDecimal.bind(this);
        this.handleNumbers = this.handleNumbers.bind(this);
    }


    /**
     * Shows a warning when the digit limit is exceeded.
     * This method is invoked when the current value exceeds the allowed number of digits.
     */
    maxDigitWarning() {
        // Set the current value to "Digit Limit Met" and prevVal to the current value
        this.setState({ currentVal: 'Digit Limit Met', prevVal: this.state.currentVal });
        setTimeout(() => this.setState({ currentVal: this.state.prevVal }), 1000); // Resets the value after 1 second
    }

    /**
     * Handles operator button clicks (e.g. +, -, x, /).
     * Updates the formula by appending the operator and adjusts the state accordingly.
     * @param {Object} e - The event object containing the target value
     */
    handleOperators(e) {
        // Check if the current value does not include "Limit"
        if (!this.state.currentVal.includes('Limit')) {

            // Destructure formula, prevVal, and evaluated from state
            const { formula, prevVal, evaluated } = this.state;
            const operator = e.target.value; // Get the operator

            let newFormula = formula; // Variable to hold the new formula

            // If evaluated is true, it means the user just calculated a result
            if (evaluated) { // If evaluated is true, reset the formula starting from the previous value and the new operator
                newFormula = prevVal + operator;
            } else if (newFormula === '' && ['/', 'x', '+'].includes(operator)) { // Prevent starting with an operator if formula is empty
                newFormula = ''; // Prevent starting with an operator
            } else if ((formula === '' || formula === '-') && operator === '-') { // Handle negative signs at the start
                newFormula = formula === '-' ? '' : '-'; // Toggle between negative sign and empty string
            } else if (/[x+-/]$/.test(formula)) {
                // Check if the formula ends with an operator (like 'x', '+', '-', or '/').
                // The regular expression [x+-/]$ checks for the presence of any of these operators at the end of the string.

                if (/--$/.test(formula)) {
                    // If the formula ends with '--', prevent further operators from being added.
                    // You could either block further input or give a warning that -- is not allowed.
                    // For this example, we are just preventing additional operator input.
                    newFormula = formula; // Don't change the formula, simply prevent operator entry.
                }

                // If the operator is not "-", remove the previous sequence of operators and append the new operator
                else if (operator !== "-" || /--$/.test(formula)) {
                    // Store the current formula into the newFormula variable.
                    newFormula = formula;

                    // This loop removes any operators at the end of the formula.
                    // The loop keeps slicing off the last character (which is an operator) as long as the formula ends with an operator.
                    while (/[x+-/]$/.test(newFormula)) {
                        // Slice the last character (operator) off from the formula.
                        newFormula = newFormula.slice(0, -1);
                    }

                    // After removing the unwanted operators, append the new operator at the end of the formula.
                    newFormula = newFormula + operator;
                }
                else {
                    // If the operator is "-", just append it to the formula without removing any operators.
                    newFormula = formula + operator;
                }
            } else {
                // Otherwise, just append the operator to the formula
                newFormula = formula + operator;
            }
            // Update the state
            this.setState({
                formula: newFormula, // Update formula with the new one
                currentVal: newFormula === '' ? '0' : operator, // Show the operator on the screen
                evaluated: false, // Reset evaluated state to false as the user is typing a new formula
            });
        }
    }

    /**
     * Handles the evaluation of the current formula when the equals button is clicked.
     * It calculates the result using the eval function and updates the UI accordingly.
     */
    handleEvaluate() {
        // Check if the current value does not include "Limit"
        if (!this.state.currentVal.includes('Limit')) {

            // Destructure formula from state
            let expression = this.state.formula;

            // Remove any trailing operators from the expression for evaluation
            while (/[x/+-]$/.test(expression)) {
                expression = expression.slice(0, -1);
            }

            console.log(expression);

            // Replace symbols for calculation with actual symbols for evaluation
            expression = expression.replace(/x/g, '*') // Replace 'x' with '*'
                .replace(/-/g, '-') // Replace '-' with '-'
                .replace('--', '-'); // Replace '--' with '-'

            // Perform the calculation
            /* The eval() function evaluates JavaScript code represented as a string and returns its completion value. The source is parsed as a script.*/
            let answer = Math.round(1e12 * eval(expression)) / 1e12;

            // Update state with the result and formatted formula
            this.setState({
                currentVal: answer.toString(),
                formula: expression.replace(/\*/g, '⋅').replace(/-/g, '-').replace(/(x|\/|\+)-/, '$1-').replace(/^[-]/, '-') + '=' + answer,
                prevVal: answer,
                evaluated: true,
            });
        }
    }

    /**
 * Handles number button clicks and updates the current value and formula.
 * @param {Object} e - The event object containing the target value
 */
    handleNumbers(e) {
        // Check if the current value does not include "Limit"
        if (!this.state.currentVal.includes('Limit')) {

            // Destructure currentVal, formula, and evaluated from state
            const { currentVal, formula, evaluated } = this.state;
            const number = e.target.value; // Get the number from the clicked button

            // Set evaluated to false to allow more inputs after evaluation
            this.setState({ evaluated: false });

            // Check if the current value exceeds the maximum allowed digit length (20 characters)
            if (currentVal.length > 20) {
                this.maxDigitWarning(); // If the value exceeds digit limit, show a warning
            } else if (evaluated) {
                // If the result was evaluated, reset currentVal and formula to the clicked number
                this.setState({ currentVal: number, formula: number !== '0' ? number : '' });
            } else {
                // Else, update the current value and formula accordingly
                this.setState({
                    // If the current value is '0' or contains an operator, set the current value to the clicked number
                    currentVal: currentVal === '0' || /[x/+-]/.test(currentVal) ? number : currentVal + number,

                    // If current value is '0' and clicked number is '0', retain previous formula
                    // Else, append the clicked number to the formula
                    formula:
                        currentVal === '0' && number === '0'
                            ? formula === '' ? number : formula
                            : /([^.0-9]0|^0)$/.test(formula)
                                ? formula.slice(0, -1) + number
                                : formula + number,
                });
            }
        }
    }

    /**
     * Handles decimal button clicks.
     * Adds a decimal point to the current number if it's allowed.
     */
    handleDecimal() {
        // If the expression has been evaluated already
        if (this.state.evaluated) {
            // Set the current value to '0.' and reset the formula
            this.setState({ currentVal: '0.', formula: '0.', evaluated: false });
        } else if (!this.state.currentVal.includes('.') && !this.state.currentVal.includes('Limit')) {
            const { currentVal, formula } = this.state;

            // Check if the current value exceeds the digit limit
            if (currentVal.length > 20) {
                this.maxDigitWarning(); // Show a warning if the digit limit is exceeded
            } else if (/[x/+-]$/.test(formula) || currentVal === '0' && formula === '') {
                // If formula ends with an operator or the formula is empty, start the decimal number from '0.'
                this.setState({ currentVal: '0.', formula: formula + '0.' });
            } else {
                // Otherwise, add the decimal point to the last number in the formula
                this.setState({
                    currentVal: formula.match(/(-?\d+\.?\d*)$/)[0] + '.', // Get the last number and append a decimal point
                    formula: formula + '.', // Add the decimal point to the formula
                });
            }
        }
    }

    /**
     * Resets the calculator to its initial state.
     */
    initialize() {
        // Reset the state to the initial values
        this.setState({ currentVal: '0', prevVal: '0', formula: '', evaluated: false });
    }

    /**
     * Renders the entire calculator UI including the formula, display, and buttons.
     * @returns {JSX.Element} - The JSX code that defines the calculator UI
     */
    render() {
        /**
         * Data for the buttons. Each button has an id and a label.
         * @type {Object[]}
         * @property {string} id - The id of the button
         * @property {string} label - The label of the button
         */
        const buttonData = [
            { id: 'clear', label: 'AC' },  // Clear/Reset button
            { id: 'divide', label: '/' },  // Division button
            { id: 'multiply', label: 'x' },  // Multiplication button
            { id: 'seven', label: '7' },  // Number 7
            { id: 'eight', label: '8' },  // Number 8
            { id: 'nine', label: '9' },  // Number 9
            { id: 'subtract', label: '-' },  // Subtraction button
            { id: 'four', label: '4' },  // Number 4
            { id: 'five', label: '5' },  // Number 5
            { id: 'six', label: '6' },  // Number 6
            { id: 'add', label: '+' },  // Addition button
            { id: 'one', label: '1' },  // Number 1
            { id: 'two', label: '2' },  // Number 2
            { id: 'three', label: '3' },  // Number 3
            { id: 'equals', label: '=' },  // Equals button
            { id: 'zero', label: '0' },  // Number 0
            { id: 'decimal', label: '.' },  // Decimal point button
        ];

        return (
            <div className="calculator">
                {/* Render the formula screen */}
                <Formula formula={this.state.formula.replace(/x/g, '⋅')} />

                {/* Render the output screen to display the current value */}
                <Display currentValue={this.state.currentVal || '0'} />

                <div className="buttons">
                    {/* Map over buttonData to render each button dynamically */}
                    {buttonData.map((button) => (
                        <Button
                            key={button.id}  // Set the button's unique key
                            id={button.id}  // Set the button's id
                            label={button.label}  // Set the button's label
                            onClick={this.handleNumbers}  // Attach the number click handler
                            operatorClick={this.handleOperators}  // Attach the operator click handler
                            evaluateClick={this.handleEvaluate}  // Attach the evaluate click handler
                            decimalClick={this.handleDecimal}  // Attach the decimal click handler
                            initializeClick={this.initialize}  // Attach the initialize click handler
                        />
                    ))}
                </div>
            </div>
        );
    }
}

// Render the Calculator component when the page loads and attach it to the root element.
window.addEventListener('load', () => {
    // Render the Calculator component using ReactDOM's render() method. And attach it to the element with the id 'root'.
    ReactDOM.render(<Calculator />, document.getElementById('root'))
})