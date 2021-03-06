jQuery(document).ready(function($){
	$('.magnific-gallery').each(function() { // the containers for all your galleries
	    $(this).magnificPopup({
	    	mainClass: 'mfp-with-zoom mfp-img-mobile',
	    	delegate: 'a', // the selector for gallery item
	        type: 'image',
	        closeOnContentClick: false,
			closeBtnInside: true,

			image: {
				verticalFit: true,
				titleSrc: function(item) {
					var img_desc = item.el.parent().parent().find('.gallery-caption').text();
					return img_desc + '<a class="image-source-link" href="'+item.el.attr('href')+'" target="_blank">source</a>';
				}
	    	},
			
			zoom: {
			    enabled: true,
			    duration: 300,
			},

	        gallery: {
	          enabled:true
	        },

	        callbacks: {
    			buildControls: function() {
      			// re-appends controls inside the main container
      			this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
    			},
    		},

	    });

	}); 

	$('.pt-gallery').each( function() {

		$(this).magnificPopup({

		    mainClass: 'mfp-with-fade',
		    removalDelay: 300,
		    delegate: 'dd',
		    type: 'image',
		    closeOnContentClick: false,
			closeBtnInside: true,

			image: {
				verticalFit: true,
				titleSrc: function(item) {
					var img_desc = item.el.find('.desc-wrapper').html();
					return img_desc + '<a class="image-source-link" href="'+item.el.attr('data-mfp-src')+'" target="_blank">source</a>';
				}
	    	},

		    gallery: {
		        enabled:true,
		    },

		    callbacks: {
    			buildControls: function() {
      			// re-appends controls inside the main container
      			this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
    			},
  			},

		});

	});

	$('.product-gallery').each( function() {

		$(this).magnificPopup({

		    mainClass: 'mfp-with-fade',
		    removalDelay: 300,
		    delegate: 'a.zoom',
		    type: 'image',
		    closeOnContentClick: false,
			closeBtnInside: true,

			image: {
				verticalFit: true,
				titleSrc: function(item) {
					var img_desc = item.el.attr('title');
					return img_desc + '<a class="image-source-link" href="'+item.el.attr('href')+'" target="_blank">source</a>';
				}
	    	},

		    gallery: {
		        enabled:true,
		    },

		    callbacks: {
    			buildControls: function() {
      			// re-appends controls inside the main container
      			this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
    			},
  			},

		});

	});

	$('.single-product .type-product .images').each( function() {

		$(this).magnificPopup({

		    mainClass: 'mfp-with-fade',
		    removalDelay: 300,
		    delegate: 'a.zoom',
		    type: 'image',
		    closeOnContentClick: false,
			closeBtnInside: true,

			image: {
				verticalFit: true,
				titleSrc: function(item) {
					var img_desc = item.el.attr('title');
					return img_desc + '<a class="image-source-link" href="'+item.el.attr('href')+'" target="_blank">source</a>';
				}
	    	},

		    gallery: {
		        enabled:true,
		    },

		    /*callbacks: {
    			buildControls: function() {
      			// re-appends controls inside the main container
      			this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
    			},
  			},*/

		});

	});
	    

});