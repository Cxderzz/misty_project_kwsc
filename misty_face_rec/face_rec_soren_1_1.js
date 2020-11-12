// MISTY FACE DETECTION
// VERSION 1.1
// CODE WRITTEN BY SOREN KELLY
// UPDATED 20 OCT 2020


// The following function resets Misty's Arms, Head, LED and Image to default, to prevent situations where misty could fail due to not being in default position
function reset() {
    console.log("RESET FUNCTION RUNNING");
    misty.Pause(100);
    misty.MoveHeadDegrees(0, 0, 0, 40);
    misty.MoveArmDegrees("both", 70, 100);
    misty.ChangeLED(0, 255, 0);
    misty.DisplayImage("e_DefaultContent.jpg");
    console.log("RESET FUNCTION FINISHED");
}


// The following function registers the "Property Test" and registers the "event" to misty's server. The property test is there to make sure the callback does not trigger on
// non-facial recognition events. The Register Event function opens a new listener to the misty server to allow for facial recognition data to be streamed back to the misty local server.misty
// The debounce value is set to 1000 but can be changed to something such as 500 if misty is not streaming data often enough. The 4th value is the "KeepAlive" parameter, which ensures that
// misty will keep listening for new face's after the first one is found.
function register_face_rec() {
    console.log("Registering face rec func. FUNCTION RUNNING");
    misty.AddPropertyTest("FaceRec", "Label", "exists", "", "string");
    misty.RegisterEvent("FaceRec", "FaceRecognition", 1000, true);
    console.log("REGISTER FACE REC FUNC RUNNING.");
}


// This function uses the math module to return a random number
// Because the Math.random() function returns a float, we use the Math.floor() function to round DOWN to the nearest integer. By multiplying math.random() by math.floor(max), we are
// capping the result at the maximum number called.
function get_random_int(max) {

    console.log("RANDOM INTEGER FUNCTION RUNNING");
    return Math.floor(Math.random() * Math.floor(max));
}


// The callback function that we registered using the misty.RegisterEvent() function above. This function is called whenever a new face is found from the live stream of data from the event listener
function _FaceRec(data) {

    console.log("FACE REC CALLBACK FUNCTION NOW RUNNING");

    console.log("NOW DISPLAYING THE DATA");
    misty.Debug(JSON.stringify(data));

    const random = get_random_int(6);
    console.log("RANDOM NUMBER PICKED");


    if (random == 1) {
        // misty happy face code to be put here
        misty.Debug("happy face");
        misty.Debug("random number :");
        misty.Debug(random);
    }

    else if  (random == 2) {
        // misty happy face code
        misty.Debug("sad face");
        misty.Debug("random number :");
        misty.Debug(random);
    }

    else if (random == 3) {
        // misty mad code
        misty.Debug("mad face");
        misty.Debug("random number:");
        misty.Debug(random);

    }
    else if (random == 4) {
        // misty confused code
        misty.Debug("confused code");
        console.log("random number:");
        misty.Debug(random);
    }
    else if (random == 5) {
        // misty excited code go here
        misty.Debug("excited face");
        misty.Debug("random number");
        misty.Debug(random);
    }

    else {
        console.log("soren u messed up the random module");
        console.log("soren you must -1 from" + random + ". (This is the random module)");
    }

    /*
    SWITCH CASE EQUIVALENT:


    switch (random) {
        case 1:
            // misty happy face code
            misty.Debug("happy face")
            misty.Debug("random number :")
            misty.Debug(random)
            break;
        case 2:
            // misty happy face code
            misty.Debug("sad face")
            misty.Debug("random number :")
            misty.Debug(random)
            break;
        case 3:
            // misty mad code
            misty.Debug("mad face")
            misty.Debug("random number:");
            break;
        case 4:
            // misty confused code go here
            misty.Debug("confused face");
            misty.Debug("random number: ")
            misty.Debug(random);
            break;
        case 5:
            // misty excited code go here
            misty.Debug("Excited face");
            misty.Debug("random number:")
            misty.Debug(random);
        default:
            // misty default code go here
            misty.Debug("soren you are an idiot")
            console.log("Soren you msut lower the amount of " + random + "by -1")
            break;

    }
    */

}


misty.Debug("Starting the face recognition file");
misty.Debug("resetting misty to normal");
reset();
console.log("CALLING REGISTER FACE REC FUNCTION");
register_face_rec();


