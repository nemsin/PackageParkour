function buildWorld1()
{
    levers[0] = [];
    levers[0][0] = game.add.sprite(470, 425, 'lever');
    levers[0][1] = false;

    plates[0] = [];
    plates[0][0] = game.add.sprite(350, 545, 'plate');
    plates[0][1] = false;

    plates[1] = [];
    plates[1][0] = game.add.sprite(875, 470, 'plate');
    plates[1][1] = false;

    plates[2] = [];
    plates[2][0] = game.add.sprite(1725, 295, 'plate');
    plates[2][1] = false;

    //liftable steps require physics!!

    tree[0] = game.add.sprite(600, 375, 'tree');
    tree[1] = game.add.sprite(950, 375, 'tree');
    tree[2] = game.add.sprite(1200, 450, 'tree');

    //*
    steps[0] = [];
    steps[0][0] = grounds.create(250, 475, 'ground');
    steps[0][0].scale.setTo(0.01, 1);
    steps[0][0].smoothed = true;
    game.physics.enable(steps[0][0], Phaser.Physics.ARCADE);

    // Ground Test
    steps[1] = [];
    steps[1][0] = grounds.create(450, 475, 'ground');
    steps[1][0].scale.setTo(0.1, 1);
    steps[1][0].smoothed = true;
    game.physics.enable(steps[1][0], Phaser.Physics.ARCADE);

    //*
    steps[2] = [];
    steps[2][0] = grounds.create(400, 550, 'ground');
    steps[2][0].scale.setTo(0.02, 1);
    steps[2][0].smoothed = true;
    game.physics.enable(steps[2][0], Phaser.Physics.ARCADE);

    steps[3] = [];
    steps[3][0] = grounds.create(850, 475, 'ground');
    steps[3][0].scale.setTo(0.1, 1);
    steps[3][0].smoothed = true;
    game.physics.enable(steps[3][0], Phaser.Physics.ARCADE);

    //*
    steps[4] = [];
    steps[4][0] = grounds.create(775, 550, 'ground');
    steps[4][0].scale.setTo(0.005, 1);
    steps[4][0].smoothed = true;
    game.physics.enable(steps[4][0], Phaser.Physics.ARCADE);

    steps[5] = [];
    steps[5][0] = grounds.create(1150, 425, 'ground');
    steps[5][0].scale.setTo(0.08, 0.05);
    steps[5][0].smoothed = true;
    game.physics.enable(steps[5][0], Phaser.Physics.ARCADE);

    //*
    steps[6] = [];
    steps[6][0] = grounds.create(1400, 375, 'ground');
    steps[6][0].scale.setTo(0.1, 0.05);
    steps[6][0].smoothed = true;
    game.physics.enable(steps[6][0], Phaser.Physics.ARCADE);

    steps[7] = [];
    steps[7][0] = grounds.create(1700, 300, 'ground');
    steps[7][0].scale.setTo(0.7, 3);
    steps[7][0].smoothed = true;
    game.physics.enable(steps[7][0], Phaser.Physics.ARCADE);

    // Finish
    finish = game.add.sprite(2000, 275, 'finish');
    game.physics.enable(finish, Phaser.Physics.ARCADE);
}

function leverHandler1()
{
    if (!levers[triggerIndex][1])
    {
        levers[triggerIndex][1] = true;
        switch(triggerIndex)
        {
            case (0):
                steps[2][1] = steps[2][0].y - 40;
                steps[2][0].body.velocity.y = -10;
        }
    }
}

function plateHandler1()
{
    if (!plates[triggerIndex][1])
    {
        plates[triggerIndex][1] = true;
        switch(triggerIndex)
        {
            case (0):
                steps[0][0].body.velocity.y = +5;
                break;
            case (1):
                steps[4][1] = steps[4][0].y - 80;
                steps[4][0].body.velocity.y = -5;
                break;
            case (2):
                steps[6][1] = steps[6][0].y - 25;
                steps[6][0].body.velocity.y = -5;
                break;
        }
    }
}

function liftObstacle1()
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

function finishHandler1()
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

function reset1()
{
    steps[0][0].x = 250;
    steps[0][0].y = 475;
    steps[0][0].body.velocity.y = 0;
    steps[6][1] = null;
    steps[4][0].x = 775;
    steps[4][0].y = 550;
    steps[4][0].body.velocity.y = 0;
    steps[4][1] = null;
    steps[6][0].x = 1400;
    steps[6][0].y = 375;
    steps[6][0].body.velocity.y = 0;
    steps[6][1] = null;

    levers[0][1] = false;
    plates[0][1] = false;
    plates[1][1] = false;
    plates[2][1] = false;

    player.x = 0;
    player.y = 0;
    player.body.velocity.x = 0;
    package.x = 20;
    package.y = 0;
    package.body.velocity.x = 0;
}
