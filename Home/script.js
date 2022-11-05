$(function(){
    var vid_slider = $(".vid")
    var start_idx=0, end_idx=vid_slider.length-1, curr_idx=0
    vid_slider.hide()
    vid_slider.eq(curr_idx).show()

    $("#left-arrow").click(function(){
        vid_slider.eq(curr_idx).hide()
        curr_idx -= 1;
        if(curr_idx < start_idx){
            curr_idx = end_idx
        }
        vid_slider.eq(curr_idx).show();
    })
    $("#right-arrow").click(function(){
        vid_slider.eq(curr_idx).hide()
        curr_idx += 1;
        if(curr_idx > end_idx){
            curr_idx = start_idx
        }
        vid_slider.eq(curr_idx).show();
    })
})