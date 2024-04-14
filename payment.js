// Show/hide monthly amount input based on package selection
$('#package').on('change', function() {
  if ($(this).val() === 'Monthly') {
      $('#monthlyDiv').show();
  } else {
      $('#monthlyDiv').hide();
  }
});

// Handle form submission
$('#paymentForm').on('submit', function(e) {
  e.preventDefault();
  // Your form submission logic goes here
  <button type="submit" class="btn btn-primary">Payment process</button>

});
