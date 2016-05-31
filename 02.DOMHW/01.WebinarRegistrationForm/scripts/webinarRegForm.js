/**
 * Created by NikolayNK on 11.2.2016 г..
 */
var invoice = document.getElementById('invoice');
var invoiceContainer = document.getElementById('invoiceContainer');

invoice.addEventListener('click', function (e) {
    if (invoice.checked) {
        invoiceContainer.style.display = 'block';
    }
    else {
        invoiceContainer.style.display = 'none';
    }
});