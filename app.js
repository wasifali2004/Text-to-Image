const token = ""
const Inputtxt = document.querySelector("#inp");
const btn = document.querySelector(".btn")
const img = document.querySelector(".Image");

async function query(data) {
	img.src = "/loading-16065.gif";
	
	const response = await fetch(
		"https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
		{
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({"inputs":Inputtxt.value}),
		}
	);
	const result = await response.blob();
	return result;
}

btn.addEventListener("click",	async function () {
	query().then((response) => {
		const objecturl = URL.createObjectURL(response)
		img.src = objecturl
	});
})

