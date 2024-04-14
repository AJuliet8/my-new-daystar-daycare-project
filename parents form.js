document.getElementById('parentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const parentData = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      childName: formData.get('childName')
    };
    displayParentData(parentData);
    this.reset();
  });
  
  function displayParentData(data) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
      <h2>Registration Successful!</h2>
      <p><strong>First Name:</strong> ${data.firstName}</p>
      <p><strong>Last Name:</strong> ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Child's Name:</strong> ${data.childName}</p>
    `;
  }
  