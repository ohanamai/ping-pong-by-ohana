namespace SpriteKind {
    export const LP = SpriteKind.create()
    export const RP = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.RP, function (sprite, otherSprite) {
    sprite.vx = mySprite.vx + 5
    info.changeScoreBy(5)
})
function create_left_paddle () {
    Player_1 = sprites.create(img`
8 8 8 . . . . . . . . . . . . . 
8 8 8 . . . . . . . . . . . . . 
8 8 8 . . . . . . . . . . . . . 
8 8 8 . . . . . . . . . . . . . 
8 8 8 . . . . . . . . . . . . . 
8 8 8 . . . . . . . . . . . . . 
8 8 8 . . . . . . . . . . . . . 
8 8 8 . . . . . . . . . . . . . 
8 8 8 . . . . . . . . . . . . . 
8 8 8 . . . . . . . . . . . . . 
8 8 8 . . . . . . . . . . . . . 
8 8 8 . . . . . . . . . . . . . 
8 8 8 . . . . . . . . . . . . . 
8 8 8 . . . . . . . . . . . . . 
8 8 8 . . . . . . . . . . . . . 
8 8 8 . . . . . . . . . . . . . 
`, SpriteKind.LP)
    controller.moveSprite(Player_1, 0, 150)
    Player_1.setFlag(SpriteFlag.StayInScreen, true)
    Player_1.left = 0
}
function create_ball () {
    mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . 6 6 6 5 5 6 6 6 . . . . 
. . . 7 7 7 7 6 6 6 6 6 6 . . . 
. . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
. . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
. 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
. 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
. 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
. 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
. . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
. . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
. . . 6 8 8 8 8 8 8 8 8 6 . . . 
. . . . 6 6 8 8 8 8 6 6 . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    mySprite.setVelocity(50, 50)
    mySprite.setFlag(SpriteFlag.BounceOnWall, true)
}
function create_right_paddle () {
    Player_2 = sprites.create(img`
. . . . . . . . . . . . . 6 6 6 
. . . . . . . . . . . . . 6 6 6 
. . . . . . . . . . . . . 6 6 6 
. . . . . . . . . . . . . 6 6 6 
. . . . . . . . . . . . . 6 6 6 
. . . . . . . . . . . . . 6 6 6 
. . . . . . . . . . . . . 6 6 6 
. . . . . . . . . . . . . 6 6 6 
. . . . . . . . . . . . . 6 6 6 
. . . . . . . . . . . . . 6 6 6 
. . . . . . . . . . . . . 6 6 6 
. . . . . . . . . . . . . 6 6 6 
. . . . . . . . . . . . . 6 6 6 
. . . . . . . . . . . . . 6 6 6 
. . . . . . . . . . . . . 6 6 6 
. . . . . . . . . . . . . 6 6 6 
`, SpriteKind.RP)
    controller.moveSprite(Player_2, 0, 150)
    Player_2.setFlag(SpriteFlag.StayInScreen, true)
    Player_2.right = 160
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.LP, function (sprite, otherSprite) {
    sprite.vx = mySprite.vx + 5
    info.changeScoreBy(5)
})
let Player_2: Sprite = null
let Player_1: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
create_ball()
create_left_paddle()
create_right_paddle()
