/* SnackbarJS - MIT LICENSE (https://github.com/FezVrasta/snackbarjs/blob/master/LICENSE.md) */
(function(c) {
    function d(a) {
        return "undefined" !== typeof a && null !== a ? !0 : !1
    }
    c(document).ready(function() {
        c("body").append("<div id=snackbar-container/>")
    });
    c(document).on("click", "[data-toggle=snackbar]", function() {
        c(this).snackbar("toggle")
    }).on("click", "#snackbar-container .snackbar", function() {
        c(this).snackbar("hide")
    });
    c.snackbar = function(a) {
        if (d(a) && a === Object(a)) {
            var b;
            b = d(a.id) ? c("#" + a.id) : c("<div/>").attr("id", "snackbar" + Date.now()).attr("class", "snackbar");
            var g = b.hasClass("snackbar-opened");
            d(a.style) ? b.attr("class", "snackbar " + a.style) : b.attr("class", "snackbar");
            a.timeout = d(a.timeout) ? a.timeout : 3E3;
            d(a.content) && (b.find(".snackbar-content").length ? b.find(".snackbar-content").text(a.content) : b.prepend("<span class=snackbar-content>" + a.content + "</span>"));
            d(a.id) ? b.insertAfter("#snackbar-container .snackbar:last-child") : b.appendTo("#snackbar-container");
            d(a.action) && "toggle" == a.action && (a.action = g ? "hide" : "show");
            var e = Date.now();
            b.data("animationId1", e);
            setTimeout(function() {
                b.data("animationId1") === e && (d(a.action) && "show" != a.action ? d(a.action) && "hide" == a.action && b.removeClass("snackbar-opened") : b.addClass("snackbar-opened"))
            }, 50);
            var f = Date.now();
            b.data("animationId2", f);
            0 !== a.timeout && setTimeout(function() {
                b.data("animationId2") === f && b.removeClass("snackbar-opened")
            }, a.timeout);
            return b
        }
        return !1
    };
    c.fn.snackbar = function(a) {
        var b = {};
        if (this.hasClass("snackbar")) {
            b.id = this.attr("id");
            if ("show" === a || "hide" === a || "toggle" == a) b.action = a;
            return c.snackbar(b)
        }
        d(a) && "show" !== a && "hide" !== a && "toggle" != a || (b = {
            content: c(this).attr("data-content"),
            style: c(this).attr("data-style"),
            timeout: c(this).attr("data-timeout")
        });
        d(a) && (b.id = this.attr("data-snackbar-id"), "show" === a || "hide" === a || "toggle" == a) && (b.action = a);
        a = c.snackbar(b);
        this.attr("data-snackbar-id", a.attr("id"));
        return a
    }
})(jQuery);