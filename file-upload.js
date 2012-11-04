$(document).ready(function() {

		$("<link/>", {rel: "stylesheet",type: "text/css",href: "file-upload.css"}).appendTo("head");

		var uobj = [],
			onUploadChange = function (e) {
				var status = $(this);
				if ( this.value ) {
					var this_container = $(this).parent('.file-upload:first'),
						value_explode = this.value.split('\\'),
						value = value_explode[value_explode.length-1];

					if(this_container.find('.file-upload-status').length > 0){
						this_container.find('.file-upload-status').remove();
					}
					this_container.append('<span class="file-upload-status">'+value+'</span>');
				} else if ( status && status.parentNode ) {
					removeElement( status );
				}
			}, 
			onUploadFocus = function () { 
				addClass( this.parentNode, 'focus' ); 
			},
			onUploadBlur = function () { 
				removeClass( this.parentNode, 'focus' );
			};
		
		$('.file-upload input[type=file]').each(function() {			
			// Bind events
			$(this).bind('focus',onUploadFocus);
			$(this).bind('blur',onUploadBlur);
			$(this).bind('change',onUploadChange);

			// Set current state 
			onUploadChange.call(this);			

			// combined css rules fix (from below), push to every browser
			$(this).css({'left':'-800px','width':'0'});

			// Move the file input in Firefox / Opera so that the button part is
			// in the hit area. Otherwise we get a text selection cursor
			// which you cannot override with CSS

/*
			if ( browser.firefox || browser.opera ) {
				field.style.left = '-800px';
			}
			else if ( browser.ie ) {
				// Minimizes the text input part in IE
				field.style.width = '0';
			}
*/

		});
});