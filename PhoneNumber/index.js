function checkNetwork() {
    var phoneNumber = document.getElementById('phoneNumber').value;
    var networkIcon = document.getElementById('networkIcon');
    var networkIconContainer = document.getElementById('networkIconContainer');
  
    var mtnRegex = /^070[1-9]|080[2-9]/;
    var gloRegex = /^070[5-9]|080[5-9]/;
    var airtelRegex = /^070[3-4]|080[2-4]/;
    var nineMobileRegex = /^080[9]|081[0-9]/;
  
    if (mtnRegex.test(phoneNumber)) {
      displayNetworkIcon(networkIconContainer, networkIcon, 'mtn.png');
    } else if (gloRegex.test(phoneNumber)) {
      displayNetworkIcon(networkIconContainer, networkIcon, 'glo.png');
    } else if (airtelRegex.test(phoneNumber)) {
      displayNetworkIcon(networkIconContainer, networkIcon, 'airtel.png');
    } else if (nineMobileRegex.test(phoneNumber)) {
      displayNetworkIcon(networkIconContainer, networkIcon, 'untitled.png');
    } else {
      alert('Invalid Nigerian phone number. Please enter a valid number.');
    }
  }
  
  function displayNetworkIcon(container, icon, networkIcon) {
    icon.src = networkIcon;
    container.style.display = 'block';
  }
  