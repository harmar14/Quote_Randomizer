function start() {
	let res_msg = document.createElement('div');
	res_msg.innerHTML = "Hello! Send me 'q' to get a random quote or 'h' to get it with an author.";
	res_msg.setAttribute("class", "left");
	document.getElementById('message_area').appendChild(res_msg);
}
document.getElementById('send').addEventListener("click", async (e) => {
	e.preventDefault();
	var req = document.getElementById('text').value;
	if (req == undefined || req == "") {
		
	} else {
		let res = "";
		await axios.get('https://zenquotes.io/api/random').then(data => {
			if (req == 'h') {
				res = JSON.stringify(JSON.parse(JSON.stringify(data.data).slice(1,-1)).h);
			} else if (req == 'q') {
				res = JSON.stringify(JSON.parse(JSON.stringify(data.data).slice(1,-1)).q);
			} else if (req == "help") {
				res = "_Send me 'q' to get a random quote or 'h' to get it with an author._";
			} else if (req == "Who are you?") {
				res = "_Oh, so you're interested? I'm just a soulless bot... Hey, let's get some random quotes! I'm waiting for your command :)_";
			} else if (["hi", "hello"].includes(req)) {
				res = "_Sup. Want a quote? Give me a command._";
			} else {
				res = "_Oops, you provided an unknown command. Send me 'help' to get a command list._";
			}
		});
		let msg_req = document.createElement('div');
		let msg_res = document.createElement('div');
		let con1 = document.createElement('div');
		let con2 = document.createElement('div');
		con1.setAttribute("class", "msgCon1");
		con2.setAttribute("class", "msgCon2");
		msg_req.innerHTML = req;
		msg_res.innerHTML = res.slice(1,-1);
		msg_req.setAttribute("class", "right");
		msg_res.setAttribute("class", "left");
		let message = document.getElementById('message_area');
		message.appendChild(con1);
		message.appendChild(con2);
		con1.appendChild(msg_req);
		con2.appendChild(msg_res);
		document.getElementById('text').value = "";
		function scroll() {
			var scrollMsg = document.getElementById('message_area');
			scrollMsg.scrollTop = scrollMsg.scrollHeight;
		}
		scroll();
	}
});