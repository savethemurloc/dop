
      function onClickMMObs() {
        hideAll();
        showObs();
      }

      function onClickMMGlav() {
        hideAll();
        showGlav();
      }

      function onClickMMSprav() {
        hideAll();
        showSprav();
      }

      function onClickMMStats() {
        hideAll();
        showStats();
      }

      function onClickMMSettings() {
        hideAll();
        showSettings();
      }

      function onClickNewObs() {
        hideAll();
        showNewObs();
      }

      function showGlav() {
        document.getElementById('glavnaya').removeAttribute("class");
        document.getElementById('glavnaya').setAttribute("class", "rightMain");
      }

      function hideGlav() {
        document.getElementById('glavnaya').removeAttribute("class");
        document.getElementById('glavnaya').setAttribute("class", "rightNone");
      }

      function showObs() {
        document.getElementById('allObs').removeAttribute("class");
        document.getElementById('allObs').setAttribute("class", "rightMain");
      }

      function hideObs() {
        document.getElementById('allObs').removeAttribute("class");
        document.getElementById('allObs').setAttribute("class", "rightNone");
      }

      function showStats() {
        document.getElementById('allStats').removeAttribute("class");
        document.getElementById('allStats').setAttribute("class", "rightMain");
      }

      function hideStats() {
        document.getElementById('allStats').removeAttribute("class");
        document.getElementById('allStats').setAttribute("class", "rightNone");
      }

      function showSprav() {
        document.getElementById('allSprav').removeAttribute("class");
        document.getElementById('allSprav').setAttribute("class", "rightMain");
      }

      function hideSprav() {
        document.getElementById('allSprav').removeAttribute("class");
        document.getElementById('allSprav').setAttribute("class", "rightNone");
      }

      function showSettings() {
        document.getElementById('allSettings').removeAttribute("class");
        document.getElementById('allSettings').setAttribute("class", "rightMain");
      }

      function hideSettings() {
        document.getElementById('allSettings').removeAttribute("class");
        document.getElementById('allSettings').setAttribute("class", "rightNone");
      }

      function showNewObs() {
        document.getElementById('newObs').removeAttribute("class");
        document.getElementById('newObs').setAttribute("class", "rightMain");
      }

      function hideNewObs() {
        document.getElementById('newObs').removeAttribute("class");
        document.getElementById('newObs').setAttribute("class", "rightNone");
      }

      function hideAll() {
        hideObs();
        hideGlav();
        hideSprav();
        hideStats();
        hideSettings();
        hideNewObs();
      }