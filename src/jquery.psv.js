((function ($) {

    /* Wrap low level functions */
    $.extend({

        psv: function (url, options) {
            return $.ajax(url, options);
        },

        psvSetup: function (target, settings) {
            return $.ajaxSetup(target, settings);
        },

        psvPrefilter: function (prefilters) {
            return $.ajaxPrefilter(prefilters);
        },

        psvTransport: function (transport) {
            return $.ajaxTransport(transport);
        }

    });

    /* Wrap global event handlers */
    $.each([
        'Start',
        'Stop',
        'Complete',
        'Error',
        'Success',
        'Send'
    ], function (i, type) {
        jQuery.fn['psv' + type] = function (fn) {
            return this.on( 'ajax' + type, fn);
        };
    });

})(jQuery));