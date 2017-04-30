$("document").ready(function () {
    $("#data").on("submit", function (e) {
        e.preventDefault();


        var ad1 = 0, ad2 = 0, ad3 = 0, ad4 = 0, ad5 = 0, ad6 = 0, ad7 = 0, ad8 = 0, ad9 = 0, sum = 0;



        if ($("#cd4").prop("checked") && ($("#cd7").prop("checked"))) {
            $("#inf_mat").show("slow");
            ad1 = 6;
        } else {
            $("#inf_mat").hide("slow");
            ad1 = 0;
        }

        if ($("#cd7").prop("checked") && ($("#cd9").prop("checked"))) {
            $("#phiz_mat").show("slow");
            ad2 = 8;
        } else {
            $("#phiz_mat").hide("slow");
            ad2 = 0;
        }

        if ($("#cd2").prop("checked") && ($("#cd7").prop("checked"))) {
            $("#geo_mat").show("slow");
            ad3 = 3;
        } else {
            $("#geo_mat").hide("slow");
            ad3 = 0;
        }

        if ($("#cd7").prop("checked") && ($("#cd8").prop("checked"))) {
            $("#obsh_mat").show("slow");
            ad4 = 8;
        } else {
            $("#obsh_mat").hide("slow");
            ad4 = 0;
        }

        if ($("#cd5").prop("checked") && ($("#cd8").prop("checked"))) {
            $("#obsh_ist").show("slow");
            ad5 = 9;
        } else {
            $("#obsh_ist").hide("slow");
            ad5 = 0;
        }

        if ($("#cd3").prop("checked") && ($("#cd5").prop("checked"))) {
            $("#in_ist").show("slow");
            ad6 = 2;
        } else {
            $("#in_ist").hide("slow");
            ad6 = 0;
        }

        if ($("#cd6").prop("checked") && ($("#cd8").prop("checked"))) {
            $("#obsh_lit").show("slow");
            ad7 = 2;
        } else {
            $("#obsh_lit").hide("slow");
            ad7 = 0;
        }

        if ($("#cd3").prop("checked") && ($("#cd8").prop("checked"))) {
            $("#obsh_in").show("slow");
            ad8 = 1;
        } else {
            $("#obsh_in").hide("slow");
            ad8 = 0;
        }

        if ($("#cd1").prop("checked") && ($("#cd7").prop("checked"))) {
            $("#bio_mat").show("slow");
            ad9 = 3;
        } else {
            $("#bio_mat").hide("slow");
            ad9 = 0;
        }

        if ($("#cd3").prop("checked") && ($("#cd7").prop("checked"))) {
            $("#in_mat").show("slow");
            ad10 = 1;
        } else {
            $("#in_mat").hide("slow");
            ad10 = 0;
        }
        sum = ad1 + ad2 + ad3 + ad4 + ad5 + ad6 + ad7 + ad8 + ad9 + ad10;

        $("#result").html("По запросу найдено напрвлений: " + sum);
    });
});