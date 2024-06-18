function bmiCheck() {
	let nameBox = document.bmiForm.name;
	let heightBox = document.bmiForm.height;
	let weightBox = document.bmiForm.weight;
	let photoBox = document.bmiForm.photo;

	if (isEmpty(nameBox) || atLeastLetter(nameBox, 2)) {
		alert("빈칸 X");
		nameBox.value = "";
		nameBox.focus();
		return false;
	} else if (isEmpty(heightBox) || isNotNumber(heightBox)
		|| atLeastLetter(heightBox, 3)) {
		alert("키 제대로 입력")
		heightBox.value = "";
		heightBox.focus();
		return false;
	} else if (isEmpty(weightBox) || isNotNumber(weightBox)
	) {
		alert("몸무게 제대로 입력")
		weightBox.value = "";
		weightBox.focus();
		return false;
	} else if (isEmpty(photoBox) ||
		(isNotType(photoBox, "png") &&
			isNotType(photoBox, "gif") &&
			isNotType(photoBox, "jpg") &&
			isNotType(photoBox, "bmp"))) {
		alert("사진 형식 제대로")
		photoBox.value = "";
		photoBox.focus();
		return false;
	}
	return true;
}

