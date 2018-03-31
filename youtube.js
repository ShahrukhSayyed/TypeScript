//classes definition for Youtube
var Video = /** @class */ (function () {
    //constructor for initilized the properties
    function Video(_videoId, _videoLink, _videoTitle, _videoUploadDate, _videoLength, _views, _likes, _disLikes, _comments, _uploadedBy, _displayAdv, _recommended) {
        var _this = this;
        //Methods to get the details
        this.getComments = function () {
            return _this.comments;
        };
        this.getUploader = function () {
            return _this.uploadedBy;
        };
        this.getRecommended = function () {
            return _this.recommended;
        };
        this.getVideoID = function () {
            return _this.videoId;
        };
        this.getVideoLinkD = function () {
            return _this.videoLink;
        };
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.getvideoUploadDate = function () {
            return _this.videoUploadDate;
        };
        this.getvideoLength = function () {
            return _this.videoLength;
        };
        this.getViews = function () {
            return _this.views;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getdiLikes = function () {
            return _this.disLikes;
        };
        this.videoId = _videoId;
        this.videoLink = _videoLink;
        this.videoTitle = _videoTitle;
        this.videoUploadDate = _videoUploadDate;
        this.videoLength = _videoLength;
        this.views = _views;
        this.likes = _likes;
        this.disLikes = _disLikes;
        this.comments = _comments;
        this.uploadedBy = _uploadedBy;
        this.displayAdv = _displayAdv;
        this.recommended = _recommended;
    }
    return Video;
}());
var Channel = /** @class */ (function () {
    //contructor to initilize properties
    function Channel(_channelID, _channelName, _channelDescription, _channelCategory, _channelLicence, _subscribers) {
        var _this = this;
        //Methods to get Details
        this.getChannelId = function () {
            return _this.channelID;
        };
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.getDescription = function () {
            return _this.channelDescription;
        };
        this.getvideoLength = function () {
            return _this.channelCategory;
        };
        this.getViews = function () {
            return _this.channelLicence;
        };
        this.getLikes = function () {
            return _this.subscribers;
        };
        this.channelID = _channelID;
        this.channelName = _channelName;
        this.channelDescription = _channelDescription;
        this.channelCategory = _channelCategory;
        this.channelLicence = _channelLicence;
        this.subscribers = _subscribers;
    }
    return Channel;
}());
var VideoComment = /** @class */ (function () {
    //constructor for initilized the properties
    function VideoComment(_commentID, _comment, _commentBy, _commentTime, _likes, _disLikes, _replies) {
        var _this = this;
        //Methods to get Details
        this.getCommentId = function () {
            return _this.commentID;
        };
        this.getComment = function () {
            return _this.comment;
        };
        this.getCommentBy = function () {
            return _this.commentBy;
        };
        this.getCommentTime = function () {
            return _this.commentTime;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getdisLikes = function () {
            return _this.disLikes;
        };
        this.getReply = function () {
            return _this.replies;
        };
        this.commentID = _commentID;
        this.comment = _comment;
        this.commentBy = _commentBy;
        this.commentTime = _commentTime;
        this.likes = _likes;
        this.disLikes = _disLikes;
        this.replies = _replies;
    }
    return VideoComment;
}());
var Reply = /** @class */ (function () {
    //constructor to initilized the properties
    function Reply(_replyID, _reply, _replyBy, _replyTime, _likes, _disLikes, _associatedWith) {
        var _this = this;
        //Methods to get Details
        this.getReplyId = function () {
            return _this.replyID;
        };
        this.getReply = function () {
            return _this.reply;
        };
        this.getReplyBy = function () {
            return _this.replyBy;
        };
        this.getReplyTime = function () {
            return _this.replyTime;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getdisLikes = function () {
            return _this.disLikes;
        };
        this.getAssociated = function () {
            return _this.associatedWith;
        };
        this.replyID = _replyID;
        this.reply = _reply;
        this.replyBy = _replyBy;
        this.replyTime = _replyTime;
        this.likes = _likes;
        this.disLikes = _disLikes;
        this.associatedWith = _associatedWith; // commentID
    }
    return Reply;
}());
var YouTube = /** @class */ (function () {
    function YouTube(_video) {
        var _this = this;
        this.getAllVideos = function () {
            return _this.video;
        };
        this.getVideobyNumber = function (videoNumber) {
            return _this.video[videoNumber];
        };
        this.video = _video;
    }
    return YouTube;
}()); //end of class
var channel1 = new Channel(1, "Shahrukh", "Improving of our Life by gaining knowledge from some of the best mentor of the world", "Education", "Youtube License", 240000);
var channel2 = new Channel(2, "Ahtesham", "Basic Idea", "Education", "Youtube License", 2);
var comment1 = new VideoComment(1, "Its an awesome", channel1, "1 Week ago", 53, 1);
var comment2 = new VideoComment(1, "Its an awesome too", channel2, "1 Week ago", 21, 1);
var comments1 = [comment1];
var reply1 = new Reply(1, "You are right", channel2, "5 Hours ago", 1, 0, 1);
var replies1 = [reply1];
var comment3 = new VideoComment(1, "Good initiative", channel1, "1 Week ago", 10, 1, replies1);
var comments2 = [comment1, comment3];
var video1 = new Video(1, "Introduction to ES6", "https://www.youtube.com/watch?v=WiCxfWh-3y4", new Date(), 20.30, 123, 1000, 10, comments1, channel1);
var video2 = new Video(1, "Introduction to Angular", "https://www.youtube.com/watch?v=k4qVkWh1EAo", new Date(), 20.30, 123, 1000, 10, comments2, channel1, true, video1);
var videos = [video1, video2];
var youtube = new YouTube(videos);
console.log("Data of Youtube Video Page Class");
console.log(youtube);
console.log("--------------------------------");
