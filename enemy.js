class Enemy {
    constructor(distance, left, hero) {
        this.enemy = document.createElement("img");
        this.enemy.src = "images/enemy1.png";
        this.enemy.style.left = left + "px";
        this.distance = distance;
        this.left = left;
        this.bg = document.getElementById("bg");
        this.hero = hero;
    }

    init() {
        console.log(this);
        this.enemy.style.position = "absolute";
        this.bg.appendChild(this.enemy);
        this.move();
    }


    die() { // 죽은 귀신
        this.enemy.src = "images/enemy2.png";
    }
    
    remove() { // 귀신 해제
        setTimeout(() => {
            this.enemy.style.display = "none";
            delete this;
        }, 2000); 
    }


    checkCollision(pos) { // 충돌 확인
        if( (this.left <= this.hero.left && this.left + this.enemy.width >= this.hero.left) 
            && ( pos <= this.hero.top && pos + this.enemy.height >= this.hero.top ) ) {
            this.die(); // 충돌 시 죽음 & 제거
            this.remove();
        }
    }

    move() { // 귀신 이동
        let pos = 0;
        let iv = setInterval(() => {
            let goal = 600 - this.enemy.height;
            if (pos < goal) {
                pos++;
                this.checkCollision(pos);
            } else {
                clearInterval(iv);
                this.remove();
            }
            this.enemy.style.transform = "translateY(" + pos + "px)";
        }, this.distance);
    }
}

