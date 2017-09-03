$(document).ready(function(){
if ( !("placeholder" in document.createElement("input")) ) {

        $("input[placeholder]").each(function() {

            var val = $(this).attr("placeholder");
			$(this).css("color", "#4D4E4E");

            if ( this.value == "" ) {
			
                this.value = val;

            }

            $(this).bind("keydown focus", function() {

                if ( this.value == val ) {

                    this.value = "";

                }else{
					$(this).css("color", "#4D4E4E");
				}

            });
			$(this).blur(function() {

                if ( $.trim(this.value) == "" ) {
					$(this).css("color", "#4D4E4E");
                    this.value = val;


                }else{
					$(this).css("color", "#144b94");
				}

            });

        });
		
		}
	});