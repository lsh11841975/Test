/* 获取json文件中的内容，并加入标签内 */
window.onload = function() {
	$.getJSON("data/data.json", function(data) {
		var strBeforeDiv = "<div>"
		var strAfterDiv = "</div>"
		var strDiv = "<div class='media'><div class='media-body'>"
		var $jsontip = $("#news");
		var str = "";
		$jsontip.empty();
		$.each(data, function(infoIndex, info) {
			for(var i = 2; i < info.length; i++) {
				str += "<div class='media news-body'>";
				str += "<div class='media-body'>";
				str += "<h4>" + info[i]["title"] + "</h4>"
				str += "<p class='text-center col-md-4 news-word'>" + info[i]["time"] + "</p>";
				if(info[i]["status"] == 0) {
					str += "<p class='text-left col-md-4 news-word'>未阅读</p>";
				} else {
					str += "<p class='text-left col-md-4 news-word'>" + info[i]["status"] + "人已阅读</p>";
				}
				str += "</div>"
				str += "<div class='media-right'>";
				str += "<a href=''><img id='imgs' src='" + info[i]["img"] + "' /></a>"
				str += "</div>";
				str += "</div>";
				str += "<hr>"
			}
		});
		$jsontip.html(str);
	});
}