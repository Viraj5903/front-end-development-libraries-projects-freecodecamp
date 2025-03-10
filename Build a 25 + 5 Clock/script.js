
/**
 * App component for the 25 + 5 Clock.
 * This component manages the entire functionality of the 25 + 5 Clock, including:
 * - Timer functionality for session and break times.
 * - Controls to increment/decrement session/break times.
 * - Start/Stop functionality for the timer.
 * - Resetting the timer to its initial state.
 * - Footer section with author and copyright information.
 * 
 * The 25 + 5 Clock operates by alternating between a session of work (25 minutes) and a break (5 minutes), with customizable session and break durations.
 * 
 * @class App
 * @extends React.Component
 */
class App extends React.Component {

    /**
     * Constructor to initialize the state and bind methods.
     * 
     * The constructor initializes the application state, including timer settings and state variables.
     * It also binds class methods to ensure the correct context (this) is used in event handlers.
     * 
     * @param {Object} props - The properties passed from the parent component (if any).
     * @constructor
     */
    constructor(props) {
        super(props); // Call the parent class constructor to initialize the component.

        // Initial state of the application
        this.state = {
            timerOn: false, // Whether the timer is currently running
            breakStatus: false, // Indicates whether it's break time (true) or session time (false)
            timer: 25 * 60, // The current time of the timer, initially set to 25 minutes (in seconds)
            breakTime: 5, // The break time, initially set to 5 minutes
            sessionTime: 25, // The session time, initially set to 25 minutes
        };

        // Timer reference to clear interval when resetting or stopping the timer.
        this.timer = null;

        // Bind the class methods to the current instance to ensure they have access to 'this'
        // Bind the class methods to the current instance of the class. Binding this to the class instance ensures that the methods have access to the correct 'this' context.
        this.reset = this.reset.bind(this); // Bind the reset method
        this.startStopTimer = this.startStopTimer.bind(this); // Bind the startStopTimer method
        this.increment = this.increment.bind(this); // Bind the increment method
        this.decrement = this.decrement.bind(this); // Bind the decrement method
        this.handleLengthOnClick = this.handleLengthOnClick.bind(this); // Bind the handleLengthOnClick method
    }

    /**
     * Resets the timer and other states back to the initial values.
     * It stops the current timer and resets the break and session times.
     */
    reset() {

        // Reset the state back to the initial values
        this.setState({
            timerOn: false, // Stop the timer
            breakStatus: false, // Set the timer to session time
            timer: 25 * 60, // Reset timer to 25 minutes
            breakTime: 5, // Reset break time to 5 minutes
            sessionTime: 25, // Reset session time to 25 minutes
        });

        clearInterval(this.timer); // Clear any existing intervals

        const audio = document.getElementById('beep'); // Get the audio element for beep
        audio.pause(); // Pause the beep sound
        audio.currentTime = 0; // Reset the beep sound to the beginning
    }

    /**
 * Starts or stops the timer depending on its current state.
 * - If the timer is currently running, it stops the timer by clearing the interval.
 * - If the timer is stopped, it starts the timer or resumes it, depending on the remaining time.
 * - When the timer reaches zero, it switches between session time and break time.
 */
    startStopTimer() {

        // If the timer is currently running, stop it
        if (this.state.timerOn) {
            this.setState({ timerOn: false }); // Set timer state to 'off'
            clearInterval(this.timer); // Clear the ongoing interval, stopping the timer
        }
        // If the timer is not running, start it
        else if (!this.state.timerOn) {
            this.setState({ timerOn: true }); // Set timer state to 'on'

            // If there's remaining time on the timer, start or resume it
            if (this.state.timer > 0) { // Start the timer only if there is time remaining

                // Set an interval to decrement the timer every second (1000ms) and storing the intervalId in the instance timer variable
                this.timer = setInterval(() => {

                    let currTimer = this.state.timer; // Get the current time left on the timer
                    let breakStatus = this.state.breakStatus; // Get whether the timer is in break mode

                    // Decrease the timer by 1 second
                    if (currTimer > 0) {
                        currTimer--; // Decrement the timer by 1 second
                    }
                    // If the timer reaches zero and it's not break time, switch to break time
                    else if (currTimer === 0 && !breakStatus) {
                        currTimer = this.state.breakTime * 60; // Set the timer to break time (in seconds)
                        breakStatus = true; // Set breakStatus to true, indicating it's break time
                    }
                    // If the timer reaches zero and it's break time, switch back to session time
                    else if (currTimer === 0 && breakStatus) {
                        currTimer = this.state.sessionTime * 60; // Set the timer back to session time (in seconds)
                        breakStatus = false; // Set breakStatus to false, indicating it's session time again
                    }

                    // Update the state with the new timer value and break status
                    this.setState({
                        timer: currTimer,
                        breakStatus: breakStatus
                    });
                }, 1000); // Decrease the timer every 1000ms (1 second)
            }
        }
    }

