function Formatter() {
}

Formatter.prototype = {
    bindButtons: function () {
        $('#boldBtn').click(this.makeLastCellBold);
        $('#italicBtn').click(this.makeLastCellItalic);
        $('#underlineBtn').click(this.makeLastCellUnderline);
    },
    trackSelectedCell: function() {
        $('input').click(this._selectCell);
    },
    _selectCell: function(e) {
        $('input').removeClass('selected-cell');
        $(e.currentTarget).addClass('selected-cell');
    },
    makeLastCellBold: function () {
        $('.selected-cell').toggleClass('bold');
    },
    makeLastCellItalic: function () {
        $('.selected-cell').toggleClass('italic');
    },
    makeLastCellUnderline: function () {
        $('.selected-cell').toggleClass('underline');
    }
}