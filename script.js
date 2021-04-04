            
            var d = new Date();
            var h = d.getHours(); h > 12 ? h-=12 : h;
            var m = d.getMinutes();
            var s = d.getSeconds();
            
            var hD = document.getElementById("hour");
            var mD = document.getElementById("min");
            var sD = document.getElementById("sec");
            
            var hDeg = h*30;
            var mDeg = m*6;
            var sDeg = s*6;

        function defaultTime(){

            //......match exact location for hour....
            for (let i=m ; i > 0 ; i--) {               
                if( i%12 == 0 ){
                        hDeg += 6;
                }
            }

            hD.style.transform = "rotate(" + hDeg  + "deg)";
            mD.style.transform = "rotate(" + mDeg + "deg)";
            sD.style.transform = "rotate(" + sDeg + "deg)";

            ShowTime();
            ShowDegree();
           // creatDiv();
        }
    
    // -------------------------------------------------------------------------
         
         var myVar = setInterval(myTimer, 1000);
            
            function myTimer() 
            {
                s++;
                sDeg += 6;
                rotate(sD,sDeg);
                
                //-----increment in minutes
                if(s == 60){
                    s=0;
                    m++;
                    mDeg += 6;
                    rotate(mD, mDeg);
                }

                //----increment in hour
                if (m%12 == 0) {
                    
                    if(s==0){ 
                        hDeg+=6;
                        rotate(hD, hDeg);
                    }

                    if(m==60){
                        m = 0;
                        h >=12 ? h=1 : h++;
                    }   
                }

                ShowTime();
                ShowDegree();
            }

            function rotate(div, deg){
                div.style.transform = "rotate(" + deg + "deg)";
            }
            
            function ShowTime(){
                document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
            }

            function ShowDegree(){
                document.getElementById("degree").innerHTML = hDeg+":"+mDeg+":"+sDeg;
            }
                        
            function creatDiv() {
                for (let i = 0; i < 4; i++) {
                    var div = document.createElement("div");
                    div.id = 'div'+i;
                    div.className = 'divS';
                    document.body.appendChild(div);
                }

                var de = 0;
                var v;
                for (let i = 0; i < 4; i++) {
                    de += 90;
                    v = document.getElementById('div'+i);
                    v.style.transform = "rotate(" + de + "deg)";
                }
            }
                        
