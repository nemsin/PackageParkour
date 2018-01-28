// Behind the name of every function is the index of the level required!
// those have to be written into the switch cases in index
function buildWorld()
{
    // creating the triggers (levers & plates)

    // creation of Steps (liftable require physics, immovables don't)

    // creation of the Finish (requires physics)

    game.physics.enable(finish, Phaser.Physics.ARCADE);
}

function leverHandler()
{
    if (!levers[triggerIndex][1])
    {
        levers[triggerIndex][1] = true;
        switch(triggerIndex)
        {
            case (0):
                // DO STUFF HERE
        }
    }
}

function plateHandler()
{
    if (!plates[triggerIndex][1])
    {
        plates[triggerIndex][1] = true;
        switch(triggerIndex)
        {
            case (0):
            // DO STUFF HERE
        }
    }
}

// function for lifting obstacles --- DO NOT EDIT
function liftObstacle()
{
    for (var i = 0; i < steps.length; i++)
    {
        if (steps[i][1] != null)
            if (steps[i][0].y <= steps[i][1])
            {
                steps[i][1] = null;
                steps[i][0].body.velocity.y = 0;
            }
    }
}

function finishHandler()
{
    // next level
    level = 0; // change to the number of the next level

    // destroy all existing steps & obstacles


    // reset of the player & package
    player.x = 0;
    player.y = 0;
    player.body.velocity.x = 0;
    package.x = 20;
    package.y = 0;
    package.body.velocity.x = 0;

    // reset didLoad, to allow loading the next level
    didLoad = false;
}

function reset()
{
    // reset all movable steps

    // reset levers & plates

    // reset of the player and package
    player.x = 0;
    player.y = 0;
    player.body.velocity.x = 0;
    package.x = 20;
    package.y = 0;
    package.body.velocity.x = 0;
}
