var wallpapers = [
	{
		url : "http://i.imgur.com/kRs3rkd.png",
		title : "Steven Universe"
	},
	{
		url : "http://i.imgur.com/ZpUqvrh.jpg",
		title : "Skyrim"
	},
	{
		url : "http://i.imgur.com/jdH5zVJ.jpg",
		title : "Team Fortress 2"
	},
	{
		url : "http://i.imgur.com/YanpUbf.jpg",
		title : "Adventure Time"
	},
	{
		url : "http://i.imgur.com/azMtPta.jpg",
		title : "Portal"
	}
]

$(function()
{
	var wp = wallpapers[Math.floor(Math.random() * wallpapers.length)];
	$("#bg-container #bg").css("background-image","url('"+wp.url+"')");
});

$(window).on("load", function()
{
	$("#bg-container #bg").css("opacity",0.4);
});

// Ganalytic
 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-48635201-2', 'auto');
  ga('send', 'pageview');