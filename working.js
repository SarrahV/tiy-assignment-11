$(function() {

  $.ajax("data.json", {
    success: function(data) {
      var tree = buildTree(data);
      $("body").html(tree);
    }
  })

});

var buildTree = function(data) { //beginning
  var $rootUl, rootLi;

  $rootUl = $("<ul />"); 

  _.each(data, function(item) {  //initial list
    var $innerUl, $innerLi, $innerData, $ininUl, $ininLi, $ininData;

    $rootLi = $("<li />");
    $rootLi.append("<span>" + item.name + "</span>");

      if (item.children) { //begin if item.children
      innerData = item.children;
      $innerUl = $("<ul />");

      _.each(innerData, function(innerItem) { //inside initial list

        $innerLi = $("<li />");
        $innerLi.append("<span>" + innerItem.name + "</span>");
        $innerUl.append($innerLi);


          if (item.children.children) { //begin if item.children 2
          innerLi = item.children.children;
          $ininUl = $("<ul />");

          _.each(innerData, function(ininItem) { //inside initial list 2

            $ininLi = $("<li />");
            $ininLi.append("<span>" + ininItem.name + "</span>");
            $ininUl.append($ininLi);

          }); //end inside initial list 2

          $innerLi.append($ininUl);

        }//end if.item.children

        $innerUl.append($ininLi);

      }); //end inside initial list

      $rootLi.append($innerUl);

    } //end if.item.children
    
    $rootUl.append($rootLi);

  }); // end initial list

  return $rootUl;

};//end



