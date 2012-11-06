$(document).ready(function() {
		var uobj = [],
			onUploadChange = function (e) {
				var status = $(this);
				if ( this.value ) {
					var this_container = $(this).parent('.file-upload').parent('.field:first'),
						value_explode = this.value.split('\\'),
						value = value_explode[value_explode.length-1];

					if(this_container.next('.file-upload-status').length > 0){
						this_container.next('.file-upload-status').remove();
					}
					//this_container.append('<span class="file-upload-status">'+value+'</span>');
					$('<span class="file-upload-status">'+value+'</span>').insertAfter(this_container);
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
			$(this)
				.bind('focus',onUploadFocus)
				.bind('blur',onUploadBlur)
				.bind('change',onUploadChange);

			// Get label width so we can make button fluid, 12px default left/right padding
			var lbl_width = $(this).parent().find('span strong').width() + 24;
			$(this)
				.parent().find('span').css('width',lbl_width)
				.closest('.file-upload').css('width',lbl_width);


			// Set current state 
			onUploadChange.call(this);			

			// Minimizes the text input part in IE
			$(this).css('width','0');
		});
});