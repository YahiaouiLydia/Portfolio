  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        form.reset();
        const modal = new bootstrap.Modal(document.getElementById("thankYouModal"));
        modal.show();
      } else {
        alert("An error occurred. Please try again.");
      }
    });
  });