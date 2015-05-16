app.directive('dropdown', ['$compile', function($compile) {
    return {
        link: function($scope, $element, attrs, controller) {
            $element.wrap('<div class="btn-dropdown ' + $element[0].className + '"></div>');
            $element.parent().append('<span>' + $element.attr('label') + '<i class="caret"><i></i></i></span>');
        }
    };
}]);