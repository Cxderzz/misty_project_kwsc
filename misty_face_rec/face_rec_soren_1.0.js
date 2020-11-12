// MISTY FACE DETECTION
// VERSION 1.1
// CODE WRITTEN BY SOREN KELLY
// UPDATED 20 OCT 2020

function reset() {
    console.log("RESET FUNCTION RUNNING")
    misty.Pause(100);
    misty.MoveHeadDegrees(0, 0, 0, 40);
    misty.MoveArmDegrees("both", 70, 100);
    misty.ChangeLED(0, 255, 0);
    misty.DisplayImage("e_DefaultContent.jpg");
    console.log("RESET FUNCTION FINISHED")
}

function register_face_rec() {
    console.log("Registering face rec func. FUNCTION RUNNING")
    misty.AddPropertyTest("FaceRec", "Label", "exists", "", "string");
    misty.RegisterEvent("FaceRec", "FaceRecognition", 1000, true);
    console.log("REGISTER FACE REC FUNC RUNNING.")
}

function get_random_int(max) {
    console.log("RANDOM INTEGER FUNCTION RUNNING")
    return Math.floor(Math.random() * Math.floor(max))
}

function _FaceRec(data) {

    console.log("FACE REC CALLBACK FUNCTION NOW RUNNING")

    console.log("NOW DISPLAYING THE DATA");
    misty.Debug(JSON.stringify(data));

    const random = get_random_int(6)
    
    console.log("RANDOM NUMBER PICKED")


    if (random == 1) {
        // misty happy face code
        misty.Debug("happy face")
        misty.Debug("random number :")
        misty.Debug(random)        

    }
    else if  (random == 2) {
        // misty happy face code
        misty.Debug("sad face")
        misty.Debug("random number :")
        misty.Debug(random)
    }
    else if (random == 3) {
        // misty mad code
        misty.Debug("mad face")
        misty.Debug("random number:")
        misty.Debug(random)

    }
    else if (random == 4) {
        // misty confused code
        misty.Debug("confused code")
        console.log("random number:")
        misty.Debug(random)
    }
    else if (random == 5) {
        // misty excited code go here
        misty.Debug("excited face")
        misty.Debug("random number")
        misty.Debug(random)
    }

    else {
        console.log("soren u messed up the random module")
        console.log("soren you must -1 from" + random + ". (This is the random module)")


    }

    /*
    SWITCH CASE:


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
register_face_rec();


