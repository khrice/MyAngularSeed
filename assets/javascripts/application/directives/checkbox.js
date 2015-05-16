app.directive('checkbox', ['$compile', function($compile) {
    return {
        link: function($scope, $element, attrs, controller) {

            $('<label class="' + ($element[0].className||'') + '"><span></span>' + ($element.attr('label')||'') + '</label>').insertAfter($element);

            $element.next('label').click(function() {
                $element.click();
            });
        }
    };
}]);