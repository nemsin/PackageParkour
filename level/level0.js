function buildWorld0()
{
    // Triggers
    levers[0] = [];
    levers[0][0] = game.add.sprite(525, 425, 'lever');
    levers[0][1] = false;

    plates[0] = [];
    plates[0][0] = game.add.sprite(1503, 398, 'plate');
    plates[0][0].scale.setTo(3, 1);
    plates[0][1] = false;

    // First step
    steps[0] = [];
    steps[0][0] = grounds.create(450, 550, 'ground');
    //steps[1][0].scale.setTo(0.1, 1);
    game.physics.enable(steps[0][0], Phaser.Physics.ARCADE);

    steps[1] = [];
    steps[1][0] = grounds.create(500, 475, 'ground');
    steps[1][0].scale.setTo(1, 1.5);

    // Second step
    steps[2] = [];
    steps[2][0] = grounds.create(1450, 475, 'ground');
    steps[2][0].scale.setTo(1, 2);
    game.physics.enable(steps[2][0], Phaser.Physics.ARCADE);

    steps[3] = [];
    steps[3][0] = grounds.create(1500, 400, 'ground');
    steps[3][0].scale.setTo(1, 2);

    // Finish
    finish = game.add.sprite(2475, 375, 'finish');
    game.physics.enable(finish, Phaser.Physics.ARCADE);
}

function leverHandler0()
{
    if (!levers[triggerIndex][1])
    {
        levers[triggerIndex][1] = true;
        switch(triggerIndex)
        {
            case (0):
                steps[0][1] = steps[0][0].y - 40;
                steps[0][0].body.velocity.y = -10;
        }
    }
}

function plateHandler0()
{
    if (!plates[triggerIndex][1])
    {
        plates[triggerIndex][1] = true;
        switch(triggerIndex)
        {
            case (0):
                steps[2][1] = steps[2][0].y - 40;
                steps[2][0].body.velocity.y = -10;
        }
    }
}

function liftObstacle0()
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

function finishHandler0()
{
    level = 0;
    steps[0][0].destroy();
    steps[1][0].destroy();
    steps[2][0].destroy();
    steps[3][0].destroy();
    levers[0][0].destroy();
    plates[0][0].destroy();
    player.x = 0;
    player.y = 0;
    player.body.velocity.x = 0;
    package.x = 20;
    package.y = 0;
    package.body.velocity.x = 0;
    didLoad = false;
}

function reset0()
{
    steps[0][0].x = 450;
    steps[0][0].y = 550;
    steps[0][0].body.velocity.y = 0;
    steps[0][1] = null;

    steps[2][0].x = 1450;
    steps[2][0].y = 475;
    steps[2][0].body.velocity.y = 0;
    steps[2][1] = null;

    levers[0][1] = false;
    plates[0][1] = false;

    player.x = 0;
    player.y = 0;
    player.body.velocity.x = 0;
    package.x = 20;
    package.y = 0;
    package.body.velocity.x = 0;
}
