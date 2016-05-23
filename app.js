
// Login button
$('#login').click(function() {

    // creating new Finder Object
    var userFinder = AJ$();

    // Hiding the error message
    $('#invalid').hide();

    // Validating user
    if(userFinder.setUser($('#user').val())) {
      // Updating DOM with user details by sending selector
      userFinder.setUser($('#user').val()).userDetails('#details');
      // Hiding Login
      $('#logindiv').hide();
    }
    else {
      // Displaying Error message for invalid user
      $('#invalid').show();
    }


});
