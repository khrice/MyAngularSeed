app.directive('collapser', ['$compile', function($compile) {
    return {
        scope:{
            collapser:'='
        },
        link: function($scope, $element, attrs, controller) {

            $element.find('.collapser-content:first').hide();

            $element.find('.collapser-header:first').click(function(e) {
                if ($element.attr('disabled')) {
                    console.log('disabled');
                    return;
                }
                if(!$element.is('.expanded')) {
                    // $scope[$element.attr('collapser')].expanded = !$scope[$element.attr('collapser')].expanded;

                    $element.addClass('expanded').children('.collapser-content:first').slideDown(200,function() {
                        console.log($scope);
                        if($scope.collapser) $scope.$apply(function() { $scope.collapser.expanded = true; });
                        var top = $element.offset().top;
                        var height = $element.height();
                        var scrollTop = $(window).scrollTop();
                        var winHeight = $(window).height();
                        var mbot = parseInt($element.css('margin-bottom'),10);

                        if(top + height > winHeight + scrollTop) {
                            var elderScroll = scrollTop + mbot +(top + height - winHeight - scrollTop);
                           // $("html, body").animate({ scrollTop: elderScroll}, "slow");
                        }
                    });

                } else {
                    if($scope.collapser) $scope.$apply(function() { $scope.collapser.expanded = false; });
                    $element.removeClass('expanded').children('.collapser-content:first').slideUp();
                }
            });

            if($element.attr('collapser') > '' && $scope.collapser.expanded) {
                $element.addClass('expanded').children('.collapser-content:first').slideToggle(0);
            }

            if($element.is('.expanded')) {
                $element.children('.collapser-content:first').slideDown(0);
            }
        }
    };
}]);