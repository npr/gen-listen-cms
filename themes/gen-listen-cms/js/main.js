!function(a){var b=function(b,c,d,e,f,g){var h=a('<div class="station-option">'),i=a('<div class="station-select">'),j=a('<div class="station-content">'),k=a('<div class="station-image-content">'),l=a('<img class="station-image" src="'+c+'">');k.append(l);var m=a('<span class="station-call">');m.html(d);var n=a('<span class="station-title description">');g=g||"",n.html(e+" "+g);var o=a('<span class="station-name">');o.html(f);var p=a('<input type="hidden" class="station-id">');p.val(b);var q=a('<a class="station-select-button link-button alt" href="#">');return q.html("select"),q.on("click",function(b){b.preventDefault(),$oldStation=a(this).parent().parent(),$oldStation.find(".station-select-button").remove(),$oldStation.find(".station-select").append('<span class="giant-icon">&#x2713;</span>'),a("#station-search-result-area").empty(),a("#station-search-result-area").html($oldStation);var c=$oldStation.find(".station-id").val();a('input[name="PrimaryStation"]').val(c)}),""!=c&&c.indexOf("logos/generic.gif")<0&&j.append(k),j.append(o).append(n).append(p),i.append(q),h.append(j),h.append(i),h};a("#station-search-button").on("click",function(c){c.preventDefault(),a("#station-search-result-area").html(""),a('input[name="PrimaryStation"]').val("");var d=encodeURI(a('input[name="PrimaryStationPicker"]').val());if(0===d.length)return a("#station-search-result-area").html(""),!1;var e="api/stations?q="+d;a.ajax({type:"GET",url:e,success:function(c){if(a("#station-search-result-area").empty(),"No results found"==c[0]||0==c.length)a("#station-search-result-area").html("<strong>No results found</strong>");else for(var d=0;d<c.length;d++)$station=b(c[d].org_id,c[d].logo,c[d].call,c[d].title,c[d].name,c[d].frequency),a("#station-search-result-area").append($station)}})}),a("#Form_ListeningPartyForm_hostingDate").on("focus",function(b){a(this).val("")}),"undefined"!=typeof Parsley&&a("form.custom-parsley").parsley({errorsWrapper:"<div></div>",errorTemplate:'<small class="error"></small>',errorClass:"error",excluded:"input[type=button], input[type=submit], input[type=reset], input[type=hidden], :hidden, .ignore-validation, #Form_ListeningPartyForm_PrimaryStationPicker"})}(jQuery),function(a){a(".share-twitter").click(function(c){c.stopPropagation();var d=a("#share-text").val();return b("http://twitter.com/intent/tweet?text="+encodeURIComponent(d)),!1}),a(".share-fb").click(function(a){return a.stopPropagation(),b("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(window.location.href)),!1}),a(".share-tumblr").click(function(c){c.stopPropagation();var d="https://www.tumblr.com/widgets/share/tool/?posttype=photo",e=a("#share-title").val(),f=a("#share-text").val(),g=a("#share-url").val(),h=a("#share-image").val();return e&&(d+="&title="+e),f&&(d+="&caption="+f),h&&(d+="&content="+h),g&&(d+="&photo-clickthru="+g,d+="&canonicalUrl="+g),b(d),!1});var b=function(a){window.open(a,"_blank","height=600,width=800,toolbar=no,directories=no,status=no, menubar=no,scrollbars=no,resizable=no ,modal=yes")}}(jQuery);