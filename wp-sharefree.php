<?php
/*
Plugin Name: WP ShareFree
Plugin URI: http://gresak.net
Description: Ads share free buttons to content
Author: Gregor Gresak
Version: 0.1
Author URI: http://gresak.net
*/

function display_sharefree($content) {
	$divs = "\n".'<div class="smallshare"></div>'."\n";
	$template = "<div class=\"sharefree\"><a class=\"sf-facebook\" href=\"#\">"
		. "<img src=\"".plugins_url("sharefree/img/facebook16.gif")."\" alt=\"fb\" class=\"sf-image\"></a>"
		. "<a class=\"sf-twitter\" href=\"#\"><img src=\"".plugins_url("sharefree/img/twitter16.jpg")."\" alt=\"tw\" class=\"sf-image\"></a>"
		. "<a class=\"sf-gplus\" href=\"#\"><img src=\"".plugins_url("sharefree/img/gplus16.jpg")."\" alt=\"g+\" class=\"sf-image\"></a>"
		. "<a class=\"sf-pinterest\" href=\"#\"><img src=\"".plugins_url("sharefree/img/pinterest16.png")."\" alt=\"p\" class=\"sf-image\"></a>"
		. "<a class=\"sf-email\" href=\"#\"><img src=\"".plugins_url("sharefree/img/email16.gif")."\" alt=\"@\" class=\"sf-image\"></a></div>";
	$js = "<script>\n"
		. "jQuery('.smallshare').sharefree({template:'smallicons', templates:{smallicons:'".$template."'}});\n"
		. "</script>\n";
	$content = $divs.$content.$divs.$js;
	return $content;
}
wp_enqueue_script('sharefree',plugins_url('sharefree/sharefree.js'),array('jquery'));
add_filter("the_content","display_sharefree");