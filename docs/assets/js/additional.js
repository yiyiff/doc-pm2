$(function() {
    logoClick();
    pWarn();
    trasformH2();
    smoothScroll (500);
    // sidebarActive(); // function removed, .active class added Jekyll on page built (server-side rendering)
    // sidebarOpen(); // function removed, hide and show submenu by Jekyll on page built (server-side rendering)
});

function helper(className, content) {
    return ("<p class=\"" + className + "\">" + (content.slice(5).trim()) + "</p>");
}

function transformClass(text) {
    var result;
    if (/^!&gt;/.test(text)) {
        result = helper('tip', text);
    } else if (/^\?&gt;/.test(text)) {
        result = helper('warn', text);
    } else {
        result = "<p>" + text + "</p>";
    }
    return result;
}

// if markdown & rendered HTML contains contains 'p tag &gt'
// render as p class=warn
function pWarn() {
    var allPtag = document.getElementsByTagName("p");
    var length = allPtag.length;
    var text = [];



    for (var i = 0; i < length; i++) {
        // console.log(allPtag[i].outerHTML)
        if(allPtag[i].innerHTML.indexOf("&gt") !== -1) {
        text[i] = transformClass(allPtag[i].innerHTML);
        allPtag[i].outerHTML = text[i];
        }
        // console.log(text[i])
        // console.log(`${i+1}/${allPtag.length}`)
    }
}

function logoClick() {
    $('.PM2_logo').click(function() {
        $(this).toggleClass('close');
    });
}

// function removed, .active class added Jekyll on page built (server-side rendering)
function sidebarActive() {
    var url = window.location.href;

    // passes on every "a" tag
    $(".sidebar-nav a").each(function() {
        // checks if its the same on the address bar
        if (url == (this.href)) {
            $(this).closest("li").addClass("active");
            // $(this).closest("button").click();
            //for making parent of submenu active
            $(this).closest("li").parent().parent().addClass("active is-active");
            $(this).closest("lu").parent().parent().addClass("is-active");
        }
    });
}

// function removed, hide and show submenu by Jekyll on page built (server-side rendering)
// function sidebarOpen() {
//     $('.accordion-menu a').each(function(){
//          var myHref = $(this).attr('href');
//          var pathname = window.location.pathname;
//          if(pathname.match(myHref)) {
//            $('.accordion-menu').foundation('down', $(this).parent().parent());
//          }
//     });

//     // // Allow opening sidebar submenu without clicking a button
//     // $(".sidebar-nav li.is-accordion-submenu-parent > a").click(function() {
//     //     var $this = $(this);
//     //     event.preventDefault();
//     //     var goTo = this.getAttribute("href");
//     //     $this.next().click();
//     //     setTimeout(function() {
//     //     window.location = goTo;
//     //     }, 200);
//     //     // alert("A link was clicked!");
//     //  });

// }

function smoothScroll (duration) {
  $('#main a[href^="#"]').on('click', function(event) {

      var target = $( $(this).attr('href') );

      if( target.length ) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: target.offset().top
          }, duration);
      }
  });
}

function trasformH2() {
var heading = document.querySelectorAll('h2');
var length = heading.length;
var output = {};

  for (var i = length - 1; i >= 0; i--) {
    var slug = slugify(heading[i].innerText);
    var text = heading[i].innerText;
    output[i] = "<h2 id=\"" + slug + "\"><a href=\"#" + slug + "\" data-id=\"" + slug + "\" class=\"anchor\"><span>" + text + "</span></a></h2" + ">";
    heading[i].outerHTML = output[i];
  }
    url = [];
}

// from docsify.js
var hasOwn = Object.prototype.hasOwnProperty;
var cache$1 = {};
var re = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g;

function lower(string) {
  return string.toLowerCase();
}

function slugify(str) {
  if (typeof str !== 'string') {
    return '';
  }

  var slug = str
    .trim()
    .replace(/[A-Z]+/g, lower)
    .replace(/<[^>\d]+>/g, '')
    .replace(re, '')
    .replace(/\s/g, '-')
    .replace(/-+/g, '-')
    .replace(/^(\d)/, '_$1');
  var count = cache$1[slug];

  count = hasOwn.call(cache$1, slug) ? count + 1 : 0;
  cache$1[slug] = count;

  if (count) {
    slug = slug + '-' + count;
  }

  return slug;
}