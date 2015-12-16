/* Creates header entity */
webrdApp

.directive('sharedFooter', [ function() {
  return {
    restrict: 'E',
    templateUrl: 'app/shared/footer/footer.html'
  };
}])