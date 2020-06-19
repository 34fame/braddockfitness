$(document).ready(function () {
   $(".first-button").on("click", function () {
      $(".animated-icon1").toggleClass("open");
   });
   $(".second-button").on("click", function () {
      $(".animated-icon2").toggleClass("open");
   });
   $(".third-button").on("click", function () {
      $(".animated-icon3").toggleClass("open");
   });
});
/* Navbar Hamburger */

/* Contact Us Form */

function validateForm() {
   var name = document.getElementById("name").value;
   if (name == "") {
      document.querySelector(".status").innerHTML = "Name cannot be empty";
      return false;
   }
   var email = document.getElementById("email").value;
   if (email == "") {
      document.querySelector(".status").innerHTML = "Email cannot be empty";
      return false;
   } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(email)) {
         document.querySelector(".status").innerHTML = "Email format invalid";
         return false;
      }
   }
   var subject = document.getElementById("subject").value;
   if (subject == "") {
      document.querySelector(".status").innerHTML = "Subject cannot be empty";
      return false;
   }
   var message = document.getElementById("message").value;
   if (message == "") {
      document.querySelector(".status").innerHTML = "Message cannot be empty";
      return false;
   }
   document.querySelector(".status").innerHTML = "Sending...";
}

/* Send Email via GoDaddy */
function sendEmail() {
   Email.send({
      Host: "smtpout.secureserver.net",
      Username: "sage.braddock@braddockfitnessllc.com",
      Password: "<email password>",
      To: "<recipient’s email address>",
      From: "sage.braddock@braddockfitnessllc.com",
      Subject: "Contact Us Form",
      Body: "<email body>",
   }).then((message) => alert("mail sent successfully"));
}

document.getElementById("status").innerHTML = "Sending...";
formData = {
   name: $("input[name=name]").val(),
   email: $("input[name=email]").val(),
   subject: $("input[name=subject]").val(),
   message: $("textarea[name=message]").val(),
};

$.ajax({
   url: "mail.php",
   type: "POST",
   data: formData,
   success: function (data, textStatus, jqXHR) {
      $("#status").text(data.message);
      if (data.code)
         //If mail was sent successfully, reset the form.
         $("#contact-form")
            .closest("form")
            .find("input[type=text], textarea")
            .val("");
   },
   error: function (jqXHR, textStatus, errorThrown) {
      $("#status").text(jqXHR);
   },
});

/* Contact Us Form */

/* Hear About Us? */

var channels = [];
$("#feedback input:checked").each(function () {
   channels.push(this.value);
});

formData = {
   name: $("input[name=name]").val(),
   email: $("input[name=email]").val(),
   subject: $("input[name=subject]").val(),
   message: $("textarea[name=message]").val(),
   channel: channels,
};
/* Hear About Us? */

/* Method of Contact? */

formData = {
   name: $("input[name=name]").val(),
   email: $("input[name=email]").val(),
   subject: $("input[name=subject]").val(),
   message: $("textarea[name=message]").val(),
   cmethod: $("input:radio[name=cmethod]:checked").val(),
};

/* Method of Contact */
