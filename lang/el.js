(function () {
    var lang = {
            months : "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
            monthsShort : "Ιαν_Φεβ_Μαρ_Απρ_Μαι_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
            weekdays : "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
            weekdaysShort : "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
            longDateFormat : {
                LT : "h:mm A",
                L : "DD/MM/YYYY",
                LL : "D MMMM YYYY",
                LLL : "D MMMM YYYY LT",
                LLLL : "dddd, D MMMM YYYY LT"
            },
            calendar : {
                sameDay : '[Σήμερα στις] LT',
                nextDay : '[Αύριο στις] LT',
                nextWeek : 'dddd [στις] LT', 
                lastDay : '[Χθες] LT',
                lastWeek : '[τελευταία] dddd [στις] LT', 
                sameElse : 'L'
            },
            relativeTime : {
                future : "σε %s",
                past : "%s πριν",
                s : "λίγα δευτερόλεπτα",
                m : "ένα λεπτό",
                mm : "%d λεπτά",
                h : "μία ώρα",
                hh : "%d ώρες",
                d : "μία μέρα",
                dd : "%d μέρες",
                M : "ένα μήνα",
                MM : "%d μήνες",
                y : "ένα έτος",
                yy : "%d έτη"
            },
            ordinal : function (number) {
                var b = number % 10;
                return (~~ (number % 100 / 10) === 1) ? 'η' :
                    (b === 1) ? 'η' :
                    (b === 2) ? 'η' :
                    (b === 3) ? 'η' : 'η';
            }
        };

    // Node
    if (typeof module !== 'undefined') {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('el', lang);
    }
}());
