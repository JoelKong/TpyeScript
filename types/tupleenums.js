var color = [255, 0, 255];
var goodRes = [200, "OK"];
var myStatus = 12; /* OrderStatus.DELIVERED */
function isDelivered(status) {
  return status === 12 /* OrderStatus.DELIVERED */;
}
isDelivered(13 /* OrderStatus.RETURNED */);
var ArrowKeys;
(function (ArrowKeys) {
  ArrowKeys["UP"] = "up";
  ArrowKeys["DOWN"] = "down";
  ArrowKeys["LEFT"] = "left";
  ArrowKeys["RIGHT"] = "right";
  ArrowKeys[(ArrowKeys["ERROR"] = 234)] = "ERROR";
})(ArrowKeys || (ArrowKeys = {}));
ArrowKeys.LEFT;
