/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'project-icon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-edit': '&#xe900;',
		'icon-pos': '&#xe901;',
		'icon-share': '&#xe902;',
		'icon-kefu': '&#xe903;',
		'icon-conph': '&#xe904;',
		'icon-del': '&#xe905;',
		'icon-collect': '&#xe906;',
		'icon-circle-check': '&#xe907;',
		'icon-info': '&#xe908;',
		'icon-setting': '&#xe909;',
		'icon-jf': '&#xe90a;',
		'icon-bad': '&#xe90b;',
		'icon-conph2': '&#xe90c;',
		'icon-msg': '&#xe90d;',
		'icon-order-sel': '&#xe90e;',
		'icon-order': '&#xe90f;',
		'icon-star': '&#xe910;',
		'icon-qz-sel': '&#xe911;',
		'icon-qz': '&#xe912;',
		'icon-scan': '&#xe913;',
		'icon-home-sel': '&#xe914;',
		'icon-home': '&#xe915;',
		'icon-search': '&#xe916;',
		'icon-user-sel': '&#xe917;',
		'icon-user': '&#xe918;',
		'icon-heart': '&#xe919;',
		'icon-menu': '&#xe91a;',
		'icon-eye': '&#xe91b;',
		'icon-wait-comment': '&#xe91d;',
		'icon-bicycle': '&#xe91e;',
		'icon-pos-sel': '&#xe91f;',
		'icon-back-money': '&#xe920;',
		'icon-back-money-success': '&#xe921;',
		'icon-angle-right': '&#xe922;',
		'icon-angle-left': '&#xe924;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
