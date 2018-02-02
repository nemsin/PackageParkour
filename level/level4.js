function buildWorld4()
{
    levers[0] = [];
    levers[0][0] = game.add.sprite(720, 445, 'lever');
    levers[0][1] = false;

    plates[0] = [];
    plates[0][0] = game.add.sprite(1025, 545, 'plate');
    plates[0][0].scale.setTo(2, 1);
    plates[0][1] = false;

    //*
    steps[0] = [];
    steps[0][0] = grounds.create(250, 490, 'ground');
    steps[0][0].scale.setTo(0.2, 0.8);
    steps[0][0].smoothed = true;
    game.physics.enable(steps[0][0], Phaser.Physics.ARCADE);

    steps[1] = [];
    steps[1][0] = grounds.create(650, 490, 'wall30');
    steps[1][0].scale.setTo(3, 0.07);
    steps[1][0].smoothed = true;
    steps[1][0].alpha = 0;
    game.physics.enable(steps[1][0], Phaser.Physics.ARCADE);

    //steps[2] = [];
    //steps[2][0] = grounds.create(740, 390, 'wall10');

    steps[3] = [];
    steps[3][0] = grounds.create(800, 390, 'ground');
    steps[3][0].scale.setTo(0.04, 1.1);
    steps[3][0].smoothed = true;
    game.physics.enable(steps[3][0], Phaser.Physics.ARCADE);

    steps[4] = [];
    steps[4][0] = grounds.create(1000, 390, 'ground');
    steps[4][0].scale.setTo(0.1, 0.8);
    steps[4][0].smoothed = true;
    game.physics.enable(steps[4][0], Phaser.Physics.ARCADE);

    steps[5] = [];
    steps[5][0] = grounds.create(1000, 500, 'ground');
    steps[5][0].scale.setTo(0.01, 0.8);
    steps[5][0].smoothed = true;
    game.physics.enable(steps[5][0], Phaser.Physics.ARCADE);

    steps[6] = [];
    steps[6][0] = grounds.create(905, 550, 'wall2');
    steps[6][0].scale.setTo(3.11, 0.07);
    steps[6][0].smoothed = true;
    steps[6][0].alpha = 0;
    game.physics.enable(steps[6][0], Phaser.Physics.ARCADE);

    // Finish
    finish = game.add.sprite(1400, 525, 'finish');
    game.physics.enable(finish, Phaser.Physics.ARCADE);
}

function leverHandler4()
{
    if (!levers[triggerIndex][1])
    {
        levers[triggerIndex][1] = true;
        switch(triggerIndex)
        {
            case (0):
                steps[1][0].alpha = 1;
                steps[1][1] = steps[1][0].y - 100;
                steps[1][0].body.velocity.y = -5;
                levers[0][0].alpha = 0;
        }
    }
}

function plateHandler4()
{
    if (!plates[triggerIndex][1])
    {
        plates[triggerIndex][1] = true;
        switch(triggerIndex)
        {
            case (0):
                steps[6][0].alpha = 1;
                steps[6][1] = steps[6][0].y - 160;
                steps[6][0].body.velocity.y = -10;
                break;
        }
    }
}

function liftObstacle4()
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

function finishHandler4()
{
    level = 0;
    for (var i = 0; i < plates.length; i++) {
        plates[i][0].destroy();
    }
    for (var i = 0; i < steps.length; i++) {
        steps[i][0].destroy();
    }
    levers[0][0].destroy();
    finish.destroy();

    player.x = 0;
    player.y = 0;
    player.body.velocity.x = 0;
    package.x = 20;
    package.y = 0;
    package.body.velocity.x = 0;
    didLoad = false;
}

function reset4()
{
    steps[1][0].alpha = 0;
    steps[1][0].x = 650;
    steps[1][0].y = 490;
    levers[0][0].alpha = 1;
    steps[6][0].x = 905;
    steps[6][0].y = 550;

    levers[0][1] = false;
    plates[0][1] = false;

    player.x = 0;
    player.y = 0;
    player.body.velocity.x = 0;
    package.x = 20;
    package.y = 0;
    package.body.velocity.x = 0;
}