    /**
     * Increases the session or break time by 1 minute, as long as the timer isn't running.
     * @param {string} timerType - Type of timer: "session" or "break".
     */
    increment(timerType) {

        // If the timer is currently running, then don't increment the session or break time.
        // This ensures that the timer time cannot be changed while it's active.
        if (this.state.timerOn) return;

        // Switch case to handle the increment based on the specified timer type
        switch (timerType) {
            // If the timerType is "session", then increment the session time
            case "session":
                // Ensure the session time doesn't exceed 60 minutes
                if (this.state.sessionTime < 60) {
                    /* 
                    let newSessionTime = this.state.sessionTime + 1; // Increment the current session time by 1 minute
                    // Update the state with the new session time
                    this.setState({
                        sessionTime: newSessionTime, // Set the new session time
                        timer: newSessionTime * 60 // Set the timer to the new session time by converting new session time to seconds (multiplying by 60)
                    }); */


                    // Passing a callback function to setState to update the state asynchronously.
                    this.setState((prevState) => ({ // prevState is the previous state of the component
                        sessionTime: prevState.sessionTime + 1, // Increase session time by 1 minute
                        timer: (prevState.sessionTime + 1) * 60 // Update the timer to reflect the new session time in seconds. (Multiplying the new session time by 60 to get the seconds value)
                    }));
                }
                break;
            // If the timerType is "break", then increment the break time
            case "break":
                // Ensure the break time doesn't exceed 60 minutes
                if (this.state.breakTime < 60) {
                    // Increment the current break time by 1 minute
                    let newBreakTime = this.state.breakTime + 1;
                    // Update the state with the new break time
                    this.setState({
                        breakTime: newBreakTime, // Set the new break time
                    });
                }
                break;
        }
    }

    /**
     * Decreases the session or break time by 1 minute, as long as the timer isn't running.
     * @param {string} timerType - Type of timer: "session" or "break".
     */
    decrement(timerType) {

        // If the timer is currently running, then don't decrement the session or break time
        // This ensures that the timer time cannot be changed while it's active.
        if (this.state.timerOn) return;

        // Switch case to handle the decrement based on the specified timer type
        switch (timerType) {
            // If the timerType is "session", then decrement the session time
            case "session":
                // Ensure the session time doesn't go below 1 minute
                if (this.state.sessionTime > 1) {
                    // Decrement the current session time by 1 minute and store the new session time in a newSessionTime variable
                    let newSessionTime = this.state.sessionTime - 1;

                    // Update the state with the new session time
                    this.setState({
                        sessionTime: newSessionTime, // Set the new session time
                        timer: newSessionTime * 60 // Set the timer to the new session time by converting new session time to seconds (multiplying by 60)
                    });
                    /*
                    // Passing a callback function to setState to update the state asynchronously.
                    this.setState((prevState) => ({ // prevState is the previous state of the component
                        sessionTime: prevState.sessionTime - 1, // Decrease session time by 1 minute
                        timer: (prevState.sessionTime - 1) * 60 // Update the timer to reflect the new session time in seconds. (Multiplying the new session time by 60 to get the seconds value)
                    })); */
                }
                break;

            // If the timerType is "break", then decrement the break time
            case "break":
                // Ensure the break time doesn't go below 1 minute
                if (this.state.breakTime > 1) {

                    // Decrement the current break time by 1 minute
                    let newBreakTime = this.state.breakTime - 1;

                    // Update the state with the new break time
                    this.setState({
                        breakTime: newBreakTime, // Set the new break time
                    });
                }
                break;
        }
    }

