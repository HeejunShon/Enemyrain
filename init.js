
// 적 생성
const createEnemies = (hero) => {
    //히어로 객체 전달 & 충돌 처리
    let distance = (Math.random() * 50);
    let position = Math.random() * (800 -53);

    new Enemy(distance, position, hero).init();
}


// 게임 진행
const game = () => {
    const hero = new Hero(10, 270, 380); // 히어로 생성 (이동거리, top, left)
    hero.init();

    window.addEventListener('keydown', (e) => {
        hero.move(e); // 히어로 이동
    });
    

    let iv = setInterval(() => { 
        createEnemies(hero); // 2초 주기 적 생성
    }, 2000); 
}

game();
