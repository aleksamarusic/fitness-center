function setToNull(){
  localStorage.setItem("comments",JSON.stringify([])); 
  localStorage.setItem("likes",JSON.stringify([]));
  localStorage.setItem("dislikes",JSON.stringify([]));
    
  localStorage.setItem("id",JSON.stringify(0));

}
var id=0;
var trainingsArray;
var attended;
var init;
!(function($) {
  "use strict";

  var likesArray=[];
  var dislikesArray=[];
  var ratingsArray=[];
  //Init
  $(window).on('load', function() {
      //Initialize training information
      $('.expandedContainer').hide();
      init=[
        {
          'training': 'Core Glute',
          'pictures':{
            '1':'core1.jpg',
            '2':'core2.jpg',
            '3':'core.jpg',
            '4':'yoga.jpg',
            '5':'photo1.jpg',
            '6':'photo1.jpg',
            
          },
          'average_rating':'4.4',
          'len':'55',
          'difficulty':'55',
          'banner':'core1.jpg',
          'group':'core',
          'description':'Mišićavi i dobro definisani trbusnjaci pokazuju i snagu i zdravlje. I momci i devojke teže da imaju jak, toniran presek, ali vrlo malo njih ikada postigne to. Ako ste tražili savršen program da biste dobili čvrste i snažne trbusnjake koje ste uvek tražili, ne tražite dalje. ' },{
          'training': 'Core Classical',
          'pictures':{
            '1':'photo2.jpg',
            '2':'core.jpg',
            '3':'core1.jpg',
            '4':'core2.jpg',
            '5':'pilates.jpg',
            '6':'cardio.jpg',
          },
          'average_rating':'4.75',
          'len':'30',
          'difficulty':'25',
          'banner':'core2.jpg',
          'group':'core',
          'description':'Trbušnjaci se sastoje od primarnih mišićnih vlakana koja se brzo trzaju. Mišićna vlakna koja se brzo trzaju su gušća od svojih kolega (mišićna vlakna sporog trzanja). Teška i eksplozivna vežba će mnogo više podstaći vlakna koja se brzo trzaju. '    },{
          'training': 'Core Power',
          'pictures':{
            '1':'core1.jpg',
            '2':'core2.jpg',
            '3':'core.jpg',
            '4':'yoga.jpg',
            '5':'pilates.jpg',
            '6':'cardio.jpg',
          },
          'average_rating':'4.32',
          'len':'65',
          'difficulty':'90',
          'group':'core',
          'banner':'core.jpg',
          'description':'Trbušnjaci se sastoje od primarnih mišićnih vlakana koja se brzo trzaju. Mišićna vlakna koja se brzo trzaju su gušća od svojih kolega (mišićna vlakna sporog trzanja). Teška i eksplozivna vežba će mnogo više podstaći vlakna koja se brzo trzaju. '    },{
          },{
          'training': 'Yoga Hatha',
          'pictures':{
            '1':'photo1.jpg',
            '2':'yoga.jpg',
            '3':'yoga1.jpg',
            '4':'yoga.jpg',
            '5':'pilates.jpg',
            '6':'cardio.jpg',
          },
          'average_rating':'4.12',
          'len':'45',
          'difficulty':'20',
          'banner':'yoga1.jpg',
          'description':'Joga čini više nego što sagorieva kalorije i tonira mišiće. To je totalna vežba uma-tela koja kombinuje jačanje i istezanje poza sa dubokim disanjem i meditacijom ili opuštanjem. Hatha je oblik koji se najčešće povezuje sa jogom, ona kombinuje niz osnovnih pokreta sa disanjem. '     },{
          'training': 'Yoga Jnana',
          'pictures':{
            '1':'photo2.jpg',
            '2':'core2.jpg',
            '3':'yoga2.jpg',
            '4':'yoga.jpg',
            '5':'pilates.jpg',
            '6':'photo3.jpg',
          },
          'average_rating':'4.32',
          'len':'45',
          'difficulty':'40',
          'banner':'yoga2.jpg',
          'description':"Jnana joga, poznata i kao Jnanamarga, jedan je od nekoliko duhovnih staza u hinduizmu koji naglašava 'put znanja' " },{
          'training': 'Yoga Iynegar',
          'pictures':{
            '1':'core1.jpg',
            '2':'core2.jpg',
            '3':'photo1.jpg',
            '4':'yoga.jpg',
            '5':'pilates.jpg',
            '6':'photo4.jpg',
          },
          'average_rating':'4.52',
          'len':'125',
          'difficulty':'90',
          'banner':'yoga3.jpg',
          'description':'Vrsta joge koja koristi rekvizite poput blokova, kaiševa i stolica koji će vam pomoći da svoje telo pređete u ispravno poravnanje.'  },{
          'training': 'Cardio HIIT',
          'pictures':{
            '1':'core1.jpg',
            '2':'core2.jpg',
            '3':'cardio1.jpg',
            '4':'photo4.jpg',
            '5':'pilates.jpg',
            '6':'photo1.jpg',
          },
          'average_rating':'4.02',
          'len':'95',
          'difficulty':'50',
          'banner':'cardio1.jpg',
          'description':"HIIT, ili intervalni treninzi visokog intenziteta, mogu biti efikasan i zabavan način za rešavanje kardio treninga, dodavanje mišića i razbacivanje ozbiljnih masti."   },{
          'training': 'Cardio SS',
          'pictures':{
            '1':'photo2.jpg',
            '2':'core2.jpg',
            '3':'photo4.jpg',
            '4':'photo1.jpg',
            '5':'pilates.jpg',
            '6':'photo3.jpg',
          },
          'average_rating':'4.92',
          'len':'45',
          'difficulty':'40',
          'banner':'cardio2.jpg',
          'description':'Kardio štand u stanju mirovanja je jednostavno kardio vežbanje koje je neprekidan i postojan napor, za razliku od intervnog kardio vežbanja gde menjate svoj energetski učinak.'   },{
          'training': 'Cardio Spinn',
          'pictures':{
            '1':'photo4.jpg',
            '2':'core2.jpg',
            '3':'cardio3.jpg',
            '4':'yoga.jpg',
            '5':'pilates.jpg',
            '6':'cardio.jpg',
          },
          'average_rating':'4.52',
          'len':'35',
          'difficulty':'60',
          'banner':'cardio3.jpg',
          'description':
          'Spinn - Sinonim za kardio je SPINNING trening, intenzivna vožnja statičnih bicikala sa opterećenjem ritmovima muzike'}, {  'training': 'Pilates Classical',
          'pictures':{
            '1':'photo1.jpg',
            '2':'photo2.jpg',
            '3':'pilates1.jpg',
            '4':'yoga.jpg',
            '5':'pilates.jpg',
            '6':'cardio.jpg',
          },
          'average_rating':'4.02',
          'len':'95',
          'difficulty':'50',
          'banner':'pilates1.jpg',
          'description':'Pilates je oblik vežbe sa malim udarom koji ima za cilj jačanje mišića uz poboljšanje posturalnog poravnanja i fleksibilnosti.'  },{
          'training': 'Pilates Stott',
          'pictures':{
            '1':'core1.jpg',
            '2':'core2.jpg',
            '3':'photo3.jpg',
            '4':'yoga.jpg',
            '5':'pilates.jpg',
            '6':'cardio.jpg',
          },
          'average_rating':'4.92',
          'len':'45',
          'difficulty':'40',
          'banner':'pilates2.jpg',
          'description':'STOTT PILATES je izuzetno specifičan i sofisticiran način vežbanja pilatesa na originalnim terapijskim uređajima za reformatore'}, {  'training': 'Pilates Reformer',
          'pictures':{
            '1':'core1.jpg',
            '2':'core2.jpg',
            '3':'pilates3.jpg',
            '4':'yoga.jpg',
            '5':'pilates.jpg',
            '6':'core.jpg',
          },
          'average_rating':'4.52',
          'len':'35',
          'difficulty':'60',
          'banner':'pilates3.jpg',
          'description':"Reformator se sastoji od pokretne platforme koja klizne napred-nazad na klizačima i koristi opruge kao otpor." }];

      //Initialize comment information
      var comments=[/*{
          'training': 'Dynamic Core',
          '1': {
            'id':'lb0',
            'name': 'Filip',
            'content': 'Odlican trening sa odlicnim instruktorom',
            'likes': '62',
            'dislikes': '20',
            'subcomments': {
              '1': {
                
                'id':'lb1',
                'name': 'Aleksa',
                'content': 'Slazem se!',
                'likes': '62',
                'dislikes': '0',
                'subcomments': {
                  '1': {
                    
                    'id':'lb2',
                    'name': 'Milan',
                    'content': 'I ja!',
                    'likes': '500',
                    'dislikes': '0',
                  }
                }
              }
            }
          },
          '2': {
            'id':'lb3',
            'name': 'Aleksa',
            'content': 'Najbolji trening',
            'likes': '129',
            'dislikes': '2',
          }
        }*/];
   // setToNull();
    //Initialize
    
  var ratings=[{
    'training': 'Core Glute',
    'ratings':{
      '1':'4.5',
      '2':'5',
      '3':'4',
      '4':'2',
      '5':'3.5',
      '6':'5'
    }
  },{
    'training': 'Core Classical',
    'ratings':{
      '1':'4',
      '2':'5',
      '3':'5',
      '4':'1.5',
      '5':'4.5',
      '6':'1',
      '7':'4'
    }
  },{
    'training': 'Core Power',
    'ratings':{
      '1':'5',
    }
  },{
    'training': 'Yoga Hatha',
    'ratings':{
      '1':'5',
      '2':'5',
      '3':'5',
      '4':'4.5',
      '5':'4.5',
      '6':'3',
      '7':'4'
    }
  },{
    'training': 'Yoga Jnana',
    'ratings':{
      '1':'1',
      '2':'5',
      '3':'5',
      '4':'4.5',
      '5':'2.5',
      '6':'3',
      '7':'5'
    }
  },{
    'training': 'Yoga Iynegar',
    'ratings':{
      '1':'1',
      '2':'5',
      '3':'5',
      '4':'4.5',
      '5':'2.5',
      '6':'3',
      '7':'5'
    }
  },{
    'training': 'Cardio HIIT',
    'ratings':{
      '1':'1',
      '2':'5',
      '3':'5',
      '4':'4.5',
      '5':'2.5',
      '6':'3',
      '7':'5'
    }
  },{
    'training': 'Cardio SS',
    'ratings':{
      '1':'1',
      '2':'5',
      '3':'5',
      '4':'4.5',
      '5':'2.5',
      '6':'3',
      '7':'5'
    }
  },{
    'training': 'Cardio Spinn',
    'ratings':{
      '1':'1',
      '2':'5',
      '3':'5',
      '4':'4.5',
      '5':'2.5',
      '6':'3',
      '7':'5'
    }
  },{
    'training': 'Pilates Classical',
    'ratings':{
      '1':'1',
      '2':'5',
      '3':'5',
      '4':'4.5',
      '5':'2.5',
      '6':'3',
      '7':'5'
    }
  },{
    'training': 'Pilates Stott',
    'ratings':{
      '1':'1',
      '2':'5',
      '3':'5',
      '4':'4.5',
      '5':'2.5',
      '6':'3',
      '7':'5'
    }
  },{
    'training': 'Pilates Reformer',
    'ratings':{
      '1':'1',
      '2':'5',
      '3':'5',
      '4':'4.5',
      '5':'2.5',
      '6':'3',
      '7':'5'
    }
  },];
    if(localStorage.getItem("ratings")==null)
      localStorage.setItem("ratings",JSON.stringify(ratings));

    attended=["Core Power","Core Classical","Yoga Hatha"];
    localStorage.setItem("trainings",JSON.stringify(init));
    
    //Get from local storage
    commentArray=JSON.parse(localStorage.getItem("comments"));
    ratingsArray=JSON.parse(localStorage.getItem("ratings"));
    likesArray=JSON.parse(localStorage.getItem("likes"));
    dislikesArray=JSON.parse(localStorage.getItem("dislikes"));
    id=JSON.parse(localStorage.getItem("id"));
    trainingsArray=JSON.parse(localStorage.getItem("trainings"));
    //Safety
    if(likesArray==null)likesArray=[];
    if(dislikesArray==null)dislikesArray=[];
    topThreeTrainings();
});
  $(".closebtn").click(function(){
    overlayOff();
    document.getElementById("expandedVideo").pause();
  });
  $("#expandedVideo").click(function(){
    if(this.paused==false)
      this.pause();
    else
      this.play();
  });
  $("#filterDefault").click(function(){
    init.sort(function(a, b) {
      return a.average_rating-b.average_rating;});

    updateOnSort();
  });
  
  $("#filterName").click(function(){
    init.sort(function(a, b) {
      return ('' + a.training).localeCompare(b.training);});
      
      $("#filterLength").removeClass('active');
      $("#filterDifficulty").removeClass('active');
      $(this).addClass('active');
      console.log(init);
    updateOnSort();
  });
  
  function updateOnSort(){
    var cards=document.getElementsByClassName('card-deck')[0].childNodes;
    for(var i=0;i<init.length;i++){
      for(var j=0;j<cards.length;j++){
            if(cards[j].id==init[i].training){
              document.getElementsByClassName('card-deck')[0].insertBefore(cards[j],cards.firstChild);
              break;
            }
          }
    }
  }
  $("#filterDifficulty").click(function(){
    init.sort(function(a, b) {
      return a.difficulty-b.difficulty;});
      
      $("#filterName").removeClass('active');
      $("#filterLength").removeClass('active');
      $(this).addClass('active');
    updateOnSort();
  });
  $("#filterLength").click(function(){
    init.sort(function(a, b) {
      return a.len-b.len;});
      
      $("#filterName").removeClass('active');
      $("#filterDifficulty").removeClass('active');
      $(this).addClass('active');
    updateOnSort();
  });
  //Setup the specific training page
  $(".card").click(function(){
    
    $(".loader").show();
    $("#preloder").show();
    $(".loader").fadeOut();
    $("#preloder").delay(700).fadeOut("slow");
  
    $(this).parent().animate({marginLeft:'2400px'}).hide('slow');
    $("#filters").hide();

    sleep(500).then(() => {

      //Get card title
      title=$(this).find(".card-title").text();
      //Set title
      $('.trainings-title').text(title);
      //Set breadcrumb title
      $('.breadcrumb-title').text(title);
      //Append title to the breadcrumb list
      $('.breadcrumb-list').append('<li>'+title+'</li>');
       //Find this training's json equivalent
      var arr=JSON.parse(localStorage.getItem("trainings"));
      var training=findTraining(arr,title);
      
      if(training!=null){
        //Set average rating for this training
        $('.avg-rating').text(training['average_rating']);

        //Set length
        $('#length').html("<i class='bx bxs-time'></i> "+training.len+"min");
        //Set banner bg
        $('.trainings-banner').css('background','linear-gradient(to right, rgba(0, 7, 10, 0.589), rgba(2, 13, 19, 0.616)),url("../assets/img/trainings/'+training.banner+'") 0px -10vw no-repeat');
        $('.trainings-banner').css('background-size','100%');
        //Set difficulty
        var color="";
        var txt=parseFloat(training.difficulty/20);
        if(txt>3.5){
          color="red";
        }else if(txt>2){
          color="orange";
        }
        $('.c100').addClass('p'+training.difficulty+" "+color);
        $('.c100-span').html('<div style="font-size:15px;">Težina: <b>'+txt+'</b></div>');

        $('.rate').show();
        $('.c100').show();
        $('.site-portfolio').show();
        $('.comments').show();
        $('#training-description').html(training['description']);
      }
      arr=JSON.parse(localStorage.getItem("comments"));
      var comments=findTraining(arr,title);

      

      //Add initial comments
      commentCnt=0;

      if(comments!=undefined)
        traverseCommentSection(comments,null,0);

      $('.total-comments').text(commentCnt+" komentara");


      //Set my rating
      var currRating=findRating(title,ratingsArray);
      if(currRating!=null){
        currRating=currRating.ratings.my;
      }
      var ratings=$('.rating').children();
      for(var i=0;i<ratings.length;i++){
        
        if(ratings[i].value==currRating){
          ratings[i].checked=true;
          break;
        }
      }
      var height = document.documentElement.scrollHeight-600;
      $(".footerCore").css('margin-top',height);

      var sum=calculateAverageRating();
      updateAverageRating(sum);
      var userAttended=attended.find(element => element == title);
      
      if(userAttended==undefined){
        $('.add-comment').hide();
        $('.rating').hide();
        $('.rating-title').hide();
        $('#rate-text').hide();
        $('#warning').show();
      }
      topThreeTrainings();
      setGalleryPictures();

    });

  function setGalleryPictures(){
    var training=findTraining(trainingsArray,title);
    if(training!=null){
      var pictures=training.pictures;
      var len=1;
      
      //For each
      while(pictures[len]!=undefined){
        len++;
      }
      for(var i=1;i<=len-1;i++){
        if($('#img'+i)[0]!=undefined)
        $('#img'+i)[0].setAttribute("src","../assets/img/trainings/"+pictures[i]);
      }
    }
  }
/*--------------------------------------------------------------
# Ratings
--------------------------------------------------------------*/
var previousRating=null;
//Rate training
$('.rating').click(function(){
      
      var rating=null;
      if(previousRating!=null){
        previousRating.checked=false;
      }
     //Get current rating
      for(var i=0;i<$(this).children().length;i++){
        var child=$(this).children()[i];
        if(child.checked){
          rating=child;
          previousRating=child;
          break;
        }
      }
      //Set rating and update average
      if(rating!=null){
        var ratings=findRating(title,ratingsArray);
        if(ratings==null){
          ratings=new Ratings(title,[]);
          ratingsArray.push(ratings);
        }
        ratings["ratings"]["my"]=rating.getAttribute("value");
        localStorage.setItem("ratings",JSON.stringify(ratingsArray));
        var sum=calculateAverageRating();
        updateAverageRating(sum);
      }
    });
  }); 


function topThreeTrainings(){
  var tmp=title;
  var arr=[];
  for(var i=0;i<init.length;i++){
    title=init[i].training;
    var sum=calculateAverageRating();
    var rating=new Ratings(title,sum);
    arr.push(rating);
  }
  title=tmp;

  arr.sort(function(a, b) {
    return a.ratings-b.ratings;});
  arr.reverse();
  console.log(arr);
  $('#number1').text(arr[0].training);
  $('#number2').text(arr[1].training);
  $('#number3').text(arr[2].training);
  
  $('#number1-desc').text(parseFloat(arr[0].ratings).toFixed(2));
  $('#number2-desc').text(parseFloat(arr[1].ratings).toFixed(2));
  $('#number3-desc').text(parseFloat(arr[2].ratings).toFixed(2));
}

//Calculate and update average rating
function calculateAverageRating(){
  console.log(ratingsArray);
    var allRatings=findRating(title,ratingsArray);
    if(allRatings!=null){
      allRatings=allRatings.ratings;
    }
    else{
      allRatings=new Ratings(title,[]);
      allRatings=allRatings.ratings;
    }

    var sum=0;
    var i=1;
    //Add other ratings
    while(allRatings[i]!=undefined){
      var rating=allRatings[i++];
      sum+=parseFloat(rating);
    }
    //Add my rating
    if(allRatings["my"]!=undefined){
      sum+=parseFloat(allRatings["my"]);
      i++;
    }
    if(i==1)
      i=2;
    sum=sum/(i-1);
    return sum;
  }
  function updateAverageRating(sum){

    //Update
    $('.avg-rating').text(Number((sum).toFixed(2)));
  }
class Ratings{
  constructor(title,ratings){
    this.training=title;
    this.ratings=ratings;
  }
}
function findRating(str,arr){
  for(var i=0;i<arr.length;i++){
    if(arr[i].training==str){
      return arr[i];
    }
  }
}

/*--------------------------------------------------------------
# Likes & Dislikes
--------------------------------------------------------------*/

//Mark like/dislike
  function mark(comment,str,elem){
    var array=likesArray;
    var img=str+".png";

    if(str=="dislike"){
      array=dislikesArray;
    }
    comment[str+"s"]=parseInt(comment[str+"s"])+1;
    
    array.push(elem.id);

    $(elem).html('<img id="'+elem.id+'" class="'+str+'"src="../assets/img/trainings/'+img+'"></img>'+comment[str+"s"]);

    localStorage.setItem("comments",JSON.stringify(commentArray));
    localStorage.setItem(str+"s",JSON.stringify(array));

    return array;
  }

//Unmark like/dislike
  function unmark(comment,str,elem,id){
    var array=likesArray;
    var img=str+'-false.png';

    if(str=="dislike")
      array=dislikesArray;

    comment[str+"s"]=parseInt(comment[str+"s"])-1;

    //Delete from array
    array = array.filter(x => {
        return x != id;
    });


    $(elem).html('<img id="'+id+'"class="'+str+'"src="../assets/img/trainings/'+img+'"></img>'+comment[str+"s"]);
    localStorage.setItem(str+"s",JSON.stringify(array));
    localStorage.setItem("comments",JSON.stringify(commentArray));
    return array;
  }

  function findMarked(arr,id){
    return arr.find(element => element == id)!=undefined;
  }
  //Click on Like
  $(document).on('click', '.comment-like', function(e) {
    
    
    //Find comment
    var training=findTraining(commentArray,title);
    var comment=findCommentById(training,0,this.id);
    console.log(this.id);
    console.log(comment);

    if(likesArray.find(element => element == this.id)==undefined){
      //Like
      likesArray=mark(comment,"like",this);

      var dislikeId="d"+this.id;
      //Undo dislike
      if(findMarked(dislikesArray,dislikeId)){
        dislikesArray = unmark(comment,"dislike",$("#"+dislikeId),dislikeId);
      }
      
    }else{
      //Unlike
      likesArray = unmark(comment,"like",this,this.id);
    }
    
   
  });
  //Dislike
  $(document).on('click', '.comment-dislike', function(e) {
    //Find comment
    var training=findTraining(commentArray,title);
    var commentId=this.id.slice(1);
    var comment=findCommentById(training,0,commentId);

    if(dislikesArray.find(element => element == this.id)==undefined){
      //Dislike
      dislikesArray = mark(comment,"dislike",this);
      //Undo like
      if(findMarked(likesArray,commentId)){
        likesArray = unmark(comment,"like",$("#"+commentId),commentId);
      }
    }else{
      //Undo dislike
      dislikesArray = unmark(comment,"dislike",this,this.id);
    }
    
  });
  
 /*--------------------------------------------------------------
  # Comments
  --------------------------------------------------------------*/
 
  //Cancel button
  $(document).on('click', '.cancel', function(e) {
    $(this).parent().parent().remove();
  });

  //Add button
  $(document).on('click', '.add', function(e) {
    if($(this).parent().find('.comment-input').val()!=""){
      appendComment($(this).parent().parent().parent(),"Filip",$(this).parent().find('.comment-input').val(),0,0,"",id);
    
      $(this).parent().parent().remove();

      var training=findTraining(commentArray,title);
      var comment=findCommentById(training,0,this.id);
      addInnerComment("Filip",$(this).parent().find('.comment-input').val(),comment);
      
      console.log($(".footerCore").height());
    }
    var height = document.documentElement.scrollHeight-950;
    $(".footerCore").css('margin-top',height);
  });
  var previousAddComment=null;
  //Reply button
  $(document).on('click', '.comment-reply', function(e) {
    var el='<div class="comment-box add-comment">\
    <span class="commenter-pic">\
      <img src="../assets/img/trainings/user.png" class="img-fluid">\
    </span>\
    <span class="commenter-name">\
      <input type="text" class="comment-input"id="add-comment-input" placeholder="Dodaj komentar" name="Add Comment">\
      <button type="submit" id="l'+this.id+'"class="btn btn-default add"style="background-color:#151A1D">Komentariši</button>\
      <button type="cancel" class="btn btn-default cancel">Otkaži</button>\
    </span>\
  </div>';
  //Remove previously added comment box
  if(previousAddComment!=null){
    var box=$(previousAddComment+" > .comment-box > .commenter-name > .cancel")[0];
    if(box!=null)box.click();
  }

  $("#c"+this.id).append(el);
  var height = document.documentElement.scrollHeight-950;
  $(".footerCore").css('margin-top',height);
  previousAddComment="#c"+this.id;
});

})(jQuery);

