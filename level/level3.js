function buildWorld3()
{
    // Triggers
    plates[0] = [];
    plates[0][0] = game.add.sprite(250, 545, 'plate');
    plates[0][0].scale.setTo(3, 1);
    plates[0][1] = false;

    plates[1] = [];
    plates[1][0] = game.add.sprite(250, 545, 'plate');
    plates[1][0].scale.setTo(3, 1);
    plates[1][1] = false;

    plates[2] = [];
    plates[2][0] = game.add.sprite(620, 470, 'plate');
    plates[2][0].scale.setTo(3, 1);
    plates[2][1] = false;
    
    // First step
    steps[0] = [];
    steps[0][0] = grounds.create(600, 475, 'ground');
    steps[0][0].scale.setTo(1, 1.5);

    // Wall
    obstacles[0] = grounds.create(200, 425, 'wall30');
    obstacles[0].scale.setTo(1, 1.5);
    obstacles[1] = grounds.create(500, 400, 'wall10');
    obstacles[1].scale.setTo(1, 1);
    obstacles[2] = grounds.create(500, 600, 'wall10');
    obstacles[2].scale.setTo(1, 1);

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
                obstacles[0].body.velocity.y = +10;
                break;
            case (2):
                steps[0][0].body.velocity.y = +10;
                steps[0][0].alpha = 0;
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

    plates[0][1] = false;

    obstacles[0].x = 200;
    obstacles[0].y = 425;
    obstacles[0].body.y = 0;
    obstacles[1].x = 500;
    obstacles[1].y = 400;
    obstacles[2].x = 500;
    obstacles[2].y = 600;

    player.x = 0;
    player.y = 0;
    player.body.velocity.x = 0;
    package.x = 20;
    package.y = 0;
    package.body.velocity.x = 0;
}
