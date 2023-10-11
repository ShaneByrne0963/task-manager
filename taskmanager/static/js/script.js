document.addEventListener('DOMContentLoaded', function () {
    // Setting up the side navbar for mobile devices
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // Modals for verification to delete categories
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    // Date Picker
    var datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mmmm yyyy",
        i18n: {
            done: 'Select'
        }
    });

    // Select Dropdown
    var selectDropdown = document.querySelectorAll('select');
    M.FormSelect.init(selectDropdown);

    // Collapsibles
    var collapse = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapse);
});