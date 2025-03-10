/**
 * Represents the "Heater Kit" sound bank for the drum machine.
 * Each object in this array corresponds to a different drum sound,
 * mapped to a specific key press (identified by `keyCode`).
 * The `keyCode` corresponds to the key code of the key that will trigger the sound.
 * The `keyTrigger` denotes the key that will trigger the sound when pressed.
 * The `id` serves as a unique identifier for the sound, matching the ID of the audio element for easy reference.
 * The `url` is the location of the audio file that will be played when the respective sound is triggered.
 * 
 * @type {Array<{keyCode: number, keyTrigger: string, id: string, url: string}>}
 */
const heaterKit = [
    {
        keyCode: 81,      // 'Q' key triggers this sound
        keyTrigger: "Q",  // Key 'Q' corresponds to this sound
        id: "Heater-1",   // Sound name (ID)
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" // Audio file URL
    },
    {
        keyCode: 87,      // 'W' key triggers this sound
        keyTrigger: "W",  // Key 'W' corresponds to this sound
        id: "Heater-2",   // Sound name (ID)
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" // Audio file URL
    },
    {
        keyCode: 69,      // 'E' key triggers this sound
        keyTrigger: "E",  // Key 'E' corresponds to this sound
        id: "Heater-3",   // Sound name (ID)
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" // Audio file URL
    },
    {
        keyCode: 65,      // 'A' key triggers this sound
        keyTrigger: "A",  // Key 'A' corresponds to this sound
        id: "Heater-4",   // Sound name (ID)
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" // Audio file URL
    },
    {
        keyCode: 83,      // 'S' key triggers this sound
        keyTrigger: "S",  // Key 'S' corresponds to this sound
        id: "Clap",       // Sound name (ID)
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" // Audio file URL
    },
    {
        keyCode: 68,      // 'D' key triggers this sound
        keyTrigger: "D",  // Key 'D' corresponds to this sound
        id: "Open-HH",    // Sound name (ID)
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" // Audio file URL
    },
    {
        keyCode: 90,      // 'Z' key triggers this sound
        keyTrigger: "Z",  // Key 'Z' corresponds to this sound
        id: "Kick-n'-Hat",// Sound name (ID)
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" // Audio file URL
    },
    {
        keyCode: 88,      // 'X' key triggers this sound
        keyTrigger: "X",  // Key 'X' corresponds to this sound
        id: "Kick",       // Sound name (ID)
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" // Audio file URL
    },
    {
        keyCode: 67,      // 'C' key triggers this sound
        keyTrigger: "C",  // Key 'C' corresponds to this sound
        id: "Closed-HH",  // Sound name (ID)
        url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" // Audio file URL
    }
];

/**
 * Represents the "Smooth Piano Kit" sound bank for the drum machine.
 * Each object in this array corresponds to a different piano sound,
 * mapped to a specific key press (identified by `keyCode`).
 * The `keyCode` corresponds to the key code of the key that will trigger the sound.
 * The `keyTrigger` denotes the key that will trigger the sound when pressed.
 * The `id` serves as a unique identifier for the sound, matching the ID of the audio element for easy reference.
 * The `url` is the location of the audio file that will be played when the respective sound is triggered.
 * 
 * @type {Array<{keyCode: number, keyTrigger: string, id: string, url: string}>}
 */
