// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.row = Math.floor(Math.random() * (3 - 1 + 1)) +1;
    this.x = -101;
    this.y = this.row * 83 - 30;
    this.speed = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    if (this.x > 505) {
        this.x = -101;
    }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// extend Enemy and override the sprite
// add a handleInput() method.
var Player = function() {
    var obj = new Enemy();
    obj.sprite = 'images/char-boy.png';
    obj.row = 5;
    obj.col = 2;
    obj.handleInput = function(key) {
        switch (key) {
            case 'right':
                this.col++;
                break;
            case 'left':
                this.col--;
                break;
            case 'down':
                this.row++;
                break;
            case 'up':
                this.row--;
                break;
            default:
                // superflous default case
                break;
        }
        this.report();
    };
    obj.update = function() {
        // console.log(Engine); // undefined?? use 'game'
        this.x = this.col * 101;
        this.y = this.row * 83 - 30;// 101;
    };
    obj.report = function () {
        console.log("Player says HI");
    };
    return obj;
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player();

// How many enemies are there?
var numEnemies = 3;
var allEnemies = [];
for (var i = 0; i < numEnemies; i++) {
    allEnemies.push(new Enemy());
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
