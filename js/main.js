// "use strict";

$('.clients-slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  autoplay: true,  
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});



$('.testimonial-slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  // speed: 300,
  autoplay: false,  
  slidesToScroll: 1,
  slidesToShow: 1
});







// code for the counters 
var nums = document.querySelectorAll(".count"),
    section=document.querySelector(".counter");


nums.forEach(function(num) {
		let speed=150;
		let target=num.getAttribute("data-value");	
	const updateCounter=()=>{
		let count=+num.innerText;	
		let inc=target / speed;	
		if(count < target) {
			let currentVal=count+inc;
			num.innerText=Math.ceil(currentVal);
			setTimeout(updateCounter, 10);
		} else {
				num.innerText=target;
			}	
  };  

  //to scroll event 
  window.addEventListener('scroll',function() {
    var pageAt = (window.innerHeight + window.scrollY);
    // pageAt=pageAt * 0.99;
    var pos = (section.offsetTop + section.offsetHeight / 2);
    if (pageAt > pos) {          
      updateCounter();
    }  
  });

})


// tab filter
var tabs=document.querySelectorAll(".tab-links .tab-link"),
    contents=document.querySelectorAll(".contents");

tabs.forEach(function(tab) {
  tab.addEventListener('click',function() { 
    tabs.forEach(function(tab) {
      tab.classList.remove('active');
    })   
    tab.classList.add('active');
    contents.forEach(function(content){      
      if(tab.classList[0]==content.classList[0]) {
        content.classList.remove('hideme');
      } else {
          if(tab.classList[0]==='all') {
            content.classList.remove('hideme');
          } else {
            content.classList.add('hideme');
          }
        } 
    })
  })
})

// go to top button
var goTop=document.querySelector('.pos-fix');

goTop.addEventListener('click',function() {
  window.scroll({
    top:0,left:0,behavior:"smooth"
  });
})

window.addEventListener('scroll', function () {
  (window.scrollY > window.innerHeight / 2) ? goTop.classList.remove('hide-top') : goTop.classList.add('hide-top');
})


//for faq accordian
var accTabs=document.querySelectorAll('.acc-tab'),
    accContents=document.querySelectorAll('.acc-content');

//to make all the contents hide
accContents.forEach(function(content){
  content.classList.add('hideme');
});


//active tab
accTabs.forEach(function(acctab){
  acctab.addEventListener('click',function() {
    accTabs.forEach(function(tab){
      tab.classList.remove('active');
    })
  acctab.classList.add('active');   
  doAccordianFunctionality(acctab);  
  });
})

//after clicking the tab show or hide the content 
function doAccordianFunctionality(a) {
  accContents.forEach(function(content) {
    if(a.nextElementSibling==content) {
      content.classList.toggle('hideme');
    } else {
        content.classList.add('hideme');
      }
  })
}


//validation using javscript

// var inputs =[
//   fname=document.getElementById('name'),
//   email=document.getElementById('email'),
//   subject=document.getElementById('subject'),  
//   message=document.getElementById('textArea')
// ];

// var Regex=[
//   nameReg=/^([a-zA-Z\s]{5,20})$/,
//   emailReg=/^([a-zA-Z0-9\_\-\.]+)@([a-zA-Z0-9]+).([a-z]{2,5})$/,
//   subReg=/^([a-zA-Z\s\-\_\.]+)$/,
//   msgReg=/^([a-zA-Z0-9\-\_\.\?\,]+)$/
// ];


// inputs.forEach(function(input) {
//   input.addEventListener('keyup',function() {
//     var index=inputs.indexOf('input');
//     if(Regex[index].test(input.value)) {
//       console.log('yay you are correct');
//     } else {
//       error(input,input.nextElementSibling);
//     }
//   })
// })


//for the active tab 
var navLink=document.querySelectorAll('.nav-link');

navLink.forEach(function(fun){
  fun.addEventListener('click',function() {
    navLink.forEach(function(link) {
      link.classList.remove('active');
    })
    fun.classList.add('active');
  })
})