const smoothPianoKit = [
    {
        keyCode: 81,      // 'Q' key triggers this sound
        keyTrigger: "Q",  // Key 'Q' corresponds to this sound
        id: "Chord-1",    // Sound name (ID)
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" // Audio file URL
    },
    {
        keyCode: 87,      // 'W' key triggers this sound
        keyTrigger: "W",  // Key 'W' corresponds to this sound
        id: "Chord-2",    // Sound name (ID)
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" // Audio file URL
    },
    {
        keyCode: 69,      // 'E' key triggers this sound
        keyTrigger: "E",  // Key 'E' corresponds to this sound
        id: "Chord-3",    // Sound name (ID)
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" // Audio file URL
    },
    {
        keyCode: 65,      // 'A' key triggers this sound
        keyTrigger: "A",  // Key 'A' corresponds to this sound
        id: "Shaker",     // Sound name (ID)
        url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3" // Audio file URL
    },
    {
        keyCode: 83,      // 'S' key triggers this sound
        keyTrigger: "S",  // Key 'S' corresponds to this sound
        id: "Open-HH",    // Sound name (ID)
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" // Audio file URL
    },
    {
        keyCode: 68,      // 'D' key triggers this sound
        keyTrigger: "D",  // Key 'D' corresponds to this sound
        id: "Closed-HH",  // Sound name (ID)
        url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" // Audio file URL
    },
    {
        keyCode: 90,      // 'Z' key triggers this sound
        keyTrigger: "Z",  // Key 'Z' corresponds to this sound
        id: "Punchy-Kick",// Sound name (ID)
        url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" // Audio file URL
    },
    {
        keyCode: 88,      // 'X' key triggers this sound
        keyTrigger: "X",  // Key 'X' corresponds to this sound
        id: "Side-Stick", // Sound name (ID)
        url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" // Audio file URL
    },
    {
        keyCode: 67,      // 'C' key triggers this sound
        keyTrigger: "C",  // Key 'C' corresponds to this sound
        id: "Snare",      // Sound name (ID)
        url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" // Audio file URL
    }
];

/**
 * DrumPad component represents an individual drum pad.
 * It listens for key press events and plays the corresponding sound.
 */
class DrumPad extends React.Component {

    /**
     * Constructor for the DrumPad component. The initial state includes the style of the pad.
     * @param {Object} props - The props for the DrumPad component.
     */
    constructor(props) {
        super(props);
        // Initial pad style
        this.state = { padStyle: { backgroundColor: 'grey', marginTop: 13, height: 77, boxShadow: '3px 3px 5px black' } };

        // Explicitly bind methods to the class instance.
        this.playSound = this.playSound.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.activatePad = this.activatePad.bind(this);
    }

    /**
     * Listens for key press events and plays the corresponding sound
     */
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress); // Add the keydown event listener when the component is mounted (e.g., when the component is added to the DOM)
    }

    /**
     * Removes the keydown event listener when the component is unmounted.
     */
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress); // Remove the keydown event listener when the component is unmounted (e.g., when the component is removed from the DOM)
    }

    /**
     * Handles the key press event and plays the sound if the power is on.
     * 
     * @param {Object} e - The key press event.
     */
    handleKeyPress(e) {
        // Check if the power is on and if the key pressed matches the keyCode
        if (this.props.power && e.keyCode === this.props.keyCode) {
            this.playSound();
        }
    }

    /**
     * Activates the drum pad (changes its style to show it's pressed).
     * It also ensures the pad's style is reset after a short time.
     */
    activatePad() {

        // Destructure power from props
        const { power } = this.props;

        // Check if the power is on
        if (power) {
            // Check if the pad's background color is orange meaning it's already active
            if (this.state.padStyle.backgroundColor === 'orange') {
                this.setState({ padStyle: { backgroundColor: 'grey', marginTop: 13, height: 77, boxShadow: '3px 3px 5px black' } });
            } else {
                this.setState({ padStyle: { backgroundColor: 'orange', boxShadow: '0 3px orange', height: 77, marginTop: 13 } });
            }
        } else {
            this.setState({
                padStyle: { height: 77, marginTop: 13, backgroundColor: 'grey', boxShadow: '0 3px grey' }
            });
        }
    }

    /**
     * Plays the sound corresponding to the pad and activates the pad.
     * Also updates the display with the sound name.
     */
    playSound() {

        // Check if the power is off then terminate the function
        if (this.props.power === false) return;

        // Destructure keyTrigger, updateDisplay, and clipId from props
        const { keyTrigger, updateDisplay, clipId } = this.props;

        // Get the audio element for the sound
        const soundElement = document.getElementById(keyTrigger);

        // Reset the sound to the start, then play it
        soundElement.currentTime = 0; // Reset the sound
        soundElement.play();
        this.activatePad();

        // Reset pad style after a short time (100ms)
        setTimeout(() => this.activatePad(), 100); // Using the setTimeout function to reset the pad style after 100ms

        // Update the display with the name of the clip
        updateDisplay(clipId.replace(/-/g, ' ')); // Replace hyphens with spaces
    }

    /**
     * Renders the DrumPad component.
     * 
     * @returns {JSX.Element} The JSX to render.
     */
    render() {
        // Destructure clipId, clip, and keyTrigger from props
        const { clipId, clip, keyTrigger } = this.props;

        return (
            <div className="drum-pad" id={clipId} onClick={this.playSound} style={this.state.padStyle}>
                {/* Audio element for the sound */}
                <audio className="clip" id={keyTrigger} src={clip} />
                {/* Display the key trigger */}
                {keyTrigger}
            </div>
        );
    }
}

