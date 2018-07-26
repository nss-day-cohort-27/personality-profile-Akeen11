const myProfile = {
    general: [
        {
            title: "Statements I Agree With",
            items: [
                "Very Argumentative – If there’s anything Debaters enjoy, it’s the mental exercise of debating an idea, and nothing is sacred. More consensus-oriented personality types rarely appreciate the vigor with which Debater personalities tear down their beliefs and methods, leading to a great deal of tension.",
                "Energetic – When given a chance to combine these traits to examine an interesting problem, Debaters can be truly impressive in their enthusiasm and energy, having no qualms with putting in long days and nights to find a solution.",
                "Can Find It Difficult to Focus – The same flexibility that allows Debaters to come up with such original plans and ideas makes them readapt perfectly good ones far too often, or to even drop them entirely as the initial excitement wanes and newer thoughts come along. Boredom comes too easily for Debaters, and fresh thoughts are the solution, though not always a helpful one."
            ]
        },
        {
            title: "Statements I Disagree With",
            items: [
                "Original – Having little attachment to tradition, Debater personalities are able to discard existing systems and methods and pull together disparate ideas from their extensive knowledge base, with a little raw creativity to hold them together, to formulate bold new ideas. If presented with chronic, systemic problems and given rein to solve them, Debaters respond with unabashed glee.",
                "Charismatic – People with the Debater personality type have a way with words and wit that others find intriguing. Their confidence, quick thought and ability to connect disparate ideas in novel ways create a style of communication that is charming, even entertaining, and informative at the same time.",
                "Excellent Brainstormers – Nothing is quite as enjoyable to Debaters as analyzing problems from every angle to find the best solutions. Combining their knowledge and originality to splay out every aspect of the subject at hand, rejecting without remorse options that don’t work and presenting ever more possibilities, Debaters are irreplaceable in brainstorming sessions."
            ]
        },
    ],
}


function setData(tag, object){
    let stringified = JSON.stringify(object);
    localStorage.setItem(tag, stringified);
}

setData("My Profile", myProfile);


