$.ajax({
    url: './data.json',
    dataType: "json",
    type: 'GET',
    success: function (_data) {
        alert(_data.data.text)
    }
});