// PropTypes for the DrumPad component
DrumPad.propTypes = {
    clip: PropTypes.string.isRequired, // Audio file URL
    clipId: PropTypes.string.isRequired, // Sound name (ID)
    keyTrigger: PropTypes.string.isRequired, // Key trigger for the sound
    keyCode: PropTypes.number.isRequired, // Key code for the sound
    power: PropTypes.bool.isRequired, // Power state of the drum machine
    updateDisplay: PropTypes.func.isRequired // Function to update the display
}

/**
 * PadBank component renders a set of drum pads.
 * It maps over the pad bank to render individual DrumPad components.
 */
class PadBank extends React.Component {

    /**
     * Constructor for the PadBank component.
     * @param {Object} props - The props for the PadBank component.
     */
    constructor(props) {
        super(props);
    }

    /**
     * Renders the PadBank component, which contains multiple DrumPad components.
     * 
     * @returns {JSX.Element} The JSX for the pad bank.
     */
    render() {
        const { currentPadBank, power, updateDisplay } = this.props;

        // Map over the pad bank array and render DrumPad components
        const padComponents = currentPadBank.map((pad) => ( // Map over the pad bank array and render DrumPad components
            <DrumPad
                key={pad.id} // Key for the DrumPad component
                clip={pad.url} // Audio file URL
                clipId={pad.id} // Sound name (ID)
                keyCode={pad.keyCode} // Key code
                keyTrigger={pad.keyTrigger} // Key trigger
                power={power} // Power state
                updateDisplay={updateDisplay} // Function to update the display
            />
        ));
        return <div className="pad-bank">{padComponents}</div>; // Return the JSX for the pad bank
    }
}

// PropTypes for the PadBank component
PadBank.propTypes = {
    currentPadBank: PropTypes.array.isRequired, // Array of pad objects
    power: PropTypes.bool.isRequired, // Power state of the drum machine
    updateDisplay: PropTypes.func.isRequired // Function to update the display
}

/**
 * DrumMachine component is the parent component of the entire drum machine.
 * It manages the power, display, volume, and selected pad bank.
 */
class DrumMachine extends React.Component {

    /**
     * Constructor for the DrumMachine component.
     * @param {Object} props - The props for the DrumMachine component.
     * @constructor
     */
    constructor(props) {
        super(props);
        // Initialize state variables: power, display, current pad bank, and slider value.
        this.state = {
            power: true, // The machine is on by default.
            display: "", // Empty display character initially.
            currentPadBank: heaterKit, // Default pad bank (Heater Kit).
            currentPadBankId: "Heater Kit", // The name of the current pad bank.
            sliderVal: 0.3, // Default volume level.
        };

        // Explicitly bind methods to the class instance
        this.powerControl = this.powerControl.bind(this);
        this.selectBank = this.selectBank.bind(this);
        this.displayClipName = this.displayClipName.bind(this);
        this.adjustVolume = this.adjustVolume.bind(this);
        this.clearDisplay = this.clearDisplay.bind(this);
    }

