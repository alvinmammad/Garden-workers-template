$(".card-header").click(function(){
	$(".card").css({border:"none"})
$(this).parent().css({border:"1px solid yellow"})
})

//counter section start//
	var counts = $("#counter");
	var count1=0;
    var count2=0;
    var count3=0;
    var count4=0;

    $(window).scroll(function(){
            
        if ($(window).scrollTop()>=$("#counter").offset().top) {
            var interval1= setInterval(pat,20);
            var interval2= setInterval(doctor,20);
            var interval3= setInterval(mission,20);
            var interval4= setInterval(surgerie,20);
            function pat (){
                if (count1<=2340) {
                    count1+=10;
                }
                
                $("#first").html(count1);
                if(count1>=2340){
                   
                    clearInterval(interval1);
                }
            }
            function doctor (){
                if(count2<=335){
                    count2+=1;
                }

                $("#second").html(count2);
                if(count2>=335){
                    
                    clearInterval(interval2);
                }
            }
            function mission (){
                if(count3<=1305){
                    count3+=5;
                    $("#fourth").html(count4);
                }
                
                $("#third").html(count3);
                if(count3>=1305){
                    
                    clearInterval(interval3);
                }
            }


            function surgerie (){

                if(count4<=1540){
                    count4+=5;
                    $("#fourth").html(count4);
                }
                
                if(count4>=1540){
                    
                    clearInterval(interval4);
                }
            }
        }
       
    });