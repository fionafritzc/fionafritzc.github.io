// magic.js
$(document).ready(function() {

    // process the form
    $('form').submit(function(event) {

        showSplash();
        donereg = true;

        $('#myModal').modal('toggle');

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'name'              : $('input[name=name]').val(),
            'fb'             : $('input[name=fb]').val(),
            'experience'    : $('input[name=experience]').val(),
            'hasdevice'    : $('input[name=hasdevice]').val()
        };

        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'https://www.formingo.co/submit/3d3d094c-6516-4f1e-830e-327f1d3cf64e', // the url where we want to POST
            data        : formData, // our data object
                        encode          : true
        })
            // using the done promise callback
            .done(function(data) {

                // log data to the console so we can see
                console.log(data);

                // here we will handle errors and validation messages
            });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

});
