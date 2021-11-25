function nanban_calc() {
	let pre_npc_eu_amount = parseInt(document.getElementById("pre_npc_eu_amount").value);
	let pre_ea_amount = parseInt(document.getElementById("pre_ea_amount").value);
	let max_cargo = parseInt(document.getElementById("max_cargo").value);
	let post_npc_eu_amount = pre_npc_eu_amount / (pre_ea_amount / (max_cargo / 3));
	let result_string = "You should trade " + post_npc_eu_amount.toFixed() + " EU goods.";
	if (post_npc_eu_amount > pre_npc_eu_amount) {
		result_string += " Add " + (post_npc_eu_amount - pre_npc_eu_amount).toFixed() + " EU goods to get full cargo.";
	}
	if (post_npc_eu_amount < pre_npc_eu_amount) {
		result_string += " You may save " + (pre_npc_eu_amount - post_npc_eu_amount).toFixed() + " units before the trade.";
	}
	document.getElementById("result").innerText = result_string;
}
