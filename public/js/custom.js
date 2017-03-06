$(document).ready(

)

function contactSubmit() {
  event.preventDefault()
  name = $('#contact-name').val()
  email = $('#contact-email').val()
  subject = $('#contact-subject').val()
  message = $('#contact-message').val()

  console.log(name, email, subject, message)
}
