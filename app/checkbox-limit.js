document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll(".category-item input[type='checkbox']");
    let checkedCheckboxes = 0;
  
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener("change", function() {
        if (this.checked) {
          checkedCheckboxes++;
        } else {
          checkedCheckboxes--;
        }
  
        if (checkedCheckboxes > 3) {
          this.checked = false;
          checkedCheckboxes--;
        }
      });
    });
  });

  
  
  