(function() {
    'use strict';

    angular.module('myweb.services', [])

    .factory('_', ['$window',
      function($window) {
        return $window._;
      }
    ])

    .factory('parseUri', ['$window',
      function($window) {
        return $window.parseUri;
      }
    ]);

}).call(this);

(function() {
  'use strict';

  angular.module('myweb.controllers', [])

  .controller('MainController', ['$scope', 'ngDialog', '$location',
    function($scope, ngDialog, $location) {


      if($location.hash() && $location.hash() === 'full-pi') {
        ngDialog.open({template:'/views/modal-full-prescribing-information.html', className: 'ngdialog-theme-modal', scope: $scope});
      }

      $scope.openFullPI = function() {
        ngDialog.open({template:'/views/modal-full-prescribing-information.html', className: 'ngdialog-theme-modal', scope: $scope});
      };

      $scope.externalURL = function(url) {
        $scope.url = url;
        ngDialog.open({template:'/views/modal-leaving-site.html', className: 'ngdialog-theme-modal', scope: $scope});
      };
      
    }
  ]);
}).call(this);
(function() {
    'use strict';

    angular.module('myweb.directives', [])

    .directive('scrollToItem', function() {
    return {
        restrict: 'A',
        scope: {
            scrollTo: "@"
        },
        link: function(scope, $elm, attr) {
            $elm.on('click', function() {
                if(scope.scrollTo === '#page-isi') {
                        $('#page-isi').removeClass('fixed').css({});
                }
                $('html,body').animate({scrollTop: $(scope.scrollTo).offset().top }, "slow");
            });
        }
    };})
    ;
}).call(this);

(function() {
    'use strict';

    angular.module('myweb.filters', ['ngSanitize'])

    // Return trusted html
    .filter('htrust', ['$sce',
        function($sce) {
            return function(text) {
                return $sce.trustAsHtml(text);
            };
        }
    ])

    // Return trusted url
    .filter('utrust', ['$sce',
        function($sce) {
            return function(url) {
                return $sce.trustAsResourceUrl(url);
            };
        }
    ])

    .filter('range', function() {
        return function(input, total) {
            return _.range(0, parseInt(total, 10));
        };
    })

    // change &amp; into &
    .filter('amp', function() {
        return function(input) {
            return input.replace(/&amp;/g, '&');
        };
    })

    ;

}).call(this);

(function() {
    'use strict';

    angular.module('myweb', ['myweb.services', 'myweb.controllers', 'myweb.directives', 'myweb.filters', 'ngSanitize', 'ngTouch','ngDialog',  'tabs'])

    .config(['$locationProvider',
        function($locationProvider) {
    $locationProvider.html5Mode(true);
    console.log($locationProvider);
        }
    ])

    .run(['$rootScope',

        function($rootScope) {

            FastClick.attach(document.body);
            $rootScope.$on('$routeChangeStart', function (event, next, current) {
                console.log('test');
            });
        }
    ]);

}).call(this);
