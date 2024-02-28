function addDetails(sectionId) {
    
    var section = document.getElementById(sectionId);
    
    
    var listItem = document.createElement('li');
    listItem.innerHTML = '<strong>New Detail</strong><p>New Description</p>';
    
    // Append the new list item to the section
    section.querySelector('ul').appendChild(listItem);
  }
  