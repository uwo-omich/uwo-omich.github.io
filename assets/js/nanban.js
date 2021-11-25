function nanban_calc() {
	let pre_npc_eu_amount = parseInt(document.getElementById("pre_npc_eu_amount").value);
	let pre_ea_amount = parseInt(document.getElementById("pre_ea_amount").value);
	let max_cargo = parseInt(document.getElementById("max_cargo").value);
	let post_npc_eu_amount = pre_npc_eu_amount / (pre_ea_amount / (max_cargo / 3));
	document.getElementById("result").value = "You should trade " + post_npc_eu_amount + " EA items";
}
