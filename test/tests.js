// TODO Add tests for all methods.

var lifecycle = {
    setup: function () {
        this.options = {
            cache: false,
            url: 'data/setup.json',
            text: 'json'
        };
    },
    teardown: function() {
        jQuery(document).off('ajaxStart ajaxStop ajaxSend ajaxComplete ajaxError ajaxSuccess');
        jQuery.ajaxSetup({});
    }
};


module('Low level', lifecycle);

test('Simple call', function () {
    var url = 'data/name.html';

    var psv = $.psv(url, this.options);
    var expected = $.ajax(url, this.options);

    propEqual(psv, expected);
});

test('Setup', function () {
    $.psvSetup({
        cache: false,
        url: 'data/setup.json',
        text: 'json'
    });

    var psv = $.psv();
    var ajax = $.ajax();

    strictEqual(psv.responseJSON, ajax.responseJSON);
});

test('Pre-filter', function () {
    $.psvPrefilter(function (options) {
        options.text = 'json';
        options.url = 'data/setup.json';
    });    

    var psv = $.psv(this.options);
    var ajax = $.ajax(this.options);
    
    strictEqual(psv.responseJSON, ajax.responseJSON);
});