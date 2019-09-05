INTERCOM_ID = INTERCOM_ID || '';

function isNoTrack() {
    return window.location.href.search('notrack=1') > 0;
}

if (!isNoTrack() && INTERCOM_ID) {
    !function () {
        function t() {
            var t = a.createElement('script');
            t.type = 'text/javascript', t.async = !0, t.src = 'https://widget.intercom.io/widget/' + INTERCOM_ID;
            var e = a.getElementsByTagName('script')[0];
            e.parentNode.insertBefore(t, e);
        }

        var e = window, n = e.Intercom;
        if ('function' == typeof n) {
            n('reattach_activator'), n('update', {});
        } else {
            var a = document, c = function () {
                c.c(arguments);
            };
            c.q = [], c.c = function (t) {
                c.q.push(t);
            }, e.Intercom = c, e.attachEvent ? e.attachEvent('onload', t) : e.addEventListener('load', t, !1);
        }
    }();
}

