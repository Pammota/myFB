var database = [
	{
		username: "pammotaru",
		password: "mata123"
	},
	{
		username: "Bobby",
		password: "mata1234"
	},
	{
		username: "Sally",
		password: "mata12345"
	},
	{
		username: "Booby",
		password: "mata123456"
	},
	{
		username: "1",
		password: "2"
	},
	{
		username: "B00b",
		password: "mata123456"
	},
	{
		username: "yeeahboyus",
		password: "mata123456"
	},
];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "Ghita ma asteapta la portita"
	},

	{
		username: "Sally",
		timeline: "Javascript is gay"
	},
	{
		username: "Booby",
		timeline: "Ionut dau mana"
	},
	{
		username: "B00b",
		timeline: "Tatze"
	},
	{
		username: "yeeahboyus",
		timeline: "Stau in dimitrie cantemir"
	},
];

  var userNamePrompt = prompt("Username:");
  var passwdPrompt = prompt("Password:")

function signIn(user, pass){
	for(let i = 0;i<database.length;i++){
		if((user === database[i].username) && (pass === database[i].password))
			return true;
	}	
	return false;
}


function newsFeedShower() {
	const para = [], node = [], element = [];
	for(let i=0; i<newsFeed.length;i++){
		//nametag
		para[i] =  document.createElement("div");
		node[i] = document.createTextNode(newsFeed[i].username);
		para[i].appendChild(node[i]);
		element[i] = document.getElementById("news-feed");
		element[i].appendChild(para[i]);
		para[i].classList.add("animated");
		para[i].classList.add("feed1");

		//comment
		para[i] =  document.createElement("div");
		node[i] = document.createTextNode(newsFeed[i].timeline);
		para[i].appendChild(node[i]);
		element[i] = document.getElementById("news-feed");
		element[i].appendChild(para[i]);
		para[i].classList.add("animated");
		para[i].classList.add("feed2");
	}
}

function newElemShower(usern,timel)
{
	const para=  document.createElement("div");
	const node= document.createTextNode(usern);
	para.appendChild(node);
	const element = document.getElementById("news-feed");
	element.appendChild(para);
	para.classList.add("animated");
	para.classList.add("feed1");

	//comment
	const para2 =  document.createElement("div");
	const node2 = document.createTextNode(timel);
	para2.appendChild(node2);
	const element2 = document.getElementById("news-feed");
	element2.appendChild(para2);
	para2.classList.add("animated");
	para2.classList.add("feed2");
}

function signerInner(user,pass){
	if(signIn(user,pass) === true)
	{
		const currentUser = user;
		alert("Succesful Sign In. Welcome!")

		document.getElementById('commbutton').onclick = function() {
			var newcom = {
				username:currentUser,
				timeline:prompt("Write a comment, "+ currentUser),
				}
			if(newcom.timeline !== null){
	   			newsFeed.push(newcom);
	   			const lenOfFeed = newsFeed.length - 1;
	   			newElemShower(newsFeed[lenOfFeed].username,newsFeed[lenOfFeed].timeline);
	   		} else alert("No comment was posted.");
		}

		newsFeedShower();
	}
		else
	{
		alert("Wrong username or password. Try again!")
		location=location;
	}

}

  signerInner(userNamePrompt,passwdPrompt);
