/*********************************************

	jQuery extended placeholder plugin.
	Text, password, and textarea fields supported.
	Version: 0.9.2
	Author: Sergey Estrin
	Site: http://g-rain-design.ru/en/jquery/placeholder/
	Released under the MIT License.

*********************************************/
!function(e){e.fn.placeholder_clear=function(){var a=e(this).data("placeholders");e(this).find("input[placeholder], textarea[placeholder]").each(function(){var l=e(this).attr("name");l in a&&e(this).val()==a[l]&&e(this).val("")})},e.fn.placeholder_focus=function(a){this.val()==a&&(this.val(""),this.removeClass(e.fn.placeholder_options.placeholded_class))},e.fn.placeholder_blur=function(a){""==this.val()&&(this.val(a),this.addClass(e.fn.placeholder_options.placeholded_class))},e.fn.placeholder_password_focus=function(a){if(!this.is(":password")&&this.val()==a){var l=e('<input type="password" name="'+this.attr("name")+'" value="" />');l.attr("placeholder",a),l.attr("class",this.attr("class")),l.removeClass("pie_first-child"),l.removeClass(e.fn.placeholder_options.placeholded_class),l.blur(function(){l.placeholder_password_blur(a)}),this.replaceWith(l),l.focus(),l.focus()}},e.fn.placeholder_password_blur=function(a){if(this.is(":password")&&""==this.val()){var l=e('<input type="text" name="'+this.attr("name")+'" value="'+a+'" />');l.attr("placeholder",a),l.attr("class",this.attr("class")),l.removeClass("pie_first-child"),l.addClass(e.fn.placeholder_options.placeholded_class),l.focus(function(){l.placeholder_password_focus(a)}),this.replaceWith(l)}},e.fn.placeholder=function(a){if(null!=a)for(var l in a)null!=e.fn.placeholder_options[l]&&(e.fn.placeholder_options[l]=a[l]);var o=this;e.fn.placeholder_options.container&&e(e.fn.placeholder_options.container_selector).each(function(){var a=e(this).find(e.fn.placeholder_options.caption_selector+":first").html(),l=e(this).find("input:text:first, input:password:first, textarea:first");a&&l[0]&&(l.attr("placeholder",a),o.push(l))}),o.each(function(){var a=e(this),l=e.fn.placeholder_options.caption_prefix+a.attr("placeholder")+e.fn.placeholder_options.caption_postfix,o=a.parents("form:first"),t=o.data("placeholders");t instanceof Array||(t=[]),t[a.attr("name")]=l,o.data("placeholders",t),o.unbind("submit",e.fn.placeholder_clear).bind("submit",e.fn.placeholder_clear),a.is(":password")?(a.placeholder_password_blur(l),a.focus(function(){a.placeholder_password_focus(l)}),a.blur(function(){a.placeholder_password_blur(l)})):(a.placeholder_blur(l),a.focus(function(){a.placeholder_focus(l)}),a.blur(function(){a.placeholder_blur(l)}))})},e.fn.placeholder_options={placeholded_class:"placeholded",caption_prefix:"",caption_postfix:"",container:!1,container_selector:".form-field-container",caption_selector:".form-field-caption"}}(jQuery),$().ready(function(){$(":input[placeholder], textarea[placeholder]").placeholder()});