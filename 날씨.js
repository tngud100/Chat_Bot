function response(room, msg, sender, isGroupChat, replier) {
    var area = ["백령","서울","춘천","강릉","대전","청주","전주","대구","광주","부산","제주","울릉.독도","안동","목포","여수","울산","수원"];
    if(msg == "날씨"){
        replier.reply(area);
        replier.reply("위 지역 중 원하는 지역을 \n '(지역) 날씨'와 같이 입력하면됨");
    }
    if (msg == "전국 날씨") {
        var data = org.jsoup.Jsoup.connect("https://m.search.naver.com/search.naver?query=날씨").get();
        data = data.select("div.lcl_lst").get(0);
        data = data.select("a");
        var result = [];
        for (var n = 0; n < data.size(); n++) {
            result[n] = data.get(n).text();
        }     
        replier.reply("[전국 날씨 정보]\n\n" + result.join("\n").replace(/도씨/g, "℃"));
    }
    for( i = 0; i < area.length; i++){
        if(msg == area[i]+" 날씨"){
            var data = org.jsoup.Jsoup.connect("https://m.search.naver.com/search.naver?query=날씨").get();
            data = data.select("div.lcl_lst").get(0);
            data = data.select("a");
            replier.reply(area[i]+" 날씨 정보 : "+ data.get(i).text().replace(/도씨/g, "℃"));
        }
    }
}