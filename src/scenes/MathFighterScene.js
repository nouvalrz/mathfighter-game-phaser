import Phaser from "phaser";
export default class MathFighterScene extends Phaser.Scene{
    constructor() {
        super('math-fighter-scene');
    }

    init(){
        this.gameHalfWidth = this.scale.width * 0.5
        this.gameHalfHeight = this.scale.height * 0.5
        this.player = undefined
        this.enemy = undefined
        this.slash = undefined
    }

    preload(){
        this.load.image('background', 'images/bg_layer1.png')
        this.load.image('fight-bg', 'images/fight-bg.png')
        this.load.image('tile', 'images/tile.png')
        this.load.image('start-button', 'images/start-btn.png')
        this.load.spritesheet('player', 'images/warrior1.png', {
            frameHeight: 80, frameWidth: 80
        })
        this.load.spritesheet('enemy', 'images/warrior2.png', {
            frameHeight: 80, frameWidth: 80
        })
        this.load.spritesheet('numbers', 'images/numbers.png', {
            frameHeight: 71.25, frameWidth: 131
        })
        this.load.spritesheet('slash', 'images/slash.png', {
            frameHeight: 88, frameWidth: 42
        })
    }

    create(){
        this.add.image(240, 320, 'background')
        const fight_bg = this.add.image(240, 160, 'fight-bg')
        const tile = this.physics.add.staticImage(240, fight_bg.height - 40 ,'tile')

        this.player = this.physics.add.sprite(this.gameHalfWidth - 150, this.gameHalfHeight - 200, 'player').setOffset(-50, -8).setBounce(0.2)
        this.physics.add.collider(this.player, tile)

        this.enemy = this.physics.add.sprite(this.gameHalfWidth + 150, this.gameHalfHeight - 200, 'enemy').setOffset(-50, -8).setBounce(0.2).setFlipX(true)
        this.physics.add.collider(this.enemy, tile)

        this.slash = this.physics.add.sprite(240, 60, 'slash').setActive(false).setVisible(true).setGravityY(-500).setOffset(0, -10).setDepth(1).setCollideWorldBounds(true)

        this.createAnimation()
    }

    update(){

    }

    createAnimation(){
        // ANIMASI PLAYER
        this.anims.create({
            key: 'player-die',
            frames: this.anims.generateFrameNumbers('player', {start: 0, end: 4}),
            frameRate: 10
        })
        this.anims.create({
            key: 'player-hit',
            frames: this.anims.generateFrameNumbers('player', {start: 5, end: 9}),
            frameRate: 10
        })
        this.anims.create({
            key: 'player-attack',
            frames: this.anims.generateFrameNumbers('player', {start: 10, end: 14}),
            frameRate: 10
        })
        this.anims.create({
            key: 'player-standby',
            frames: this.anims.generateFrameNumbers('player', {start: 15, end: 19}),
            frameRate: 10,
            repeat: -1
        })

        // ANIMASI ENEMY
        this.anims.create({
            key: 'enemy-die',
            frames: this.anims.generateFrameNumbers('enemy', {start: 0, end: 4}),
            frameRate: 10
        })
        this.anims.create({
            key: 'enemy-hit',
            frames: this.anims.generateFrameNumbers('enemy', {start: 5, end: 9}),
            frameRate: 10
        })
        this.anims.create({
            key: 'enemy-attack',
            frames: this.anims.generateFrameNumbers('enemy', {start: 10, end: 14}),
            frameRate: 10
        })
        this.anims.create({
            key: 'enemy-standby',
            frames: this.anims.generateFrameNumbers('enemy', {start: 15, end: 19}),
            frameRate: 10,
            repeat: -1
        })
    }


}
