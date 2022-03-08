let blogs = []

function addBlog(event){

    event.preventDefault()

    let projectName = document.getElementById('input-blog-projectname').value;
    let startDate = document.getElementById('input-blog-startdate').value;
    let endDate = document.getElementById('input-blog-enddate').value;
    let description = document.getElementById('input-blog-content').value;
    let checkbox = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(item => item.value);
    let image = document.getElementById('input-blog-image');
    image = URL.createObjectURL(image.files[0]);

    

    //console.log(checkbox);

    let blog = {
        projectName,
        startDate,
        endDate,
        description,
        checkbox,
        image,
        postedAt: new Date()
    }

    blogs.push(blog)
    
    renderBlog()
}

function renderBlog() {

    let blogContainer = document.getElementById('contents')

    blogContainer.innerHTML = `
    <div class="blog-list-item">
    <div class="blog-image">
      <img src="assets/img/img4.jpg" alt="" />
    </div>
    <div class="blog-content">
      <h3>
        <a href="blog-detail.html" target="_blank"
          >Dumbways Mobile App-2022</a>
      </h3>
      <div class="detail-blog-content">
        durasi : 1 bulan
      </div>
      <div class="description">
      <p>
        Ketimpangan sumber daya manusia (SDM) di sektor digital masih
        menjadi isu yang belum terpecahkan.
      </p>
      </div>
      <div class="blog-logo-content">
        <a href="" style="color: black;"><i class="fab fa-google-play"></i></a>
        <a href="" style="color: black;"><i class="fas fa-desktop"></i></a>
        <a href="" style="color: black;"><i class="fas fa-biohazard"></i></a>
        <a href="" style="color: black;"><i class="fab fa-react"></i></a>
      </div>
      <div class="btn-group">
        <button class="btn-edit">Edit</button>
        <button class="btn-post">Delete</button>
      </div>
    </div>
  </div>
    `

    for(let i = 0; i < blogs.length; i++){
        blogContainer.innerHTML += `
        <div class="blog-list-item">
            <div class="blog-image">
            <img src="${blogs[i].image}" alt="" />
            </div>
            <div class="blog-content">
            <h3>
                <a href="blog-detail.html" target="_blank"
                >${blogs[i].projectName}</a>
            </h3>
            <div class="detail-blog-content">
                durasi : ${getDistanceTime(blogs[i].startDate, blogs[i].endDate)}
            </div>
            <div class="description">
            <p>
                ${blogs[i].description}
            </p>
            </div>
            <div class="blog-logo-content">
                <a href="" style="color: black;"><i class="${blogs[i].checkbox[0]}"></i></a>
                <a href="" style="color: black;"><i class="${blogs[i].checkbox[1]}"></i></a>
                <a href="" style="color: black;"><i class="${blogs[i].checkbox[2]}"></i></a>
                <a href="" style="color: black;"><i class="${blogs[i].checkbox[3]}"></i></a>
            </div>
            <div class="btn-group">
                <button class="btn-edit">Edit</button>
                <button class="btn-post">Delete</button>
            </div>
            </div>
        </div>`
    }
}

let month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

function getFullTime(time) {
  let date = time.getDate()
  let monthIndex = time.getMonth()
  let year = time.getFullYear()

  let hour = time.getHours()
  let minute = time.getMinutes()

  let fullTime = `${date} ${month[monthIndex]} ${year} ${hour}:${minute} WIB`

  return fullTime
}

//function getDistanceTime(time) {
//  let timeNow = new Date()
//  let timeBlog = new Date(time)

//  let distance = timeNow - timeBlog // miliseconds

//  let dayDistance = Math.floor(distance / (24 * 60 * 60 * 1000))

//  if(dayDistance != 0){
//    return dayDistance + ' day ago'
//  }else {
//    let hourDistance = Math.floor(distance / (60 * 60 * 1000))
    
//    if(hourDistance != 0) {
//      return hourDistance + ' hours ago'
//    }else {
//      let minuteDistance = Math.floor(distance / (60 * 1000))

//      if(minuteDistance != 0){
//        return minuteDistance + ' minutes ago'
//      } else {
//        let secondsDistance = Math.floor(distance / 1000)

//        return secondsDistance + ' second ago'
//      }
//    }
//  }
//}

//setInterval(function(){
//  renderBlog()
//}, 1000)

function getDistanceTime(start, end) {
  let timeStart = new Date(start)
  let timeEnd = new Date(end)

  let distance = timeEnd - timeStart // miliseconds
  //console.log(distance)

  let dayDistance = Math.floor(distance / ( 365 * 24 * 60 * 60 * 1000))
  //console.log(dayDistance)

  if(dayDistance != 0){
    return dayDistance + ' year'
  }else {
    let monthDistance = Math.floor(distance / ( 31 * 24 * 60 * 60 * 1000))
    
    if(monthDistance != 0) {
      return monthDistance + ' month'
    }else {
      let weekDistance = Math.floor(distance / (7 * 24 * 60 * 60 * 1000))

      if(weekDistance != 0){
        return weekDistance + ' week'
      }else{
        let dayDistance = Math.floor(distance / ( 24 * 60 * 60 * 1000 ))

        if(dayDistance != 0){
          return dayDistance + ' day'
        }
      }
    }
  }
}

//function durationMonth(start, end) { 
//  const startDate = new Date(start) ;
//  const endDate = new Date(end) ;

//  const total_months = (endDate.getFullYear() - startDate.getFullYear())*12 + (endDate.getMonth() - startDate.getMonth()) ;
//  return total_months ; 

//}

var dateStart = new Date('2014-04-03');
var dateEnd = new Date('2014-08-03');
document.getElementById("startDate").innerHTML = dateStart.toDateString() ; 
document.getElementById("endDate").innerHTML = dateEnd.toDateString() ; 

const total_months =(dateEnd.getMonth() - dateStart.getMonth()) 

document.getElementById("tampil").innerHTML = total_months ; 


//dari mentor mas jody pengambilan value dan menampilkan checkbox
//let nodeJs = document.getElementById('nodejs-box').value

//let tech = " "

//if (nodeJs == true){
//    tech += '<img src="assets/nodejs.png" >'
//}
//if (reactJs == true){
//    tech += '<img src="assets/reactjs.png" >'
//}
//if (typescript == true){
//    tech += '<img src="assets/typescript.png" >'
//}
