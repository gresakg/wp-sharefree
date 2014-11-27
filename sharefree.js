/**
 * ShareFree - Free social bookmarks for your site.
 *
 *  Copyright 2013 by Gregor Gresak <design@gresak.net>
 * 
 * ShareFree free software: you can redistribute 
 * it and/or modify it under the terms of the GNU General Public 
 * License as published by the Free Software Foundation, either 
 * version 3 of the License, or (at your option) any later version.
 * 
 * Some open source application is distributed in the hope that it will 
 * be useful, but WITHOUT ANY WARRANTY; without even the implied warranty 
 * of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with Foobar.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @license GPL-3.0+ <http://spdx.org/licenses/GPL-3.0+>
 */

(function($) {

	$.fn.sharefree = function(options) {	
		
		var defaults = {	
			sfDialogWidth: 600,
			sfDialogHeight: 450,
			template: 'smallicons',
			templates:{
			smallicons:'<div class="sharefree">\n\
            	<a class="sf-facebook" href="#"><img src="img/facebook16.gif" alt="fb" class="sf-image"></a>\n\
            	<a class="sf-twitter" href="#"><img src="img/twitter16.jpg" alt="tw" class="sf-image"></a>\n\
            	<a class="sf-gplus" href="#"><img src="img/gplus16.jpg" alt="g+" class="sf-image"></a>\n\
            	<a class="sf-pinterest" href="#"><img src="img/pinterest16.png" alt="p" class="sf-image"></a>\n\
            	<a class="sf-email" href="#"><img src="img/email16.gif" alt="@" class="sf-image"></a>\n\
        	</div>\n',
        	bigicons:'<div class="sharefree">\n\
	            <a class="sf-facebook" href="#"><img src="img/facebook.png" alt="fb" class="sf-image"></a>\n\
            	<a class="sf-twitter" href="#"><img src="img/twitter.gif" alt="tw" class="sf-image"></a>\n\
            	<a class="sf-gplus" href="#"><img src="img/gplus.jpg" alt="g+" class="sf-image"></a>\n\
            	<a class="sf-pinterest" href="#"><img src="img/pinterest.png" alt="p" class="sf-image"></a>\n\
            	<a class="sf-email" href="#"><img src="img/email.png" alt="@" class="sf-image"></a>\n\
        	</div>\n'}
		};
		
		var options = $.extend(defaults, options);
		
		var sfTitle = encodeURIComponent($("title").text());
		var sfImage = $("img")[0].src;
		var currentUrl= encodeURIComponent($(location).attr('href'))
		var fblink= "https://www.facebook.com/sharer.php?u=" + currentUrl + "&amp;image=" + sfImage
		var twlink = "http://twitter.com/share?text=" + sfTitle + "&amp;url=" + currentUrl
		var gplink = "https://plus.google.com/share?url=" + currentUrl
		var pilink = "http://pinterest.com/pin/find/?url=" + currentUrl
		var emlink = "mailto:?subject=" + sfTitle + "&body=" + currentUrl
		
		function createDOM(obj){
				$(obj).append(options.templates[options.template]);
		}
		
		return this.each(function() {
			
			createDOM(this);
			
			$(".sf-facebook").click(function(event){
				event.preventDefault();
			    window.open(fblink, 'fbshare', 'width=' + options.sfDialogWidth + ',height=' + options.sfDialogHeight);
			});
			$(".sf-twitter").click(function(event){
			    event.preventDefault();
			    window.open(twlink, 'twittershare', 'width=' + options.sfDialogWidth + ',height=' + options.sfDialogHeight);
			}); 
			$(".sf-gplus").click(function(event){
			    event.preventDefault();
			    window.open(gplink, 'gplusshare', 'width=' + options.sfDialogWidth + ',height=' + options.sfDialogHeight);
			}); 
			$(".sf-pinterest").click(function(event){
			    event.preventDefault();
			    window.open(pilink, 'pinshare', 'width=' + options.sfDialogWidth + ',height=' + options.sfDialogHeight);
			});
			$(".sf-email").attr("href",emlink);
		});
	}
	
})(jQuery)
