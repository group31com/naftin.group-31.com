//HEAD 
(function(app) {
try { app = angular.module("_html_"); }
catch(err) { app = angular.module("_html_", []); }
app.run(["$templateCache", function($templateCache) {
"use strict";

$templateCache.put("html/views/modal-full-prescribing-information.html","\n" +
    "<div class=\"ngdialog-content\">\n" +
    "  <div class=\"copy\">\n" +
    "    <h2>Full Prescribing Information</h2><a href=\"assets/naftingel_pi.pdf\" target=\"_blank\"><img src=\"../img/pi_banner_naftin_gel.png\" height=\"219\" width=\"327\" alt=\"Naftion Gel 2% Full Prescribing Information\"/></a><a href=\"assets/naftincream_pi.pdf\" target=\"_blank\"><img src=\"../img/pi_banner_naftin_cream.png\" height=\"221\" width=\"331\" alt=\"Naftion Cream 2% Full Prescribing Information\"/></a>\n" +
    "  </div>\n" +
    "</div>")

$templateCache.put("html/views/modal-leaving-site.html","\n" +
    "<div class=\"ngdialog-content\">\n" +
    "  <div class=\"copy\">\n" +
    "    <h2>You are now leaving naftin.com</h2>\n" +
    "    <p>Merz is not responsible for content or policies on linked sites.</p><a class=\"button\" href=\"\" ng-click=\"closeThisDialog()\">Cancel</a>&nbsp;<a class=\"button\" href=\"{{url}}\" target=\"_blank\" ng-click=\"closeThisDialog()\">OK</a>\n" +
    "  </div>\n" +
    "</div>")
}]);
})();