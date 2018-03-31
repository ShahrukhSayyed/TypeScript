
/* =========================== */

//class definition for Facebook Class

class Facebook{
    
    educations : object []
    works : object []
        
    //Basic Info
    name : string
    birthday : string
    gender : string
    interestedIn : string
    languages : string []
    relegiousViews :string
    relationship :string
    about : string
    quote : string
    address : string
    contact : number
    facebookId : string

    families : object []    

    //OtherInfo
    places : string[]
    friends : object []
    photos : object []
    Videos :object []
    checkIns : object []
    music : object[]
    movies : object[]
    tvShows : object[]
    books : object[]
    likes : object[]
    events : object[]
    groups : object []

    constructor(name : string,birthday : string,gender : string,interestedIn : string,languages : string [],
        relegiousViews :string,relationship :string,
        about : string,quote : string,address : string,contact : number,facebookId : string)
    {
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.interestedIn = interestedIn;
        this.relegiousViews = relegiousViews;
        this.relationship = relationship;
        this.quote = quote;
        this.about = about;
        this.address = address
        this.contact = contact
        this.facebookId = facebookId
    }

    setOtherInfo = (places : string[],friends : object [],photos : object [],Videos :object [],
        checkIns : object [],music : object[],movies : object[],tvShows : object[],books : object[],
        likes : object[],events : object[],groups : object []) => {
            
        this.places = places
        this.friends = friends
        this.photos =photos
        this.Videos = Videos
        this.checkIns = checkIns
        this.music = music
        this.movies = movies
        this.tvShows = tvShows
        this.books = books
        this.likes = likes
        this.events = events
        this.groups = groups
    }

    getFamiliy = () =>{
        return this.families
    }

    setFamilies = (families : object []) =>{
        this.families = families
    }

    getEducations = () =>{
        return this.educations
    }

    setEducations = (educations : object []) =>{
        this.educations = educations
    }

    setWorks = (works : object []) =>{
        this.works = works
    }

    getWorks = () =>{
        return this.works
    }

    getAge = (dateString) => {
            let today = new Date();
            let birthDate = new Date(dateString);
            let age = today.getFullYear() - birthDate.getFullYear();
            let m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age
        }
               
}//end of class

//objects creation

//object one
let userOne = new Facebook("Shahrukh","08/08/1994","Male","Female",["Urdu","English","Hindi"],"Humanity",
"Single","Life is beutiful", "Great minds think alone","Jalna-Maharashtra",7840962887,"srk.Sayyed");


let edu1 = {
    instituteName : "SGGSIE&T,Nanded",
    degree : "B.Tech",
    yearOfPassing:"2016-2013"
}

let work1 = {
    companyName :"IBM",
    Position: "Software Engineer",
    location : "Delhi-NCR",
    experience :"2 Years"
}

userOne.setEducations([edu1])
userOne.setWorks([work1])


let fam1 = {
    Name : "Ahtesham",
    relation : "Brother"    
}
userOne.setFamilies([fam1])

console.log("Data of Facebook Page Class")
console.log(userOne)
console.log("--------------------------------")