//Classes
class Comments {
  constructor(training) {
    this.training = training;
  }
}
class Comment{
  constructor(name,likes,dislikes,content,id) {
    this.name = name;
    this.likes=likes;
    this.dislikes=dislikes;
    this.content=content;
    this.id=id;
  }
}

likesArray=JSON.parse(localStorage.getItem("likes"));
dislikesArray=JSON.parse(localStorage.getItem("dislikes"));
// sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
function findTraining(arr,title){
  if(arr!=null)
  for(var i=0;i<arr.length;i++){
    if(arr[i].training==title){
      return arr[i];
    }
  }
  return null;
}

//Add comment
$('#btn-add').click(function(){
  console.log(id);
  appendComment(null,"Filip",$('#add-comment-input').val(),0,0,"",id);
  addComment("Filip",$('#add-comment-input').val());
  $('#add-comment-input').val('');
  var height = document.documentElement.scrollHeight-950;
  $(".footerCore").css('margin-top',height);
});
$('.comment-reply').click(function(){
 
});
//Append comment to the global comment array, or to another comment
function appendComment(appendTo,name,content,likes,dislikes,replied,id){
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var likesImage="like-false.png";
  var dislikesImage="dislike-false.png";

  if(likesArray!=null&&likesArray.find(element => element == "lb"+id)!=undefined){
    likesImage="like.png";
  }
  if(dislikesArray!=null&&dislikesArray.find(element => element == "dlb"+id)!=undefined){
    dislikesImage="dislike.png";
  }

  //Create element
  var elem=$('<div id="cb'+id+'"class="comment-box '+replied+'">\
  <span class="commenter-pic">\
    <img src="../assets/img/trainings/user.png" class="img-fluid">\
  </span>\
  <span class="commenter-name">\
    <a href="#">'+name+'</a> <span class="comment-time"><b>'+date+'</b></span>\
  </span>\
  <p class="comment-txt more">'+content+'</p>\
  <div class="comment-meta">\
    <button class="comment-like" id="lb'+id+'"><img class="like"src="../assets/img/trainings/'+likesImage+'">'+likes+'</button>\
    <button class="comment-dislike"id="dlb'+id+'"><img class="like"src="../assets/img/trainings/'+dislikesImage+'">'+dislikes+'</button> \
    <button class="comment-reply reply-popup" id="b'+id+'"><i class="fa fa-reply-all" aria-hidden="true"></i> Odgovori</button></div> \
  <div class="comment-box add-comment reply-box">\
    <span class="commenter-pic">\
      <img src="../assets/img/trainings/user.png" class="img-fluid">\
    </span>\
    <span class="commenter-name">\
      <input type="text" placeholder="Dodaj komentar" name="Add Comment">\
      <button type="submit" class="btn btn-default">Komentariši</button>\
      <button type="cancel" class="btn btn-default reply-popup">Otkaži</button>\
    </span>\
  </div></div>');

  //Append element
  if(appendTo==null){
    $('.comments').append(elem);
  }else{ 
    $(appendTo).append(elem);
  }
  return elem;
}