    /**
     * Handles the click event to either increment or decrement the session or break time,
     * depending on the provided operation.
     * This method triggers the appropriate action based on whether the user clicked the "+" or "-" button.
     * 
     * @param {string} operation - The operation to perform: "+" to increment or "-" to decrement.
     * @param {string} timerType - The type of timer to modify: "session" or "break".
     */
    handleLengthOnClick(operation, timerType) {

        // If the operation is "+", increment the time for the specified timer type
        if (operation === "+") {
            this.increment(timerType); // Call increment function based on the timerType (session or break)
        }
        // If the operation is "-", decrement the time for the specified timer type
        else if (operation === "-") {
            this.decrement(timerType); // Call decrement function based on the timerType (session or break)
        }
    }


    /**
     * Renders the UI for the 25 + 5 Clock.
     * 
     * The UI consists of the following sections:
     * - The main title ("25 + 5 Clock").
     * - Length control sections for both session and break timers, where users can adjust the time.
     * - A timer display showing the current countdown, indicating whether the timer is in "session" or "break" mode.
     * - Timer control buttons that allow users to start/stop the timer and reset it.
     * - A footer with attribution and copyright information.
     * 
     * The component dynamically renders the current session time, break time, and the remaining time on the timer.
     * Event handlers are provided for user interactions such as changing the length of session/break times and starting/stopping the timer.
     * 
     * @returns {JSX.Element} - The JSX code that defines the UI structure for the 25 + 5 Clock.
     */
    render() {
        // Return the JSX that represents the entire UI structure for the 25 + 5 Clock
        return (
            <div className="container"> {/* Main container for the 25 + 5 Clock UI */}
                <div className="main-title">25 + 5 Clock</div> {/* Display the title for the clock */}

                {/* Container for the session and break length controls */}
                <div className="length-controls">
                    {/* Render the LengthControl component for session time */}
                    <LengthControl
                        title="Session" // The title displayed for the session length control
                        titleID="session-label" // Unique ID for the session title
                        length={this.state.sessionTime} // The current session time in minutes (state-driven)
                        lengthID="session-length" // Unique ID for displaying the session length
                        minID="session-decrement" // Unique ID for the session time decrement button
                        addID="session-increment" // Unique ID for the session time increment button
                        onClick={(event, operation) => this.handleLengthOnClick(operation, "session")} // Event handler for modifying the session time
                    />

                    {/* Render the LengthControl component for break time */}
                    <LengthControl
                        title="Break" // The title displayed for the break length control
                        titleID="break-label" // Unique ID for the break title
                        length={this.state.breakTime} // The current break time in minutes (state-driven)
                        lengthID="break-length" // Unique ID for displaying the break length
                        minID="break-decrement" // Unique ID for the break time decrement button
                        addID="break-increment" // Unique ID for the break time increment button
                        onClick={(event, operation) => this.handleLengthOnClick(operation, "break")} // Event handler for modifying the break time
                    />
                </div>

                {/* Render the TimerDisplay component which shows the current countdown and status (session/break) */}
                <TimerDisplay
                    timer={this.state.timer} // The current countdown time in seconds
                    breakStatus={this.state.breakStatus} // Boolean indicating if the timer is in break mode or session mode
                />

                {/* Render the TimerControl component to manage the timer (start/stop/reset) */}
                <TimerControl
                    timerOn={this.state.timerOn} // Boolean indicating if the timer is currently running
                    startStopTimer={this.startStopTimer} // Function to start or stop the timer
                    reset={this.reset} // Function to reset the timer back to the initial state
                />

                {/* Footer section containing attribution and copyright information */}
                <div className="footer">
                    By Viraj Patel {/* Author attribution */}
                    <br />
                    Copyright &copy; 2025 {/* Copyright notice */}
                </div>
            </div>
        );
    }
}

/**
 * Represents a control component for adjusting the length of a session or break timer.
 * This component allows users to increment or decrement the session/break time.
 * 
 * It consists of:
 * - A title (either "Session" or "Break").
 * - A display of the current length value (in minutes).
 * - Two buttons: one to increment and one to decrement the length.
 * 
 * @class LengthControl
 * @extends React.Component
 */
class LengthControl extends React.Component {

