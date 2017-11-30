function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log("hey")
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.


  var data = {};
  data.name = profile.getName();
  data.id = profile.getId();
  data.email = profile.getEmail();


  $.ajax({
    type: 'POST',
    url: '/login',
    data: data,
    success: function(data) {

     console.log("success")
//change to authorized.html

      },
      error: function(e) {
       console.log(e)
      }
});
}