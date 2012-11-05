$(document).ready(function() {
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
				}
			}, 
			onUploadFocus = function () {
				$(this).parent().addClass('focus');
			},
			onUploadBlur = function () {
				$(this).parent().addClass('focus');
			};
		
		$('.file-upload.custom input[type=file]').each(function() {			
			// Bind events
			$(this).bind('focus',onUploadFocus);
			$(this).bind('blur',onUploadBlur);
			$(this).bind('change',onUploadChange);

			// Set current state 
			onUploadChange.call(this);			

			// Minimizes the text input part in IE
			$(this).css('width','0');
		});
});