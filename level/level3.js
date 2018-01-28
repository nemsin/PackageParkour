function buildWorld3()
{
    // Triggers
    levers[0] = [];
    levers[0][0] = game.add.sprite(525, 525, 'lever');
    levers[0][1] = false;

    plates[0] = [];
    plates[0][0] = game.add.sprite(1503, 525, 'plate');
    plates[0][0].scale.setTo(3, 1);
    plates[0][1] = false;

    // Wall
    obstacles[0] = ground.create(200, 425, 'wall30');
    obstacles[0].scale.setTo(0.01, 1.5);

    // Finish
    finish = game.add.sprite(2475, 375, 'finish');
    game.physics.enable(finish, Phaser.Physics.ARCADE);
}

function leverHandler3()
{
    if (!levers[triggerIndex][1])
    {
        levers[triggerIndex][1] = true;
        switch(triggerIndex)
        {
            case (0):
                obstacles[triggerIndex] = obstacles[0].y - 40;
                obstacles[0].body.velocity.y = -10;
        }
    }
}

function plateHandler3()
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

function finishHandler3()
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

function reset3()
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
