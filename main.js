function addTime() {
    var date = new Date();
    var time = date.toLocaleTimeString();
    var selection = DocumentApp.getActiveDocument().getSelection();
    if (selection) {
        var elements = selection.getRangeElements();
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i].getElement();
            if (element.editAsText) {
                element.editAsText().insertText(0, time);
            }
        }
    }
}


function onOpen() {
    var ui = DocumentApp.getUi();
    ui.createMenu('Custom Menu')
        .addItem('Add Time', 'addTime')
        .addToUi();
}