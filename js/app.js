$(document).ready(function(){
        $("select[name='formatType']").selectpicker({style: 'btn-primary', menuStyle: 'dropdown-inverse'});
        $("#boxes div").click(function(){
            color = $(this).css("background-color");
            value = color;
            if($("#formatType").val() == "hex")
            {
                value = hexc(color);
            }
            
            $("#coverText").val(value);
            $("#cover").css("background-color",color);
            $("#cover").fadeIn('slow');
            
            $("#cover").click(function(event){
                 
                if(event.target.id != "coverText")
                {
                    $("#cover").fadeOut('slow'); 
                }
            });
        });

    });

    function hexc(colorval) {
        var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        delete(parts[0]);
        for (var i = 1; i <= 3; ++i) {
            parts[i] = parseInt(parts[i]).toString(16);
            if (parts[i].length == 1) parts[i] = '0' + parts[i];
        }
        color = '#' + parts.join('');
        return color;
    }