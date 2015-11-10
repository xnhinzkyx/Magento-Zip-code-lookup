jQuery('.opc .field input[name="billing[postcode]').blur(function(){ //.postcode class of zipcode text field
        var s = jQuery(this).val();
        jQuery.ajax({
            type: 'POST',
            url: '<?php echo Mage::getURL('') ?>/zip.php', //file which read zip code excel file
            dataType: "json", //is used for return multiple values
            data: { 's' : s },
            success: function(data){
                try {
                    //jQuery('.region').val(data.state); //region-class of state text field
                    jQuery('.opc .field input[name="billing[city]"]').val(data.dist);//city-class of city text filed
                } catch (e) {
                    alert(e.Message);
                }
            },
            error:function (xhr, status, err){
                alert( "status=" + xhr.responseText + ", error=" + err );
            }
        });
    });
