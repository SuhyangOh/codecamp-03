function solution(n, arr1, arr2) {
	var answer = [];
	var temp;
	var temp2;
	for (let i = 0; i < n; i++) {
		temp = [];
		var th = arr1[i];
		var p = n - 1;
		for (let j = 0; j < n; j++) {
			if (th >= Math.pow(2, p)) {
				temp.push("#");
				th -= Math.pow(2, p);
			} else {
				temp.push(" ");
			}
			p--;
		}
		temp2 = [];
		var th = arr2[i];
		var p = n - 1;
		for (let j = 0; j < n; j++) {
			if (th >= Math.pow(2, p)) {
				temp2.push("#");
				th -= Math.pow(2, p);
			} else {
				temp2.push(" ");
			}
			p--;
		}
		var r = "";
		for (let j = 0; j < n; j++) {
			if (temp[j] === "#") {
				r += "#";
			} else if (temp2[j] === "#") {
				r += "#";
			} else {
				r += " ";
			}
		}
		answer.push(r);
	}
	return answer;
}
