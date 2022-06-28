function response(room, msg, sender, isGroupChat, replier, ImageDb, packageName, threadid){
    var bus = ["23","17","169","141","6"];
    var busid = ["B9126","B9108","B9106","B9097","B38658"];
    if( msg == "버스"){
      replier.reply("확인가능한 버스 번호\n"+bus);
    }
    for( j =0; j <= 4; j++ ){
        if (msg == bus[j]+"번 버스") {
            var bus_locate = []; // 버스 실시간 위치
            var station = []; // 버스 정류장

            var data = org.jsoup.Jsoup.connect("https://m.map.kakao.com/actions/busDetailInfo?busId="+busid[j]).get();
            var data2 = org.jsoup.Jsoup.connect("https://m.map.kakao.com/actions/busDetailInfo?busId="+busid[j]).get();
            
            bus_data = data.select("ul.list_situation");
            bus_data = bus_data.select("a");
            station_data = data2.select("ul.list_route");
            station_data = station_data.select("li");
            
            for(i = 0; i < bus_data.size(); i++ ){
              if(j == 4){
                bus_locate[i] += bus_data.get(i).text();
                bus_locate[i] = bus_locate[i].substring(24);
                bus_locate[i] = bus_locate[i].replace(bus_locate[i].slice(-18,bus_locate[i].length),"");
              }else if(j == 3 ){
                bus_locate[i] += bus_data.get(i).text();
                bus_locate[i] = bus_locate[i].substring(27);
                bus_locate[i] = bus_locate[i].replace(bus_locate[i].slice(-19,bus_locate[i].length),""); 
              }else{
                bus_locate[i] += bus_data.get(i).text();
                bus_locate[i] = bus_locate[i].substring(24);
                bus_locate[i] = bus_locate[i].replace(bus_locate[i].slice(-19,bus_locate[i].length),"");
              }
            }
      
            for(i = 0; i < station_data.size(); i++){
                if(j == 4){
                    station[i] += station_data.get(i).text();
                    station[i] = station[i].substring(9);
                }else{
                    station[i] += station_data.get(i).text();
                    station[i] = station[i].substring(9);
                    station[i] = station[i].replace(station[i].slice(-18,station[i].length),"");
                }
                for(k = 0; k < bus_locate.length; k++){
                  if(bus_locate[k] == station[i]){
                    station[i] = "| ▶|" + station[i];
                  }
                }
                if(station[i].substr(0,1) != "|"){
                  station[i] = "|    |" + station[i];
                }
              }
            if(bus_locate.length == 0){
                replier.reply("[실시간 "+bus[j]+"번 버스 정보]\n"+"현재 운행중인 버스 없음");
            }else{
                replier.reply("[실시간 "+bus[j]+"번 버스 정보]\n"
                                 +"현재 운행중인 버스 "+bus_locate.length+"대\n\n"
                                 +station.join("\n"));
            }
        }
  }
}