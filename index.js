/* =========================== */
//class definition for Facebook Class
var Facebook = /** @class */ (function () {
    function Facebook(name, birthday, gender, interestedIn, languages, relegiousViews, relationship, about, quote, address, contact, facebookId) {
        var _this = this;
        this.setOtherInfo = function (places, friends, photos, Videos, checkIns, music, movies, tvShows, books, likes, events, groups) {
            _this.places = places;
            _this.friends = friends;
            _this.photos = photos;
            _this.Videos = Videos;
            _this.checkIns = checkIns;
            _this.music = music;
            _this.movies = movies;
            _this.tvShows = tvShows;
            _this.books = books;
            _this.likes = likes;
            _this.events = events;
            _this.groups = groups;
        };
        this.getFamiliy = function () {
            return _this.families;
        };
        this.setFamilies = function (families) {
            _this.families = families;
        };
        this.getEducations = function () {
            return _this.educations;
        };
        this.setEducations = function (educations) {
            _this.educations = educations;
        };
        this.setWorks = function (works) {
            _this.works = works;
        };
        this.getWorks = function () {
            return _this.works;
        };
        this.getAge = function (dateString) {
            var today = new Date();
            var birthDate = new Date(dateString);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        };
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.interestedIn = interestedIn;
        this.relegiousViews = relegiousViews;
        this.relationship = relationship;
        this.quote = quote;
        this.about = about;
        this.address = address;
        this.contact = contact;
        this.facebookId = facebookId;
    }
    return Facebook;
}()); //end of class
//objects creation
//object one
var userOne = new Facebook("Shahrukh", "08/08/1994", "Male", "Female", ["Urdu", "English", "Hindi"], "Humanity", "Single", "Life is beutiful", "Great minds think alone", "Jalna-Maharashtra", 7840962887, "srk.Sayyed");
var edu1 = {
    instituteName: "SGGSIE&T,Nanded",
    degree: "B.Tech",
    yearOfPassing: "2016-2013"
};
var work1 = {
    companyName: "IBM",
    Position: "Software Engineer",
    location: "Delhi-NCR",
    experience: "2 Years"
};
userOne.setEducations([edu1]);
userOne.setWorks([work1]);
var fam1 = {
    Name: "Ahtesham",
    relation: "Brother"
};
userOne.setFamilies([fam1]);
console.log("Data of Facebook Page Class");
console.log(userOne);
console.log("--------------------------------");
