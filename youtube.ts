//classes definition for Youtube

class Video  {
    //Properties : videoid,videotitle,videolink,videoupload date,videolength,displayAdv,comment,views,likes,dislikes,uploadby,displayAdv,recommend
    private videoId : number
    private videoLink : string
    private videoTitle: string;
    private videoUploadDate: Date
    private videoLength :number
    private views : number;
    private likes : number
    private disLikes : number
    private comments : VideoComment []
    private uploadedBy : Channel
    private displayAdv : Boolean
    private recommended : Object

    //constructor for initilized the properties
    constructor(_videoId : number,_videoLink :string, _videoTitle : string, _videoUploadDate : Date, _videoLength : number,_views : number,_likes : number,_disLikes : number,_comments : VideoComment [],_uploadedBy : Channel,_displayAdv? : boolean,_recommended?:object)
    {
	    this.videoId = _videoId;
        this.videoLink = _videoLink
        this.videoTitle = _videoTitle;
        this.videoUploadDate = _videoUploadDate;
        this.videoLength = _videoLength
        this.views = _views
        this.likes = _likes
        this.disLikes = _disLikes
        this.comments = _comments
        this.uploadedBy = _uploadedBy
        this.displayAdv = _displayAdv
        this.recommended = _recommended
    }    

    //Methods to get the details

    getComments = () => {
	    return this.comments 
    }
    getUploader = () => {
	    return this.uploadedBy
    }
    getRecommended = () => {
	    return this.recommended 
    }
    getVideoID = () => {
	    return this.videoId 
    }
    getVideoLinkD = () => {
	    return this.videoLink 
    }
    getVideoTitle = () => {
	    return this.videoTitle 
    }
    getvideoUploadDate = () => {
	    return this.videoUploadDate 
    }
    getvideoLength = () => {
	    return this.videoLength 
    }
    getViews = () => {
	    return this.views 
    }
    getLikes = () => {
	    return this.likes 
    }
    getdiLikes = () => {
	    return this.disLikes 
    }

}

class Channel{
    //channel having properties like channelId,channelName,description,category,license,subscribers
    private channelID : number
    private channelName : string
    private channelDescription : string
    private channelCategory : string
    private channelLicence : string
	private subscribers : number

    //contructor to initilize properties
    constructor(_channelID : number, _channelName : string, _channelDescription : string, _channelCategory : string,_channelLicence : string,_subscribers : number)
    {
	    this.channelID = _channelID;
	    this.channelName = _channelName;
        this.channelDescription = _channelDescription;
        this.channelCategory = _channelCategory
        this.channelLicence = _channelLicence
        this.subscribers = _subscribers
    }

    //Methods to get Details
    getChannelId = () => {
	    return this.channelID
    }
    getChannelName = () => {
	    return this.channelName 
    }
    getDescription = () => {
	    return this.channelDescription 
    }
    getvideoLength = () => {
	    return this.channelCategory 
    }
    getViews = () => {
	    return this.channelLicence 
    }
    getLikes = () => {
	    return this.subscribers 
    }
    

}

class VideoComment{
    //Properties : commentid,comment,commentby,comment time,likes,dislikes,replies to comment
    private commentID : number
    private comment : string
    private commentBy : Channel
    private commentTime : string
    private likes : number
    private disLikes : number
    private replies : Reply[]

    //constructor for initilized the properties
    constructor(_commentID : number,_comment:string,_commentBy:Channel,_commentTime:string,_likes:number,_disLikes:number,_replies? : Reply []){
        this.commentID = _commentID
        this.comment = _comment
        this.commentBy = _commentBy
        this.commentTime = _commentTime
        this.likes = _likes
        this.disLikes = _disLikes
        this.replies = _replies
    }

    //Methods to get Details
    getCommentId = () => {
	    return this.commentID
    }
    getComment = () => {
	    return this.comment 
    }
    getCommentBy = () => {
	    return this.commentBy 
    }
    getCommentTime = () => {
	    return this.commentTime 
    }
    getLikes = () => {
	    return this.likes 
    }
    getdisLikes = () => {
	    return this.disLikes 
    }
    getReply = () => {
	    return this.replies 
    }


}

class Reply{
    //reply proprties
    private replyID : number
    private reply : string
    private replyBy : Channel
    private replyTime : string
    private likes : number
    private disLikes : number
    private associatedWith : number
    
    //constructor to initilized the properties
    constructor(_replyID : number,_reply:string,_replyBy:Channel,_replyTime:string,_likes:number,_disLikes:number,_associatedWith : number){
        this.replyID = _replyID
        this.reply = _reply
        this.replyBy = _replyBy
        this.replyTime = _replyTime
        this.likes = _likes
        this.disLikes = _disLikes
        this.associatedWith = _associatedWith // commentID
    }
    //Methods to get Details
    getReplyId = () => {
	    return this.replyID
    }
    getReply = () => {
	    return this.reply 
    }
    getReplyBy = () => {
	    return this.replyBy 
    }
    getReplyTime = () => {
	    return this.replyTime
    }
    getLikes = () => {
	    return this.likes 
    }
    getdisLikes = () => {
	    return this.disLikes 
    }
    getAssociated = () => {
	    return this.associatedWith 
    }

}


class YouTube{

    private video : Video [] // Array of Videos
    
    constructor(_video : Video [])
    {
	    this.video = _video;
    }

    getAllVideos = () => {
	    return this.video
    }

    getVideobyNumber = (videoNumber) => {
        return this.video[videoNumber]
    }

} //end of class


let channel1 = new Channel(1,"Shahrukh","Improving of our Life by gaining knowledge from some of the best mentor of the world","Education","Youtube License",240000)
let channel2 = new Channel(2,"Ahtesham","Basic Idea","Education","Youtube License",2)

let comment1 = new VideoComment(1,"Its an awesome",channel1,"1 Week ago",53,1)
let comment2 = new VideoComment(1,"Its an awesome too",channel2,"1 Week ago",21,1)

let comments1  = [comment1]

let reply1 = new Reply(1,"You are right",channel2,"5 Hours ago",1,0,1)
let replies1 = [reply1]

let comment3 = new VideoComment(1,"Good initiative",channel1,"1 Week ago",10,1,replies1)

let comments2  = [comment1,comment3]

let video1 = new Video(1,"Introduction to ES6","https://www.youtube.com/watch?v=WiCxfWh-3y4",new Date(),20.30,123,1000,10,comments1,channel1);

let video2 = new Video(1,"Introduction to Angular","https://www.youtube.com/watch?v=k4qVkWh1EAo",new Date(),20.30,123,1000,10,comments2,channel1,true,video1);


let videos = [video1,video2]

let youtube = new YouTube(videos)
console.log("Data of Youtube Video Page Class")
console.log(youtube)
console.log("--------------------------------")