    /**
     * Constructor for the LengthControl component.
     * Initializes the component and sets up the necessary props.
     * 
     * @param {Object} props - The properties passed to the component.
     * @constructor
     */
    constructor(props) {
        super(props); // Call the parent class constructor to properly initialize the component.
    }

    /**
     * Renders the UI for the length control, which includes:
     * - A title to indicate whether the control is for session or break time.
     * - A button to decrement the current length (session or break time).
     * - A button to increment the current length (session or break time).
     * - Displays the current length in minutes between the increment and decrement buttons.
     * 
     * @returns {JSX.Element} - The JSX code that defines the UI structure for the length control component.
     */
    render() {

        // Destructure the title, titleID, length, lengthID, minID, addID, and onClick method from the props
        const { title, titleID, length, lengthID, minID, addID, onClick } = this.props;

        return (
            <div className="length-control"> {/* Container for the entire length control section */}
                <div id={titleID}>{title}</div> {/* Display the title ("Session" or "Break") using the provided titleID prop */}
                <div className="btn-container"> {/* Container for the buttons (increment and decrement) */}
                    {/* Render the decrement button for reducing the timer length */}
                    <button
                        className="btn-level" // CSS class to style the button
                        id={minID} // Unique ID for the decrement button (from props)
                        onClick={(event) => onClick(event, "-")} // When clicked, call onClick handler with "-" as operation argument
                    >
                        {/* Icon to represent the decrement action (down arrow) */}
                        <i className="fa fa-arrow-down fa-2x"></i>
                    </button>

                    {/* Display the current length value (session or break time) */}
                    <div className="btn-level" id={lengthID}>
                        {length} {/* Render the current length value (minutes) */}
                    </div>

                    {/* Render the increment button for increasing the timer length */}
                    <button
                        className="btn-level" // CSS class to style the button
                        id={addID} // Unique ID for the increment button (from props)
                        onClick={(event) => onClick(event, "+")} // When clicked, call onClick handler with "+" as operation argument
                    >
                        {/* Icon to represent the increment action (up arrow) */}
                        <i className="fa fa-arrow-up fa-2x"></i>
                    </button>
                </div>
            </div>
        );
    }
}

// PropTypes validation for the LengthControl component
LengthControl.propTypes = {
    title: PropTypes.string.isRequired, // The title of the control (e.g., "Session" or "Break") - Required string prop
    titleID: PropTypes.string.isRequired, // The ID for the title element - Required string prop
    length: PropTypes.number.isRequired, // The current length of the session or break (in minutes) - Required number prop
    lengthID: PropTypes.string.isRequired, // The ID for the display element showing the current length - Required string prop
    minID: PropTypes.string.isRequired, // The ID for the decrement button - Required string prop
    addID: PropTypes.string.isRequired, // The ID for the increment button - Required string prop
    onClick: PropTypes.func.isRequired, // The click handler function for incrementing or decrementing the timer - Required function prop
};

/**
 * Represents the timer display UI for the 25 + 5 Clock.
 * This component displays the current time left on the timer (formatted as MM:SS),
 * and indicates whether the timer is in a "Session" or "Break" state.
 * 
 * The component also triggers a beep sound when the timer reaches 0.
 * 
 * @class TimerDisplay
 * @extends React.Component
 */
class TimerDisplay extends React.Component {

    /**
     * Constructor for the TimerDisplay component.
     * Initializes the component by calling the parent class constructor.
     * 
     * @param {Object} props - The properties passed to the component.
     * @constructor
     */
    constructor(props) {
        super(props); // Call the parent class constructor to properly initialize the component.
    }

