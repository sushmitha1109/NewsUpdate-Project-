$(document).ready(function() {
            $("#aa").click(function () {
              $(".main_content").hide();
              $(".tamizhagam").show();
              $(".india").hide();
              $(".Arasiyal").hide();
              $(".cinema").hide();
              $(".vilayatu").hide();
              $(".crime").hide();
              $(".video").hide();
              $(".meme").hide();
          });
       $("#bb").click(function () {
              $(".main_content").hide();
              $(".tamizhagam").hide();
              $(".india").show();
              $(".Arasiyal").hide();
              $(".cinema").hide();
              $(".vilayatu").hide();
              $(".crime").hide();
              $(".video").hide();
              $(".meme").hide();
           });
       $("#dd").click(function () {
             $(".main_content").hide();
             $(".tamizhagam").hide();
             $(".india").hide();
             $(".Arasiyal").show();
             $(".cinema").hide();
             $(".vilayatu").hide();
             $(".crime").hide();
             $(".video").hide();
             $(".meme").hide();
           });

             $("#ee").click(function () {
              $(".main_content").hide();
              $(".tamizhagam").hide();
              $(".india").hide();
              $(".Arasiyal").hide();
              $(".cinema").show();
              $(".vilayatu").hide();
              $(".crime").hide();
              $(".video").hide();
              $(".meme").hide();
             });

             $("#ff").click(function () {
              $(".main_content").hide();
              $(".tamizhagam").hide();
              $(".india").hide();
              $(".Arasiyal").hide();
              $(".cinema").hide();
              $(".vilayatu").show();
              $(".crime").hide();
              $(".video").hide();
              $(".meme").hide();
              });

             $("#gg").click(function () {
              $(".main_content").hide();
              $(".tamizhagam").hide();
              $(".india").hide();
              $(".Arasiyal").hide();
              $(".cinema").hide();
              $(".vilayatu").hide();
              $(".crime").show();
              $(".video").hide();
              $(".meme").hide();
              });

             $("#hh").click(function () {
              $(".main_content").hide();
              $(".tamizhagam").hide();
              $(".india").hide();
              $(".Arasiyal").hide();
              $(".cinema").hide();
              $(".vilayatu").hide();
              $(".crime").hide();
              $(".video").show();
              $(".meme").hide();
              });

             $("#ii").click(function () {
              $(".main_content").hide();
              $(".tamizhagam").hide();
              $(".india").hide();
              $(".Arasiyal").hide();
              $(".cinema").hide();
              $(".vilayatu").hide();
              $(".crime").hide();
              $(".video").hide();
              $(".meme").show();
              });
            
              

      $('.demo').pagination({
        dataSource: function(done){
          var result = [];
          for (var i = 1; i < 20; i++) {
              result.push(i);
          }
          done(result);
       },
       pageRange:2,
       pageSize:2
     });
     ``
});
  

