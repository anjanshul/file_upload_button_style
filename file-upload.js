$(document).ready(function() {

		$("<link/>", {rel: "stylesheet",type: "text/css",href: "file-upload.css"}).appendTo("head");

		// Create a reusable object
		var uobj = [],
	
			// event handlers, including blur/focus to 
			// restore keyboard navigation
			onUploadChange = function (e) {
				var status = $(this);
				//console.log(this.value);
				//console.log(e);
				if ( this.value ) {
					// IE shows the whole system path, we're reducing it 
					// to the filename for consistency
//					var value = browser.ie ? this.value.split('\\').pop() : this.value;
					var value = this.value
					status.innerHTML = value;
					$(this).parent('.file-upload').append('<span class="file-upload-status">'+status.innerHTML+'</span>');

					if (e) { 

/*						uobj.setElement( status ).
							setOpacity( 0 ).
							start({ 
								opacity: 1, duration: 500 
							});
*/
					}
				}
				else if ( status && status.parentNode ) {
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

			// Create a status element, and store it
//			storeData( field, 'upload-status', createElement( 'span.file-upload-status' ) );

			
			// Bind events
			$(this).bind('focus',onUploadFocus);
			$(this).bind('blur',onUploadBlur);
			$(this).bind('change',onUploadChange);

			// Set current state 
			onUploadChange.call(this);
			
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