    /**
     * Renders the UI for the timer display, which includes:
     * - The label indicating whether it is "Session" or "Break".
     * - The current timer value displayed in MM:SS format.
     * - Plays a beep sound when the timer reaches 0.
     * 
     * @returns {JSX.Element} - The JSX code defining the UI structure for the timer display.
     */
    render() {
        const { timer, breakStatus } = this.props; // Destructure the timer and breakStatus from props

        // Calculate the current minutes and seconds from the total timer (in seconds)
        let currentMinutes = Math.floor(timer / 60);  // Calculate the minutes
        let currentSeconds = Math.floor(timer % 60); // Calculate the seconds

        // Ensure the minutes and seconds are always displayed as two digits
        if (currentMinutes < 10) { // If the minutes are less than 10 (1 digit) then add a leading zero (0)
            currentMinutes = "0" + currentMinutes; // Concatenate the leading zero and the minutes
        }

        if (currentSeconds < 10) { // If the seconds are less than 10 (1 digit) then add a leading zero (0)
            currentSeconds = "0" + currentSeconds; // Concatenate the leading zero and the seconds
        }

        // Format the timer as MM:SS
        let currentTimer = `${currentMinutes}:${currentSeconds}`;

        // Get the beep sound element by its ID
        const beep = document.getElementById('beep');

        // If the timer reaches 0, play the beep sound
        if (timer === 0) {
            beep.play(); // Play the beep sound
        }

        return (
            <div className="timer"> {/* Main container for the timer display */}
                <div className="timer-wrapper"> {/* Wrapper for the label and time left */}
                    {/* Display the label for the timer ("Session" or "Break") */}
                    <div id="timer-label">
                        {/* Conditionally render "Break" or "Session" based on the 'breakStatus' prop */}
                        {breakStatus ? "Break" : "Session"}
                    </div>
                    {/* Display the formatted timer (MM:SS) */}
                    <div id="time-left">{currentTimer}</div>
                </div>
            </div>
        );
    }
}

// PropTypes for the TimerDisplay component
TimerDisplay.propTypes = {
    timer: PropTypes.number.isRequired,      // 'timer' should be a number (remaining time in seconds)
    breakStatus: PropTypes.bool.isRequired   // 'breakStatus' should be a boolean indicating if it's break time
};

/**
 * Represents the control buttons for starting, stopping, and resetting the timer.
 * This component provides the following functionalities:
 * - Start/Stop the timer (toggle between play and pause).
 * - Reset the timer to its initial state.
 * - Play a beep sound when the timer reaches zero.
 * 
 * @class TimerControl
 * @extends React.Component
 */
class TimerControl extends React.Component {

    /**
     * Constructor for the TimerControl component.
     * Initializes the component by calling the parent class constructor.
     * 
     * @param {Object} props - The properties passed to the component.
     * @constructor
     */
    constructor(props) {
        super(props); // Call the parent class constructor to properly initialize the component.
    }

    /**
     * Renders the UI for the timer control, which includes:
     * - A button to start or stop the timer, toggling between play and pause.
     * - A button to reset the timer to its initial state.
     * - An audio element to play a beep sound when the timer reaches zero.
     * 
     * @returns {JSX.Element} - The JSX code defining the UI structure for the timer control.
     */
    render() {
        const { timerOn, startStopTimer, reset } = this.props; // Destructure the timerOn, startStopTimer method, and reset method from props for rendering the UI

        return (
            <div className="timer-control"> {/* Container for the timer control section */}
                {/* Start/Stop button: Toggle between play (start) and pause (stop) */}
                <button id="start_stop" onClick={startStopTimer}>
                    {/* Conditionally render the play/pause icon based on the 'timerOn' prop */}
                    {/* Play icon when timerOn is true (timer is running), pause icon when timerOn is false (timer is paused) */}
                    <i className={timerOn ? "fa fa-pause fa-2x" : "fa fa-play fa-2x"}></i> {/* Icon changes based on the timer status */}
                </button>

                {/* Reset button: Resets the timer to its initial state */}
                <button id="reset" onClick={reset}>
                    <i className="fa fa-refresh fa-2x"></i> {/* Refresh icon for the reset action */}
                </button>

                {/* Audio element to play a beep sound when the timer reaches 0 */}
                <audio id="beep" src="http://www.trekcore.com/audio/computer/hailalert_1.mp3" />
            </div>
        )
    }
}

// PropTypes for the TimerControl component
TimerControl.propTypes = {
    timerOn: PropTypes.bool.isRequired,         // 'timerOn' should be a boolean indicating if the timer is currently running
    startStopTimer: PropTypes.func.isRequired,  // 'startStopTimer' should be a function to start or stop the timer
    reset: PropTypes.func.isRequired            // 'reset' should be a function to reset the timer
};

// Render the App component when the page loads and attach it to the root element.
window.addEventListener('load', () => {
    // Render the App component using ReactDOM's render() method. And attach it to the element with the id 'root'.
    ReactDOM.render(<App />, document.getElementById('root'));
});
