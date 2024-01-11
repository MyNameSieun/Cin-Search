
const options = {
  method: 'GET',
  headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmZmYWFjOWE4NmE4OTk4ZDQ3MGJhZjAyYzk3NDc2YiIsInN1YiI6IjY1OWE1NTc3ODc0MWM0MDFmZTZlNGJiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eiraCaCkjB-fQf9bKnbC3Fc5enxSPa6T44qx_J4Jmww'
  }
};

let url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
fetch(url, options).then(response => response.json()).then(function (data) {
   const movies=data.results;
   console.log(movies[0])
   return movieProperty(movies[0])});
//연결되면 삭제될 부분. 시험용으로 들어갔습니다.

const detailtitle = document.querySelector("#movieDetailInformation");
const commenttitle = document.querySelector("#movieComment");
const detailcontainer = document.querySelector(".detailed-container");

const movieProperty = (selectedMovie) => {
  const {title, tagline, overview, constructor_company} = selectedMovie;
  document.querySelector(".movieTitle").textContent=title;
  document.querySelector(".movieTagLine").textContent=tagline;
  document.querySelector(".movieOverView").textContent=overview;
  if (selectedMovie.hasOwnProperty("constructor_company")===true) {
    if (constructor_company.length===1){
    document.querySelector(".movieMadeCompany").textContent=constructor_company[0];}
    else {
      const otherCompany = constructor_company.length-1
      document.querySelector(".movieMadeCompany").textContent=`${constructor_company[0]} 외 ${otherCompany}`;}}}
//상세내용 넣기

detailtitle.addEventListener('click', (event) => {
  event.preventDefault();
  detailcontainer.style.display = "block";
}); //없거나 보이지 않은 경우 보이게 한다.

commenttitle.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector(".comment").style.display = "none"
  detailcontainer.style.display = "none";
});//여기에 다른 섹션 추가할 예정입니다.
