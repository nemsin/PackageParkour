// Behind the name of every function is the index of the level required!
// those have to be written into the switch cases in index
function buildWorld2()
{
    // creating the triggers (levers & plates)

    // creation of Steps & obstacles (liftable require physics, immovables don't)
    obstacles[0] = grounds.create(250, 520, 'wall30');

    obstacles[1] = grounds.create(150, 520, 'wall30');
    obstacles[1].scale.setTo(7, 0.025);



    obstacles[2] = grounds.create(500, 500, 'wall30');
    obstacles[2].scale.setTo(3.5, 3);

    obstacles[3] = grounds.create(600, 450, 'wall30');
    obstacles[3].scale.setTo(3.5, 3);

    obstacles[4] = grounds.create(700, 400, 'wall30');
    obstacles[4].scale.setTo(3.5, 3);

    obstacles[5] = grounds.create(800, 350, 'wall30');
    obstacles[5].scale.setTo(3.5, 3);


    obstacles[6] = grounds.create(1000, 350, 'wall30');
    obstacles[6].scale.setTo(3.5, 3);

    obstacles[7] = grounds.create(1100, 400, 'wall30');
    obstacles[7].scale.setTo(3.5, 3);

    obstacles[8] = grounds.create(1200, 450, 'wall30');
    obstacles[8].scale.setTo(3.5, 3);

    obstacles[9] = grounds.create(1300, 500, 'wall30');
    obstacles[9].scale.setTo(3.5, 3);

    steps[0] = [];
    steps[0][0] = grounds.create(2000, 475, 'wall10');
    game.physics.enable(steps[0][0], Phaser.Physics.ARCADE);

    levers[0] = [];
    levers[0][0] = game.add.sprite(2050, 450, 'lever');
    levers[0][1] = false;

    obstacles[10] = grounds.create(2100, 400, 'wall10');

    obstacles[11] = grounds.create(2150, 475, 'wall10');

    // creation of the Finish (requires physics)
    f = game.add.sprite(2182, 350, 'finish1');
    finish = game.add.sprite(2300, 506, 'finish2');
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
                    steps[0][0].body.velocity.y = 10;
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
    level = 3; // change to the number of the next level

    // destroy all existing steps & obstacles
    for (var i = 0; i < obstacles.length; i++)
        obstacles[i].destroy();
    obstacles = [];

    steps[0][0].destroy();
    steps = [];

    levers[0][0].destroy();
    levers = [];

    f.destroy();
    finish.destroy();

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
    steps[0][0].x = 2000;
    steps[0][0].y = 475;
    steps[0][1] = null;
    steps[0][0].body.velocity.y = 0;

    // reset levers & plates
    levers[0][1] = false;

    // reset of the player and package
    player.x = 0;
    player.y = 0;
    player.body.velocity.x = 0;
    package.x = 20;
    package.y = 0;
    package.body.velocity.x = 0;
}
