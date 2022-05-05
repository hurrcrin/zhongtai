(function ($) {
    $(function () {
        $('#bootstrap-table').each(function () {
            var table = $(this);
            table.children('thead').children('tr').append('<th tabindex="0"><div class="th-inner "></div><div class="fht-cell"></div></th>');
            table.children('tbody').children('tr').filter(':odd').hide();
            table.children('tbody').children('tr').filter(':even').click(function () {
                var element = $(this);
                element.next('tr').toggle('slow');
                element.find(".table-expandable-arrow").toggleClass("up");
            });
            table.children('tbody').children('tr').filter(':even').each(function () {
                var element = $(this);
                element.append('<td><div class="table-expandable-arrow"></div></td>');
            });
        });
    });
})(jQuery); 