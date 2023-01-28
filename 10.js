const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

 const nomalize = (lesson) => {
    letresult = "";
    lesson.name = capitalize(lesson.name);
    lesson.descprition = lesson.descprition.toLowerCase();
    return lesson;
}

let lesson = {
    name: "амОГуС",
    descprition: "АБОБУС",
};
console.log(nomalize(lesson));

export default capitalize;