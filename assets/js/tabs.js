// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all tab groups
  document.querySelectorAll('.tabs').forEach(function(tabGroup) {
    const tabButtons = tabGroup.querySelectorAll('.tab-button');
    const tabPanels = tabGroup.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(function(button, index) {
      button.addEventListener('click', function() {
        // Remove active class from all buttons and panels in this group
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));
        
        // Add active class to clicked button and corresponding panel
        button.classList.add('active');
        tabPanels[index].classList.add('active');
        
        // Update URL hash without scrolling
        const tabId = button.getAttribute('data-tab');
        if (tabId) {
          history.replaceState(null, null, '#' + tabId);
        }
      });
    });
    
    // Check URL hash on load
    const hash = window.location.hash.substring(1);
    if (hash) {
      const targetButton = tabGroup.querySelector(`[data-tab="${hash}"]`);
      if (targetButton) {
        targetButton.click();
      }
    }
  });
});
