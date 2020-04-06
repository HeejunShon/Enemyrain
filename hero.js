class Hero {
    constructor(distance, top, left) {
        this.hero = document.createElement("img");
        this.hero.src = "images/hero4.png";
        this.hero.style.top = top + "px";
        this.hero.style.left = left + "px";
        this.images = ["images/hero1.png", "images/hero2.png", "images/hero3.png", "images/hero4.png"];
        this.distance = distance;
        this.top = top;
        this.left = left;
        this.bg = document.getElementById("bg");
    }

    init() {
        console.log(this);
        this.hero.style.position = "absolute";
        this.bg.appendChild(this.hero);
    }


    move(e) { //히어로 이동 (keydown)
        // console.log(this);
        switch (e.keyCode) {
            case 37: if (this.left - this.distance > 0){ //좌
                        this.left -= this.distance;
                    }
                    else
                        this.left = 0;
                    this.hero.src = this.images[0];
                    break;
            case 38: if (this.top - this.distance > 0) //상
                        this.top -= this.distance;
                    else
                        this.top = 0;
                    this.hero.src = this.images[1];
                    break;
            case 39: if (this.left + this.distance < 800 - this.hero.width) //우
                        this.left += this.distance;
                    else
                        this.left = 800 - 35;
                    this.hero.src = this.images[2];
                    break;
            case 40: if (this.top + this.distance < 600 - this.hero.height)  //하
                        this.top += this.distance;
                    else
                        this.top = 600 - 54;
                    this.hero.src = this.images[3];
                    break;
        }

        this.hero.style.top = this.top + "px";
        this.hero.style.left = this.left + "px";
    }
}