var commentCnt=0;

//Recursively traverse comment section
function traverseCommentSection(obj,app,level){
  var i=1;
  //For each comment
  while(obj[""+i]!=undefined){
    var comment=obj[""+i];
    var appended=null;
    if(level==0){
      appended=appendComment(null,comment.name,comment.content,comment.likes,comment.dislikes,"",comment.id.slice(2));
    }else{
      appended=appendComment($(app),comment.name,comment.content,comment.likes,comment.dislikes,"replied",comment.id.slice(2));
    }
    if(comment.subcomments!=undefined)
      traverseCommentSection(comment.subcomments,appended,level+1);
    i++;
    commentCnt++;
  }
}
function findCommentById(arr,level,id){
  if(arr==undefined)return null;
  var i=1;
  while(arr[i]!=undefined){
    var comment=arr[""+i];
    if(comment.id==id){
      return comment;
    }
    var res=findCommentById(comment.subcomments,level+1,id);
    if(res!=null)
      return res;
    i++;
  }
  return null;
}
function addComment(name,content){
  var arr=findTraining(commentArray,title);
  if(arr!=null){
    storeNewComment(arr,name,content);
  }else{
    if(commentArray==null)
       commentArray=[];
    var comments=new Comments(title);
    commentArray.push(comments);

    storeNewComment(comments,name,content);
  }
}
function addInnerComment(name,content,comment){
  var arr=comment.subcomments;
  if(arr!=null){
    storeNewComment(arr,name,content);
  }else{
    comment.subcomments=[];
    storeNewComment(comment.subcomments,name,content);
  }
}
function storeNewComment(arr,name,content){
  var i=1;
  //For each comment
  while(arr[i]!=undefined){
    i++;
  }
  var newComment=new Comment(name,0,0,content,"lb"+id);
  arr[""+i]=newComment;
  id++;
  localStorage.setItem('id',JSON.stringify(id));
  localStorage.setItem("comments",JSON.stringify(commentArray));
  //Increment total comment count
  console.log(commentArray);
  $('.total-comments').text(parseInt($('.total-comments').text())+1+" comments");
}
var commentArray;
var title;

function overlayOn(){
  document.getElementById("overlay").style.display = "block";
}
  
function overlayOff() {
  document.getElementById("overlay").style.display = "none";
}
function expandImage(imgs) {
  if(imgs.slice(0,3)=="img"){
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = document.getElementById(imgs).src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = "";
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
  $('#expandedImg').show();
  $('#expandedVideo').hide();
  }
  else{
    $('#expandedVideo').hide();
    $('#expandedSource')[0].src=document.getElementById(imgs).src;
    document.getElementById("expandedVideo").load();
    document.getElementById("expandedVideo").play();
    $('#expandedVideo').show();
    var imgText = document.getElementById("imgtext");
    $('#expandedVideo').parent().show();
    imgText.innerHTML = "";
    $('#expandedImg').hide();
  }
  $('.expandedContainer').css('z-index',4);
  overlayOn();
}