    /**
     * Toggles the power state between on and off.
     * Resets the display to a blank character when turned off.
     */
    powerControl() {
        this.setState({ power: !this.state.power, display: "" }); // Toggle power state and reset display.
    };

    /**
     * Switches between the "Heater Kit" and "Smooth Piano Kit" pad banks.
     */
    selectBank() {
        // Check if the machine is powered on. Then toggle between two pad banks.
        if (this.state.power) {
            // Toggle between two pad banks.
            if (this.state.currentPadBankId === "Heater Kit") {
                this.setState({
                    currentPadBank: smoothPianoKit, // Switch to the Smooth Piano Kit.
                    display: "Smooth Piano Kit", // Update display with the new kit name.
                    currentPadBankId: "Smooth Piano Kit", // Update the current pad bank ID.
                });
            } else {
                this.setState({
                    currentPadBank: heaterKit, // Switch to the Heater Kit.
                    display: "Heater Kit", // Update display with the new kit name.
                    currentPadBankId: "Heater Kit", // Update the current pad bank ID.
                });
            }
        }
    };

    /**
     * Updates the display with the name of the clip being played.
     * This is used to show the name of the sound that was triggered.
     * 
     * @param {string} name - The name of the clip being played.
     */
    displayClipName(name) {
        if (this.state.power) {
            this.setState({ display: name }); // Update the display with the clip name.
        }
    };


    /**
     * Adjusts the volume based on the slider value.
     * Also updates the display to show the current volume level.
     * 
     * @param {object} e - The event object of the slider.
     */
    adjustVolume(e) {
        if (this.state.power) {
            this.setState({
                sliderVal: e.target.value, // Update the slider value with the new value.
                display: "Volume: " + Math.round(100 * e.target.value) // Update display with the volume level in percentage.
            });
            // setTimeout(() => this.clearDisplay(), 1000); // Clear display after 1 second.
        }
    };

    /**
     * Clears the display after a short delay (used to hide the volume or clip name).
     */
    clearDisplay() {
        this.setState({ display: String.fromCharCode(160) }); // Set display back to empty space.
    };

    /**
     * Renders the entire DrumMachine component.
     * This includes the pad bank, logo, power and bank controls, display, and volume slider.
     */
    render() {
        const powerStyle = this.state.power ? { float: "right" } : { float: "left" }; // Power control style.
        const bankStyle = this.state.currentPadBank === heaterKit ? { float: "left" } : { float: "right" }; // Bank control style.

        // Update the volume for all audio clips based on the current volume setting.
        const audioClips = document.getElementsByClassName("clip"); // Get all audio clips.
        Array.from(audioClips).forEach((clip) => { // Update the volume for each clip.
            clip.volume = this.state.sliderVal;
        });

        return (
            <div id="drum-machine">
                <PadBank
                    currentPadBank={this.state.currentPadBank} // Current pad bank
                    power={this.state.power} // Power state
                    updateDisplay={this.displayClipName} // Function to update the display
                />
                <div className="controls-container">
                    <div className="control">
                        <p>Power</p>
                        <div className="select" onClick={this.powerControl}>
                            <div className="inner" style={powerStyle}></div> {/* Power toggle */}
                        </div>
                    </div>
                    <p id="display">{this.state.display}</p> {/* Display showing the clip name or volume */}
                    <div className="volume-slider">
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={this.state.sliderVal} // Current volume level.
                            onChange={this.adjustVolume} // Handler to change the volume.
                        />
                    </div>
                    <div className="control">
                        <p>Bank</p>
                        <div className="select" onClick={this.selectBank}>
                            <div className="inner" style={bankStyle}></div> {/* Bank toggle */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// Render the DrumMachine component when the page loads and attach it to the root element.
window.addEventListener('load', () => {
    // Render the DrumMachine component using ReactDOM's render() method. And attach it to the element with the id 'root'.
    ReactDOM.render(<DrumMachine />, document.getElementById('root'))
})
