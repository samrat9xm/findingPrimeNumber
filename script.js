function check() {
	let n = Number(document.getElementById("demo1").value); //get value from user
	let p = Number(document.getElementById("demo2").value); //get value from user
	let doo = n;
	let poo = p;
	let text = "";
	let sam = "";
	var count = 0;
	var m = 0;

	if (n > p) {
		let c, d;
		c = n;
		d = p;
		p = c;
		n = d;
	}
	if (n == 0) {
		alert("please fill the box with non zero number");
		location.reload();
	} else {
		for (var i = p; i > n - 1; i--) {
			for (var j = p; j > 0; j--) {
				if (p % j == 0) {
					if (j == 1) {
						text += j;
						m = text.split(",").length;
						if (m >= 3) {
							text = "";
							p--;
							break;
						} else if (m == 2) {
							sam += p + ",";
							p--;
							text = "";
							count++;
							break;
						}
					}
					text += j + ",";
				}
			}
		}
		sam = sam.split(",");
		sam.pop();
		sam.reverse();
		document.getElementById("demo3").innerHTML =
			"<b><span>" +
			doo +
			"</span></b>" +
			" & <b><span>" +
			poo +
			"</span></b> এর মধ্যে মৌলিক সংখ্যাগুলো হলো : <b>" +
			sam +
			"</b>";

		document.getElementById("leng").innerHTML =
			"এবং মোট মৌলিক সংখ্যা <b><span>" + count + "</span></b> টি।";
	}
}
