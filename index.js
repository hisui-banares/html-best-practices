import fs from "fs/promises";
import mustache from "mustache";

const languages = ["en", "ja", "ko", "tr"];

const readJSONFile = async (file) => {
	const content = await fs.readFile(file, "utf8");
	return JSON.parse(content);
};

const extendPractice = async (language, practice) => {
	const content = await fs.readFile(`./src/${practice}/${language}.md`, "utf8");
	const [title, ...body] = content.split("\n");
	return {
		body: body.join("\n").trim(),
		id: practice,
		title: title.trim().replace(/^# /, "")
	};
};

const extendSection = async (language, extradata, section, index) => {
	const practices = await Promise.all(section.practices.map(extendPractice.bind(null, language)));
	return {
		...section,
		...extradata.sections[index],
		practices: practices
	};
};

const build = async (template, data, language) => {
	const extradata = await readJSONFile(`./src/${language}.json`);
	const sections = await Promise.all(data.sections.map(extendSection.bind(null, language, extradata)));
	const rendered = mustache.render(template, {
		...data,
		...extradata,
		sections: sections
	});

	if (language === "en") {
		await fs.writeFile("README.md", rendered);
		return;
	}

	await fs.writeFile(`README.${language}.md`, rendered);
};

const main = async () => {
	const [template, data] = await Promise.all([
		fs.readFile("./src/template.mustache", "utf8"),
		readJSONFile("./src/data.json")
	]);
	await Promise.all(languages.map(build.bind(null, template, data)));
};

main().catch((e) => {
	console.trace(e);
	process.exitCode = 1;
});