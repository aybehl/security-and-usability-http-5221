/*LAB 1-2: JAVASCRIPT CLASSES*/
//FAVE FRIEND CLASS
class Friend {
	name;
	phoneNumber;
	constructor(name, phoneNumber){
		this.name = name;
		this.phoneNumber = phoneNumber;
	}
}

window.onload = function(){
	var faveThree = [];//FAVE 3 ARRAY

	let formHandle = document.forms.fave_form;
	let faveBlock = document.getElementById('faveBlock');
	let faveList = document.getElementById('faveList');
	formHandle.onsubmit = processForm;

	function processForm(){
		console.log("form submitted");
		let name, phoneNumber;
		let isFriendInfoAdded = false;

		if(formHandle.name1.value != '' && formHandle.phone2.value != ''){
			isFriendInfoAdded = true;
			console.log(formHandle.name1.value);
			console.log(formHandle.phone1.value);
			name = formHandle.name1.value;
			phoneNumber = formHandle.name1.value;
			let friend1 = new Friend(name, phoneNumber);
			faveThree.push(friend1);
		}

		if(formHandle.name2.value != '' && formHandle.phone2.value != ''){
			isFriendInfoAdded = true;
			console.log(formHandle.name2.value);
			console.log(formHandle.phone2.value);
			name = formHandle.name2.value;
			phoneNumber = formHandle.name2.value;
			let friend2 = new Friend(name, phoneNumber);
			faveThree.push(friend2);
		}

		if(formHandle.name3.value != '' && formHandle.phone3.value != ''){
			isFriendInfoAdded = true;
			console.log(formHandle.name3.value);
			console.log(formHandle.phone3.value);
			name = formHandle.name3.value;
			phoneNumber = formHandle.name3.value;
			let friend3 = new Friend(name, phoneNumber);
			faveThree.push(friend3);
		}

		if(isFriendInfoAdded){
			formHandle.style.display = 'none';
			faveBlock.style.display = 'block';

			faveThree.forEach(friendObj => {
				faveList.innerHTML += `<li>${friendObj.name}</li>`;
			});

		}

		return false;
	}

}//END OF onload FUNCTION