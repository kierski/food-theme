"use strict";var load=function(){setTimeout(function(){document.querySelector("body").classList.add("loaded")},1500);var n=document.querySelector("#loader-wrapper"),e=document.querySelector("main.main"),t=function(){e.setAttribute("style","visibility: visible; opacity: 1")};!function(){["transitionend","webkitTransitionEnd","mozTransitionEnd","oTransitionEnd"].forEach(function(e){n.addEventListener(e,function(){n.style.display="none","none"===n.style.display&&t()},!1)})}()},header=function(){console.log("header")};document.addEventListener("DOMContentLoaded",function(n){load(),header()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWQuanMiLCJoZWFkZXIuanMiLCJtYWluLmpzIl0sIm5hbWVzIjpbImxvYWQiLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwibG9hZGVyV3JhcHBlciIsIm1haW5Db250ZW50Iiwic2hvd0NvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJmb3JFYWNoIiwidHJhbnNpdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJoZWFkZXIiLCJjb25zb2xlIiwibG9nIiwiZXZlbnQiXSwibWFwcGluZ3MiOiJZQUNBLElBQU1BLE1BQU8sV0FHWkMsV0FBVyxXQUNWQyxTQUFTQyxjQUFjLFFBQVFDLFVBQVVDLElBQUksV0FDM0MsS0FHSCxJQUFNQyxHQUFnQkosU0FBU0MsY0FBYyxtQkFDdkNJLEVBQWNMLFNBQVNDLGNBQWMsYUFhckNLLEVBQWMsV0FDbkJELEVBQVlFLGFBQWEsUUFBUyxxQ0FaZCxZQUNqQixnQkFBaUIsc0JBQXVCLG1CQUFvQixrQkFBa0JDLFFBQVEsU0FBVUMsR0FDbEdMLEVBQWNNLGlCQUFpQkQsRUFBWSxXQUMxQ0wsRUFBY08sTUFBTUMsUUFBVSxPQUNNLFNBQWhDUixFQUFjTyxNQUFNQyxTQUN2Qk4sTUFFQyxTQ2xCQU8sT0FBUyxXQUNiQyxRQUFRQyxJQUFJLFVDRGRmLFVBQVNVLGlCQUFpQixtQkFBb0IsU0FBVU0sR0ZBeERsQixPRUVFZSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBsb2FkID0gKCkgPT4ge1xuXG5cdC8vIHBhZ2UgaXMgcmVhZHlcblx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xuXHR9LCAxNTAwKTtcblxuXHQvLyB2YXJpYWJsZXNcblx0Y29uc3QgbG9hZGVyV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkZXItd3JhcHBlcicpO1xuXHRjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4ubWFpbicpO1xuXG5cdGNvbnN0IHJlbW92ZUxvYWRlciA9ICgpID0+IHtcbiAgICBbJ3RyYW5zaXRpb25lbmQnLCAnd2Via2l0VHJhbnNpdGlvbkVuZCcsICdtb3pUcmFuc2l0aW9uRW5kJywgJ29UcmFuc2l0aW9uRW5kJ10uZm9yRWFjaChmdW5jdGlvbiAodHJhbnNpdGlvbikge1xuXHRcdFx0bG9hZGVyV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKHRyYW5zaXRpb24sIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0bG9hZGVyV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRpZiAobG9hZGVyV3JhcHBlci5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcblx0XHRcdFx0XHRzaG93Q29udGVudCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCBmYWxzZSk7XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3Qgc2hvd0NvbnRlbnQgPSAoKSA9PiB7XG5cdFx0bWFpbkNvbnRlbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsICd2aXNpYmlsaXR5OiB2aXNpYmxlOyBvcGFjaXR5OiAxJyk7XG5cdH07XG5cblx0cmVtb3ZlTG9hZGVyKCk7XG5cbn07XG4iLCJcbmNvbnN0IGhlYWRlciA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coJ2hlYWRlcicpO1xufTtcbiIsIlxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdGxvYWQoKTtcbiAgaGVhZGVyKCk7XG59KTtcbiJdfQ==
