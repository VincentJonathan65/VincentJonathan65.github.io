$(()=>{
    var slider = $('.agent-info-content')
    slider.hide()
    var curr_idx = 0, min_idx = 0, max_idx = slider.length-1
    slider.eq(curr_idx).show()

    $('#left-arrow').click(()=>{
        slider.animate({
            width: "0%",
            height: "0",
            opacity: 0.4
        }, 1000);
    
        slider.animate({
            width: "80%",
            height: "100%",
            opacity: 1
        }, 1000);
        slider.eq(curr_idx).hide()
        if(curr_idx-1 < min_idx){
            curr_idx = max_idx
        }
        else{
            curr_idx -= 1
        }
        slider.eq(curr_idx).show()
    })
    $("#right-arrow").click(function(){
        slider.eq(curr_idx).hide()
        slider.animate({
            width: "0%",
            height: "0",
            opacity: 0.4
        }, 1000);
    
        slider.animate({
            width: "80%",
            height: "100%",
            opacity: 1
        }, 1000);
        if(curr_idx+1 > max_idx){
            curr_idx = min_idx
        }
        else{
            curr_idx += 1
        }
        slider.eq(curr_idx).show()
    })
})