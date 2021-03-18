$(document).ready (function() {
   //add an h2 heading to the aside
   $("aside").append("<h2>Table of contents</h2>");
 
   // wrap the h2 text in the article with Kas tags
   $("article h2") wrapInner ("<a></a>");

   // add ids to the new ka tags
   $("article a") .each(function (index) {
    var id="heading" + (index + 1);
    $(this) .attr("id" id)
  // clone the kas tags in the article
  // and insert them into the aside
   $("article a").clone.insertAfter ($("aside h2"));
   //remove the lid attributes from the katags
   in the aside
   $("aside a removeAttr("id");