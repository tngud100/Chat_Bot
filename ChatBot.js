function response(room, msg, sender, isGroupChat, replier, ImageDb, packageName, threadid){
    var peanut = ["절루가","츄르는?","밥줘","놀자!","싫어 아무튼 싫어","냥"];
    var latte = ["밥","밥밥","밥이 쵝오","밥은 어디","밥먹자","밥만이 나의 탈출구"];
    var TeaHwan = ["헬창새끼..단백질 1주 압수","뇌도 근육인가;","닭가슴살 말고 츄르"];
    var Gang = ["짭새야 인성교육 다시받자","놀면서 세금 갉아먹는 기생충","재고 팔팔 당감타 종착 종정 주급 주십오"];
    var Jeon = ["돈미새?여미새?카미새?","인생은 돈 사람도 돈 모든게 돈","중앙선? 그딴 걸론 날 못막아"];
    if (msg == "땅콩아") {
        replier.reply(peanut[Math.floor(Math.random()*peanut.length)]);
    }else if (msg == "라떼야"){
        replier.reply(latte[Math.floor(Math.random()*latte.length)]);
    }else if (msg == "땅콩"){
        replier.reply("나이 : 2.3세, 성질 : 더러움");        
    }else if (msg == "라떼"){
        replier.reply("나이 : 1.3세, 성질 : 밥");        
    }else if (msg == "테스트"){
        replier.reply("테스트 완료");
    }else if (msg == "태환"){
        replier.reply(TeaHwan[Math.floor(Math.random()*TeaHwan.length)]);
    }else if (msg == "경수"){
        replier.reply(Gang[Math.floor(Math.random()*Gang.length)]);
    }else if (msg == "재흠"){
        replier.reply(Jeon[Math.floor(Math.random()*Jeon.length)]);
    }else if(msg == "수형"){
        replier.reply("멋쟁이 주인님");
    }
}

function response(room, msg, sender, isGroupChat, replier, ImageDb, packageName, threadid){
    if(msg == "/169번 버스"){
    var data = Utils.getWebText("https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=부산 169번 버스"); 
    // data = 
    }
}