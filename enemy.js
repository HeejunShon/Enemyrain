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
            this.enemy.remove();
        }, 2000); 
    }

    
    checkLeft() { // 좌
        if ( (this.left + this.enemy.width > this.hero.left + this.hero.hero.width)
            && (this.left < this.hero.left + this.hero.hero.width) ) {
            return true;
        } else {
            return false;
        }
    }

    checkRight() { // 우
        if ( (this.left < this.hero.left) && (this.left + this.enemy.width > this.hero.left) ) {
            return true;
        } else {
            return false;
        }
    }

    checkTop(pos) { // 상
        if ( (pos < this.hero.top + this.hero.hero.height) && (pos > this.hero.top) ) {
            return true;
        } else {
            return false;
        }
    }

    checkBottom(pos) { // 하
        if ( (pos < this.hero.top) && (pos + this.enemy.height > this.hero.top) ) {
            return true;
        } else {
            return false;
        }
    }

    checkCollision(pos) { // 충돌 확인
        //조건 함수로 빼기
        if ( ( this.checkLeft() || this.checkRight() ) // 좌 || 우
            && ( this.checkTop(pos) || this.checkBottom(pos) ) ) { // 상 || 하 
                
            this.die(); // 충돌 시 죽음 & 제거
            this.remove();
        }
    }

    move() { // 귀신 이동
        let pos = 0;
        let iv = setInterval( () => {
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

