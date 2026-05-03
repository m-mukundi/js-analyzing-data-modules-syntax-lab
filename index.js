function combineUsers(...args) {
	const combinedObject = { users: [] };

	args.forEach((element) => {
		combinedObject.users.push(...element);
	});

	const now = new Date();
	combinedObject.merge_date = now.toLocaleDateString("en-US", {
		month: "numeric",
		day: "numeric",
		year: "numeric",
	});

	return combinedObject;
}

module.exports = {
	...(typeof combineUsers !== "undefined" && { combineUsers }),
};
