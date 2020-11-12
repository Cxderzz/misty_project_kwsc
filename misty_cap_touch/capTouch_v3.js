
// add return properties
misty.AddReturnProperty("Touched", "sensorPosition");
misty.AddReturnProperty("Touched", "isContacted");


// register callback function
misty.RegisterEvent("Touched", "TouchSensor", 50 ,true);


// callback function
function _Touched(data) { 
    var sensor = data.AdditionalResults[0];
    var isPressed = data.AdditionalResults[1];

    isPressed ? misty.Debug(sensor+" is Touched") : misty.Debug(sensor+ " is Released");
    
    

    if (isPressed) { 
        if (sensor == "Chin") {
            misty.PlayAudio("chin.wav");
            misty.Debug("Chin sensor detected");
            misty.ChangeLED(255, 0, 0);
            misty.MoveArm("left", -90, 100);
            misty.MoveArm("right", 90, 100);
        }
        else if (sensor == "HeadRight") {
            misty.PlayAudio("headright.wav");
            misty.Debug("headright sensor detected");
            misty.ChangeLED(173, 0, 255);
            misty.MoveArm("right", -60, 100);
            misty.MoveArm("left", 90, 100);
        }
        else if (sensor == "HeadLeft") {
            misty.PlayAudio("headleft.wav");
            misty.Debug("headleft detected");
            misty.ChangeLED(41,255,0);
            misty.MoveArm("left", -60, 100);
            misty.MoveArm("right", 90, 100);
        }
        else if (sensor == "HeadFront") {
            misty.PlayAudio("headfront.wav");
            misty.Debug("headfront detected");
            misty.ChangeLED(255,0,245);
            misty.MoveArm("both", -90, 100);
        }
        else if (sensor == "Scruff") {
            misty.PlayAudio("scruff.wav");
            misty.Debug("scruff detected");
            misty.ChangeLED(255,204,0);
            misty.MoveArm("left", -50, 100);
        }
        else if (sensor == "HeadBack") {
            misty.PlayAudio("headback.wav");
            misty.Debug("headback is detected");
            misty.ChangeLED(0,214,255)
            misty.MoveArm("both", 90, 100);
        }
        else {
            misty.Debug("Sensor Name Unknown");
        }
    }
}