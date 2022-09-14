const button = document.querySelector("#btn");
const par = document.querySelector("#par");

const quotes = [
    "« Il faut donner du temps au temps. » - Miguel de Cervantès",
    "« Un homme déshonoré est pire qu’un homme mort. »  — Miguel de Cervantès",
    "« Il faut savoir douter où il faut, se soumettre où il faut, croire où il faut. » — Blaise Pascal",
    "« La justice sans la force est impuissante, la force sans la justice est tyrannique. »  — Blaise Pascal",
    "« La justice est la sanction des injustices établies. » - Anatole France",
    "« Le coeur a ses raisons que la raison ne connaît point. »  — Blaise Pascal",
    "« L’homme est un roseau, le plus faible de la nature, mais c’est un roseau pensant. »  — Blaise Pascal",
    "« Pour réussir sa vie, un homme doit faire un enfant, écrire un livre et planter un arbre. » - Compay Segundo",
    "« Même si le vieil arbre a l'air d'avoir séché sous le soleil, il en sait plus que la pousse du matin, alors confie-lui ton destin. » - Dominique Sylvain",
    "« Le singe épargné par les crocodiles oublie trop vite que l'hippopotame lui a prêté son dos pour quitter la rivière. » - Dominique Sylvain",
    "« Aimer, ce n’est pas se regarder l’un l’autre, c’est regarder ensemble dans la même direction. » - Antoine de Saint-Exupéry",
    "« La vérité, ce n'est point ce qui se démontre, c'est ce qui simplifie. » - Antoine de Saint-Exupéry",
    "« Même sans espoir, la lutte est encore un espoir. » -  Romain Rolland",
    "« Si l’espoir fait vivre, ceux qui vivent d’espoir meurent de faim. » - Arsenic",
    "« L'espoir est une mémoire qui désire. » - Honoré de Balzac",
    "« Vivre sans espoir, c’est cesser de vivre. » - Fiodor Dostoïevski",
    "« L'échec fait partie intégrante de notre réussite. L'échec, c'est l'envers de la réussite. » - Adonis ",
    "« L'échec est le fondement de la réussite. » - Lao-Tseu",
    "« Le secret de la réussite avec un enfant c'est de ne pas être ses parents. » - Louis Latzarus",
    "« La réussite, ce n'est jamais qu'une histoire de chance. Demandez à un raté. » - Earl Joseph Wilson",
    "« La réussite, pour certains, consiste à se faire connaître, pour d'autres, au contraire, il s'agit de ne jamais être découvert. » - Ashleigh Brillant",
    "« Si vous voulez réussir, il faut ouvrir de nouvelles voies et éviter les chemins empruntés par les promesses de réussite. » - John Rockefeller",
    "« L'art de la réussite consiste à savoir s'entourer des meilleurs. » - John Fitzgerald Kennedy",
    "« La réussite, c'est d'abord et surtout d'être au travail quand les autres vont à la pêche. » - Philippe Bouvard",
    "« La patience a beaucoup plus de pouvoir que la force. » - Plutarque",
    "« On a besoin de patience avec tout le monde, mais particulièrement avec soi-même. » - Saint François de Sales",
    "« La patience rend plus léger les maux que l’on ne peut guérir. » - Guillaume de Chaulieu",
    "« La vie est un voyage en parachute. » - Vicente Huidobro",
    "« Un voyage de mille lieues a commencé par un pas. » - Proverbe chinois",
    "« Le plus beau voyage, c'est celui qu'on n’a pas encore fait. » - Loïck Peyron",
    "« Veux-tu vivre heureux ? Voyage avec deux sacs, l'un pour donner, l'autre pour recevoir. » - Guillaume de Chaulieu",
    "« Le bateau qui ne résiste pas à la première tempête n'est pas fait pour le voyage. » - Moses Isegawa",
    "« Celui-là a eu du courage, qui a été le premier à manger une huître. » - Jonathan Swift",
    "« Les folies sont les seules choses qu’on ne regrette jamais. » - Oscar Wilde",
    "« Il y a deux tragédies dans la vie : l’une est de ne pas satisfaire son désir et l’autre de le satisfaire. » - Oscar Wilde",
    "« Quand les dieux veulent nous punir, ils exaucent nos prières. » - Oscar Wilde",
    "« On ne voit bien qu’avec le coeur. L’essentiel est invisible pour les yeux. » - Antoine de Saint-Exupéry",
    "« Les vrais miracles font peu de bruit. » - Antoine de Saint-Exupéry",
]

button.addEventListener("click", () => {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = "block";
    par.textContent = randomQuote;
})