function submit(){
    $("#antallError").text("");
    $("#fornavnError").text("");
    $("#etternavnError").text("");
    $("#talError").text("");
    $("#epostError").text("");

    let billett={
        film: $("#filmer").val(),
        antall: $("#antall").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        tlf: $("#tel").val(),
        epost: $("#epost").val()
    }

    const phonePattern = /^\d{8}$/; // Assumes a Norwegian phone number format (8 digits)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(billett.fornavn==="" || billett.etternavn===""|| billett.tlf==="" || billett.epost==="" ||Number(billett.antall)===0 || billett.film==="" || !emailPattern.test(billett.epost) ||   !phonePattern.test(billett.tlf)) {
        if(Number(billett.antall)===0) {
            $("#antallError").html("Må vare større enn null".fontcolor("red"));
        }
        if (billett.fornavn === "") {
            $("#fornavnError").html("Må skrive noe inn i fornavn".fontcolor("red"));
        }
        if (billett.etternavn === "") {
            $("#etternavnError").html("Må skrive noe i etternavn".fontcolor("red"));
        }
        if (!phonePattern.test(billett.tlf)) {
            $("#talError").html("Ugyldig telefonnummerformat".fontcolor("red"));
        }
        if (billett.tlf === "") {
            $("#talError").html("Må skrive noe i telefonnu".fontcolor("red"));
        }

        if (!emailPattern.test(billett.epost)) {
            $("#epostError").html("Ugyldig e-postadresseformat".fontcolor("red"));
        }
        if (billett.epost === "") {
            $("#epostError").html("Må skrive noe i epost".fontcolor("red"));
        }

    }else{

        listfilmer();
        console.log(billett)
        $.post(" http://localhost:8000/save_data", billett, function(){
            listfilmer();
        });
        $("#filmer").val("");
        $("#fornavn").val("");
        $("#etternavn").val("");
        $("#antall").val(0);
        $("#tel").val("");
        $("#epost").val("");

    }

}

function listfilmer() {
    $.get( "http://localhost:8000/list_data", function( data ) {
        formaterData(data);
    });
}

function formaterData(billetter){
    let ut = "";
    for (let billett of billetter){
        ut+=" <tr><td>"+billett.film+"</td><td>"+billett.antall+"</td><td>"+billett.fornavn+"</td>" +
            "<td>"+billett.etternavn+"</td><td>"+billett.tlf+"</td><td>"+billett.epost+"</td></tr>";
    }
    ut+="";
    $("#billetter").html(ut);
}

function delete_alle(){
    $.get( "http://localhost:8000/delete_data", function() {
        listfilmer();
    });
}