//Create count in the database
if(localStorage.getItem("count")==null){
localStorage.setItem("count",0)
}

//update html to search count
function update() {
	document.getElementById("count").innerHTML = localStorage.getItem("count")
}

update()

//add one to count
function plusOne(){
	localStorage.setItem("count",Number(localStorage.getItem("count"))+1)
	update()
}

//reset counter to zero
function reset(){
	if(confirm("Are you sure you want to reset to zero?")){
		localStorage.setItem("count",0)
		update()
	}

		

}