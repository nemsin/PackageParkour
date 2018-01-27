function buildWorld0()
{
    // Triggers
    levers[0] = [];
    levers[0][0] = game.add.sprite(350, 425, 'lever');
    levers[0][1] = false;

    //plates[0] = [];
    //plates[0][0] = game.add.sprite(200, 545, 'plate');
    //plates[0][1] = false;

    //liftable steps require physics!!
    steps[1] = [];
    steps[1][0] = grounds.create(250, 550, 'ground');
    //steps[1][0].scale.setTo(0.1, 1);
    game.physics.enable(steps[1][0], Phaser.Physics.ARCADE);

    // Ground Test
    steps[0] = [];
    steps[0][0] = grounds.create(300, 475, 'ground');
    steps[0][0].scale.setTo(1, 1.5);

    // Finish
    finish = game.add.sprite(1000, 450, 'finish');
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
                steps[1][1] = steps[1][0].y - 40;
                steps[1][0].body.velocity.y = -10;
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
            // DO STUFF HERE
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
    levers[0][0].destroy();
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
    steps[1][0].x = 250;
    steps[1][0].y = 550;
    steps[1][0].body.velocity.y = 0;
    steps[1][1] = null;

    levers[0][1] = false;

    player.x = 0;
    player.y = 0;
    player.body.velocity.x = 0;
    package.x = 20;
    package.y = 0;
    package.body.velocity.x = 0;
}
