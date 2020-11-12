// Javascript Code. WITH MISTY Extenstion. 

// Start Key Phrase Listening. 



function detectActivationPhrase() {
    // Print Debug Message
    misty.Debug("Listening for key startup phrase...");

    // Begin KeyPhraseRecognition Module
    misty.StartKeyPhraseRecognition(false);
    // Registers a new event listener for KeyPhraseRecognized events. 
    misty.RegisterEvent("heyMisty", "KeyPhraseRecognized", 10, false);

    // Print Debug - Key Phrase Listening Initialized
    misty.Debug("Initialzed activation phrase detection. Sound will play upon phrase detection...")

}

// Callback function for KeyPhrase Recognition 
// Functions to call upon KeyPhrase detection.
function _heyMisty() {
        // Send Debug Message - KeyPhrase detection Success!
        misty.Debug("Key Phrase recognized.");
        // Change MISTY LED to 'Lime Green (#0af726)' - UX
        misty.ChangeLED(10, 247, 38);
        misty.Speak("Hello Friend", true);
}

detectActivationPhrase();