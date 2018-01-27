function buildWorld()
{
    // Triggers
    levers[0] = [];
    levers[0][0] = game.add.sprite(350, 425, 'lever');
    levers[0][1] = false;

    //plates[0] = [];
    //plates[0][0] = game.add.sprite(200, 545, 'plate');
    //plates[0][1] = false;

    // Ground Test
    obstacles[0] = []
    obstacles[0][0] = grounds.create(300, 475, 'ground');
    obstacles[0][0].scale.setTo(1, 1.5);

    //liftable obstacles require physics!!
    obstacles[1] = [];
    obstacles[1][0] = grounds.create(250, 550, 'ground');
    obstacles[1][0].scale.setTo(0.1, 1);
    game.physics.enable(obstacles[1][0], Phaser.Physics.ARCADE);
}

function leverHandler()
{
    console.log("1");
    if (!levers[triggerIndex][1])
    {
        levers[triggerIndex][1] = true;
        switch(triggerIndex)
        {
            case (0):
                obstacles[1][1] = obstacles[1][0].y - 40;
                obstacles[1][0].body.velocity.y = -10;
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

function liftObstacle()
{
    for (var i = 0; i < obstacles.length; i++)
    {
        if (obstacles[i][1] != null)
            if (obstacles[i][0].y <= obstacles[i][1])
            {
                obstacles[i][1] = null;
                obstacles[i][0].body.velocity.y = 0;
            }
    }
}

function lvlFinished()
{

}