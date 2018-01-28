// Behind the name of every function is the index of the level required!
// those have to be written into the switch cases in index
function buildWorld2()
{
    // creating the triggers (levers & plates)

    // creation of Steps & obstacles (liftable require physics, immovables don't)
    obstacles[0] = obstacleG.create(250, 520, 'wall10');

    obstacles[1] = obstacleG.create(200, 520, 'wall10');
    obstacles[1].scale.setTo(10, 0.025);



    obstacles[2] = obstacleG.create(500, 500, 'wall10');
    //obstacles[2].scale.setTo(0.04, 1);

    obstacles[3] = obstacleG.create(600, 450, 'wall10');
    //obstacles[3].scale.setTo(0.04, 2);

    obstacles[4] = obstacleG.create(700, 400, 'wall10');
    //obstacles[4].scale.setTo(0.04, 3);

    obstacles[5] = obstacleG.create(800, 350, 'wall10');
    //obstacles[5].scale.setTo(0.04, 4);

    // creation of the Finish (requires physics)
    finish = game.add.sprite(2475, 525, 'finish');
    game.physics.enable(finish, Phaser.Physics.ARCADE);
}

function leverHandler2()
{
    if (levers[triggerIndex] != null)
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

function plateHandler2()
{
    if (levers[triggerIndex] != null)
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

function finishHandler2()
{
    // next level
    level = 2; // change to the number of the next level

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

function reset2()
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
