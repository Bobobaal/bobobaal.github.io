/* jshint -W078 */
class Episode {
    constructor(showTitle, season, eNr, eTitle, seen) {
        this.showTitle = showTitle;
        this.season = season;
        this.eNr = eNr;
        this.eTitle = eTitle;
        this.seen = seen;
    }

    get showTitle() {
        return this._showTitle;
    }
    set showTitle(value) {
        this._showTitle = value;
    }

    get season() {
        return this._season;
    }
    set season(value) {
        this._season = value;
    }

    get eNr() {
        return this._eNr;
    }
    set eNr(value) {
        this._eNr = value;
    }

    get eTitle() {
        return this._eTitle;
    }
    set eTitle(value) {
        this._eTitle = value;
    }

    get seen() {
        return this._seen;
    }
    set seen(value) {
        this._seen = value;
    }
}

class TableCreater {
    constructor(collapse, table, iterator) {
        this.collapse = collapse;
        this.table = table;
        this.iterator = iterator;
        this._table.setAttribute("class", "table table-hover");
        this.thead = document.createElement("thead");
        this.trhead = document.createElement("tr");
        this.tbody = document.createElement("tbody");
    }

    set collapse(value) {
        this._collapse = value;
    }

    set table(value) {
        this._table = value;
    }

    set iterator(value) {
        this._iterator = value;
    }

    set thead(value) {
        this._thead = value;
    }

    set trhead(value) {
        this._trhead = value;
    }

    set tbody(value) {
        this._tbody = value;
    }

    createHeader() {
        //Create multiple th elements with their respect text for in tr element
        const thHead1 = document.createElement("th");
        const thHead1Text = document.createTextNode("Show");
        thHead1.appendChild(thHead1Text);
        const thHead2 = document.createElement("th");
        const thHead2Text = document.createTextNode("Season #");
        thHead2.appendChild(thHead2Text);
        const thHead3 = document.createElement("th");
        const thHead3Text = document.createTextNode("Episode #");
        thHead3.appendChild(thHead3Text);
        const thHead4 = document.createElement("th");
        const thHead4Text = document.createTextNode("Title");
        thHead4.appendChild(thHead4Text);
        //Append th elements to tr
        this._trhead.appendChild(thHead1);
        this._trhead.appendChild(thHead2);
        this._trhead.appendChild(thHead3);
        this._trhead.appendChild(thHead4);
        //Append tr to thead
        this._thead.appendChild(this._trhead);
        //Append thead to table
        this._table.appendChild(this._thead);
    }

    createBody() {
        //Gives the collapse the correct color depending if I've seen all episodes in that collapse, not all of them or if I have seen none
        this.colorCollapse();

        //Fills the table with all the episodes
        this.fillTable();

        //Append tbody to the table when all tr's of the current collapse has been made and appended
        this._table.appendChild(this._tbody);

        //Appends the table in the collapse
        this._collapse.appendChild(this._table);
    }

    colorCollapse() {
        //If all the episodes in a single collapse are seen it will give the tbody the class seen and
        //the div to open the collapse will get the classes card and arrow (color green) -> marks everything seen without opening the collapse
        if (collapsesSeen[this._iterator - 1] === true) {
            this._tbody.setAttribute("class", "seen");
            this._collapse.parentElement.setAttribute("class", "card arrow");
            //If not all episodes are seen but I've seen some the div to open the collapse will get the classes card and flash (color yellow) -> marks that I'm watching it
        } else if (collapsesSeen[this._iterator - 1] === false && collapses[this._iterator - 1].reduce((result, episode) => result || episode.seen, false)) {
            this._collapse.parentElement.setAttribute("class", "card flash");
            //Div to open the collapse will get classes card and supergirl (color red) when I haven't seen any episode in that collapse
        } else {
            this._collapse.parentElement.setAttribute("class", "card supergirl");
        }
    }

    fillTable() {
        //Goes through every collapse and creates a single tr per episode and fills it in correctly
        //Also checks if I have watched all episodes of the current season of the shows in that collapse and fills in the class correctly
        for (let episode of collapses[this._iterator - 1]) {
            const tr = document.createElement("tr");
            if (episode.showTitle.toLowerCase() === "arrow") {
                tr.setAttribute("class", collapsesSeen[this._iterator - 1] === false && episode.seen === true ? "seen arrow" : "arrow");
            } else if (episode.showTitle.toLowerCase() === "the flash") {
                tr.setAttribute("class", collapsesSeen[this._iterator - 1] === false && episode.seen === true ? "seen flash" : "flash");
            } else if (episode.showTitle.toLowerCase() === "supergirl") {
                tr.setAttribute("class", collapsesSeen[this._iterator - 1] === false && episode.seen === true ? "seen supergirl" : "supergirl");
            } else if (episode.showTitle.toLowerCase() === "dc legends of tomorrow") {
                tr.setAttribute("class", collapsesSeen[this._iterator - 1] === false && episode.seen === true ? "seen legends" : "legends");
            } else {
                tr.setAttribute("class", collapsesSeen[this._iterator - 1] === false && episode.seen === true ? "seen batwoman" : "batwoman");
            }

            //Create all 4 td's per tr and fill them in correctly according to the thead
            const tdShowTitle = document.createElement("td");
            const showTitleText = document.createTextNode(episode.showTitle);
            tdShowTitle.appendChild(showTitleText);
            const tdSeasonNr = document.createElement("td");
            const seasonNrText = document.createTextNode(episode.season);
            tdSeasonNr.appendChild(seasonNrText);
            const tdEpisodeNr = document.createElement("td");
            const eNrText = document.createTextNode(episode.eNr);
            tdEpisodeNr.appendChild(eNrText);
            const tdTitle = document.createElement("td");
            const titleText = document.createTextNode(episode.eTitle);
            tdTitle.appendChild(titleText);

            //Append all td's in the tr
            tr.appendChild(tdShowTitle);
            tr.appendChild(tdSeasonNr);
            tr.appendChild(tdEpisodeNr);
            tr.appendChild(tdTitle);

            //Append tr to the tbody
            this._tbody.appendChild(tr);
        }
    }
}

const collapse1seen = true;
const collapse1 = [new Episode("Arrow", 1, 1, "Pilot", true),
    new Episode("Arrow", 1, 2, "Honor Thy Father", true),
    new Episode("Arrow", 1, 3, "Lone Gunmen", true),
    new Episode("Arrow", 1, 4, "An Innocent Man", true),
    new Episode("Arrow", 1, 5, "Damaged", true),
    new Episode("Arrow", 1, 6, "Legacies", true),
    new Episode("Arrow", 1, 7, "Muse Of Fire", true),
    new Episode("Arrow", 1, 8, "Vendetta", true),
    new Episode("Arrow", 1, 9, "Year's End", true),
    new Episode("Arrow", 1, 10, "Burned", true),
    new Episode("Arrow", 1, 11, "Trust But Verify", true),
    new Episode("Arrow", 1, 12, "Vertigo", true),
    new Episode("Arrow", 1, 13, "Betrayel", true),
    new Episode("Arrow", 1, 14, "The Odyssey", true),
    new Episode("Arrow", 1, 15, "Dodger", true),
    new Episode("Arrow", 1, 16, "Dead To Rights", true),
    new Episode("Arrow", 1, 17, "The Huntress Returns", true),
    new Episode("Arrow", 1, 18, "Salvation", true),
    new Episode("Arrow", 1, 19, "Unfinished Business", true),
    new Episode("Arrow", 1, 20, "Home Invasion", true),
    new Episode("Arrow", 1, 21, "The Undertaking", true),
    new Episode("Arrow", 1, 22, "Darkness On The Edge Of Town", true),
    new Episode("Arrow", 1, 23, "Sacrifice", true),
    new Episode("Arrow", 2, 1, "City of Heroes", true),
    new Episode("Arrow", 2, 2, "Identity", true),
    new Episode("Arrow", 2, 3, "Broken Dolls", true),
    new Episode("Arrow", 2, 4, "Crucible", true),
    new Episode("Arrow", 2, 5, "League Of Assassins", true),
    new Episode("Arrow", 2, 6, "Keep Your Enemies Closer", true),
    new Episode("Arrow", 2, 7, "State Vs. Queen", true),
    new Episode("Arrow", 2, 8, "The Scientist", true),
    new Episode("Arrow", 2, 9, "Three Ghosts", true),
    new Episode("Arrow", 2, 10, "Blast Radius", true),
    new Episode("Arrow", 2, 11, "Blind Spot", true),
    new Episode("Arrow", 2, 12, "Tremors", true),
    new Episode("Arrow", 2, 13, "Heir To The Demon", true),
    new Episode("Arrow", 2, 14, "Time Of Death", true),
    new Episode("Arrow", 2, 15, "The Promise", true),
    new Episode("Arrow", 2, 16, "Suicide Squad", true),
    new Episode("Arrow", 2, 17, "Birds Of Prey", true),
    new Episode("Arrow", 2, 18, "Deathstroke", true),
    new Episode("Arrow", 2, 19, "The Man Under The Hood", true),
    new Episode("Arrow", 2, 20, "Seeing Red", true),
    new Episode("Arrow", 2, 21, "City Of Blood", true),
    new Episode("Arrow", 2, 22, "Streets Of Fire", true),
    new Episode("Arrow", 2, 23, "Unthinkable", true)
];

const collapse2seen = true;
const collapse2 = [new Episode("Arrow", 3, 1, "The Calm", true),
    new Episode("Arrow", 3, 2, "Sara", true),
    new Episode("The Flash", 1, 1, "Pilot", true),
    new Episode("The Flash", 1, 2, "Fastest Man Alive", true),
    new Episode("The Flash", 1, 3, "Things You Can't Outrun", true),
    new Episode("Arrow", 3, 3, "Corto Maltese", true),
    new Episode("The Flash", 1, 4, "Going Rogue", true),
    new Episode("Arrow", 3, 4, "The Magician", true),
    new Episode("Arrow", 3, 5, "The Secret Origin Of Felicity Smoak", true),
    new Episode("The Flash", 1, 5, "Plastique", true),
    new Episode("Arrow", 3, 6, "Guilty", true),
    new Episode("The Flash", 1, 6, "The Flash Is Born", true),
    new Episode("Arrow", 3, 7, "Draw Back Your Bow", true),
    new Episode("The Flash", 1, 7, "Power Outage", true),
    new Episode("The Flash", 1, 8, "Flash Vs. Arrow", true),
    new Episode("Arrow", 3, 8, "The Brave And The Bold", true),
    new Episode("The Flash", 1, 9, "The Man In The Yellow Suit", true),
    new Episode("Arrow", 3, 9, "The Climb", true),
    new Episode("The Flash", 1, 10, "Revenge Of The Rogues", true),
    new Episode("Arrow", 3, 10, "Left Behind", true),
    new Episode("The Flash", 1, 11, "The Sounds And The Fury", true),
    new Episode("Arrow", 3, 11, "Midnight City", true),
    new Episode("The Flash", 1, 12, "Crazy For You", true),
    new Episode("Arrow", 3, 12, "Uprising", true),
    new Episode("The Flash", 1, 13, "The Nuclear Man", true),
    new Episode("The Flash", 1, 14, "Fallout", true),
    new Episode("Arrow", 3, 13, "Canaries", true),
    new Episode("Arrow", 3, 14, "The Return", true),
    new Episode("Arrow", 3, 15, "Nanda Parbat", true),
    new Episode("Arrow", 3, 16, "The Offer", true),
    new Episode("The Flash", 1, 15, "Out Of Time", true),
    new Episode("The Flash", 1, 16, "Rogue Time", true),
    new Episode("The Flash", 1, 17, "Tricksters", true),
    new Episode("Arrow", 3, 17, "Suicidal Tendencies", true),
    new Episode("The Flash", 1, 18, "All Star Team Up", true),
    new Episode("Arrow", 3, 18, "Public Enemy", true),
    new Episode("Arrow", 3, 19, "Broken Arrow", true),
    new Episode("Arrow", 3, 20, "The Fallen", true),
    new Episode("The Flash", 1, 19, "Who Is Harrison Wells", true),
    new Episode("The Flash", 1, 20, "The Trap", true),
    new Episode("The Flash", 1, 21, "Grodd Lives", true),
    new Episode("Arrow", 3, 21, "Al Sah-him", true),
    new Episode("Arrow", 3, 22, "This Is Your Sword", true),
    new Episode("The Flash", 1, 22, "Rogue Air", true),
    new Episode("Arrow", 3, 23, "My Name Is Oliver Queen", true),
    new Episode("The Flash", 1, 23, "Fast Enough", true)
];

const collapse3seen = true;
const collapse3 = [new Episode("Arrow", 4, 1, "Green Arrow", true),
    new Episode("The Flash", 2, 1, "The Man Who Saved Central City", true),
    new Episode("The Flash", 2, 2, "Flash Of Two Worlds", true),
    new Episode("Arrow", 4, 2, "The Candidate", true),
    new Episode("The Flash", 2, 3, "Family Of Rogues", true),
    new Episode("Arrow", 4, 3, "Restoration", true),
    new Episode("Arrow", 4, 4, "Beyond Redemption", true),
    new Episode("The Flash", 2, 4, "The Fury Of Firestorm", true),
    new Episode("The Flash", 2, 5, "The Darkness And The Light", true),
    new Episode("Arrow", 4, 5, "Haunted", true),
    new Episode("Arrow", 4, 6, "Lost Souls", true),
    new Episode("The Flash", 2, 6, "Enter Zoom", true),
    new Episode("Arrow", 4, 7, "Brotherhood", true),
    new Episode("The Flash", 2, 7, "Gorilla Warfare", true),
    new Episode("The Flash", 2, 8, "Legends Of Today", true),
    new Episode("Arrow", 4, 8, "Legends Of Yesterday", true),
    new Episode("Arrow", 4, 9, "Dark Water", true),
    new Episode("Arrow", 4, 10, "Blood Debts", true),
    new Episode("The Flash", 2, 9, "Running To Stand Still", true),
    new Episode("The Flash", 2, 10, "Potential Energy", true),
    new Episode("DC Legends Of Tomorrow", 1, 1, "Pilot, Part 1", true),
    new Episode("DC Legends Of Tomorrow", 1, 2, "Pilot, Part 2", true),
    new Episode("DC Legends Of Tomorrow", 1, 3, "Blood Ties", true),
    new Episode("The Flash", 2, 11, "The Reverse-Flash Returns", true),
    new Episode("Arrow", 4, 11, "A.W.O.L", true),
    new Episode("The Flash", 2, 12, "Fast Lane", true),
    new Episode("Arrow", 4, 12, "Unchained", true),
    new Episode("Arrow", 4, 13, "Sins Of The Father", true),
    new Episode("The Flash", 2, 13, "Welcome To Earth-2", true),
    new Episode("The Flash", 2, 14, "Escape From Earth-2", true),
    new Episode("The Flash", 2, 15, "King Shark", true),
    new Episode("Supergirl", 1, 1, "Pilot", true),
    new Episode("Supergirl", 1, 2, "Stronger Together", true),
    new Episode("Supergirl", 1, 3, "Fight Or Flight", true),
    new Episode("Supergirl", 1, 5, "How Does She Do It?", true),
    new Episode("Supergirl", 1, 4, "Livewire", true),
    new Episode("Supergirl", 1, 6, "Red Faced", true),
    new Episode("Supergirl", 1, 7, "Human For A Day", true),
    new Episode("Supergirl", 1, 8, "Hostile Takeover", true),
    new Episode("Supergirl", 1, 9, "Blood Bonds", true),
    new Episode("Supergirl", 1, 10, "Childish Things", true),
    new Episode("Supergirl", 1, 11, "Strange Visitor From Another Planet", true),
    new Episode("Supergirl", 1, 12, "Bizarro", true),
    new Episode("Supergirl", 1, 13, "For The Girl Who Has Everything", true),
    new Episode("Supergirl", 1, 14, "Truth, Justice And The American Way", true),
    new Episode("Supergirl", 1, 15, "Solitude", true),
    new Episode("Supergirl", 1, 16, "Falling", true),
    new Episode("Supergirl", 1, 17, "Manhunter", true),
    new Episode("DC Legends Of Tomorrow", 1, 3, "White Knights", true),
    new Episode("DC Legends Of Tomorrow", 1, 4, "Fail-Safe", true),
    new Episode("DC Legends Of Tomorrow", 1, 5, "Star City 2046", true),
    new Episode("Arrow", 4, 6, "Legacies", true),
    new Episode("Arrow", 4, 7, "Muse Of Fire", true),
    new Episode("DC Legends Of Tomorrow", 1, 7, "Marooned", true),
    new Episode("DC Legends Of Tomorrow", 1, 8, "Night Of The Hawk", true),
    new Episode("DC Legends Of Tomorrow", 1, 9, "Left Behind", true),
    new Episode("The Flash", 2, 16, "Trajectory", true),
    new Episode("Arrow", 4, 16, "Broken Hearts", true),
    new Episode("The Flash", 2, 17, "Flash Back", true),
    new Episode("Arrow", 4, 17, "Beacon Of Hope", true),
    new Episode("Arrow", 4, 18, "Eleven-Fifty-Nine", true),
    new Episode("Arrow", 4, 19, "Canary Cry", true),
    new Episode("DC Legends Of Tomorrow", 1, 10, "Progeny", true),
    new Episode("Supergirl", 1, 18, "Worlds Finest", true),
    new Episode("The Flash", 1, 18, "Versus Zoom", true),
    new Episode("Supergirl", 1, 19, "Myriad", true),
    new Episode("Supergirl", 1, 20, "Better Angels", true),
    new Episode("Supergirl", 2, 1, "The Adventures Of Supergirl", true),
    new Episode("DC Legends Of Tomorrow", 1, 11, "The Magnificent Eight", true),
    new Episode("DC Legends Of Tomorrow", 1, 12, "Last Refuge", true),
    new Episode("The Flash", 2, 19, "Back To Normal", true),
    new Episode("Supergirl", 2, 2, "The Last Children Of Krypton", true),
    new Episode("Supergirl", 2, 3, "Welcome To Earth", true),
    new Episode("DC Legends Of Tomorrow", 1, 13, "Leviathan", true),
    new Episode("DC Legends Of Tomorrow", 1, 14, "River Of Time", true),
    new Episode("DC Legends Of Tomorrow", 1, 15, "Destiny", true),
    new Episode("Supergirl", 2, 4, "Survivors", true),
    new Episode("Arrow", 4, 20, "Genesis", true),
    new Episode("Arrow", 4, 21, "Monument Point", true),
    new Episode("Arrow", 4, 22, "Lost In The Flood", true),
    new Episode("Supergirl", 2, 5, "Crossfire", true),
    new Episode("DC Legends Of Tomorrow", 1, 16, "Legendary", true),
    new Episode("Arrow", 4, 23, "Schism", true),
    new Episode("The Flash", 2, 21, "Rupture", true),
    new Episode("The Flash", 2, 22, "The Runaway Dinosaur", true),
    new Episode("The Flash", 2, 23, "Invincible", true),
    new Episode("The Flash", 2, 23, "The Race Of His Life", true)
];

const collapse4seen = true;
const collapse4 = [new Episode("Supergirl", 2, 6, "Changing", true),
    new Episode("The Flash", 3, 1, "Flashpoint", true),
    new Episode("The Flash", 3, 2, "Paradox", true),
    new Episode("The Flash", 3, 2, "Magenta", true),
    new Episode("The Flash", 3, 3, "The New Rogues", true),
    new Episode("The Flash", 3, 4, "Monster", true),
    new Episode("The Flash", 3, 5, "Shade", true),
    new Episode("The Flash", 3, 6, "Killer Frost", true),
    new Episode("Supergirl", 2, 7, "The Darkest Place", true),
    new Episode("Arrow", 5, 1, "Legacy", true),
    new Episode("Arrow", 5, 2, "The New Recruits", true),
    new Episode("DC Legends Of Tomorrow", 2, 1, "Out Of Time", true),
    new Episode("DC Legends Of Tomorrow", 2, 2, "The Justice Society Of America", true),
    new Episode("DC Legends of Tomorrow", 2, 3, "Shogun", true),
    new Episode("Arrow", 5, 3, "A Matter Of Trust", true),
    new Episode("Arrow", 5, 4, "Penance", true),
    new Episode("Arrow", 5, 5, "Human Target", true),
    new Episode("DC Legends of Tomorrow", 2, 4, "Abominations", true),
    new Episode("Arrow", 5, 6, "So It Begins", true),
    new Episode("DC Legends of Tomorrow", 2, 5, "Compromised", true),
    new Episode("Arrow", 5, 7, "Vigilante", true),
    new Episode("DC Legends Of Tomorrow", 2, 6, "Outlaw Country", true),
    new Episode("Supergirl", 2, 8, "Medusa", true),
    new Episode("The Flash", 3, 8, "Invasion!", true),
    new Episode("Arrow", 5, 8, "Invasion!", true),
    new Episode("DC Legends Of Tomorrow", 2, 7, "Invasion!", true),
    new Episode("The Flash", 3, 9, "The Present", true),
    new Episode("Arrow", 5, 9, "What We Leave Behind", true),
    new Episode("Arrow", 5, 10, "Who Are You?", true),
    new Episode("DC Legends of Tomorrow", 2, 8, "The Chicago Way", true),
    new Episode("DC Legends of Tomorrow", 2, 9, "Raiders Of The Lost Art", true),
    new Episode("DC Legends of Tomorrow", 2, 10, "The Legion Of Doom", true),
    new Episode("DC Legends of Tomorrow", 2, 11, "Turncoat", true),
    new Episode("Supergirl", 2, 9, "Supergirl Lives", true),
    new Episode("The Flash", 3, 10, "Borrowing Problems From The Future", true),
    new Episode("Supergirl", 2, 10, "We Can Be Heroes", true),
    new Episode("The Flash", 3, 11, "Dead Or Alive", true),
    new Episode("Arrow", 5, 11, "Second Chances", true),
    new Episode("Supergirl", 2, 11, "The Martian Chronicles", true),
    new Episode("The Flash", 3, 12, "Untouchable", true),
    new Episode("Arrow", 5, 12, "Bratva", true),
    new Episode("Supergirl", 2, 12, "Luthors", true),
    new Episode("Supergirl", 2, 13, "Mr. & Mrs. Mxyzptlk", true),
    new Episode("Supergirl", 2, 14, "Homecoming", true),
    new Episode("The Flash", 3, 13, "Attack On Gorilla City", true),
    new Episode("The Flash", 3, 14, "Attack On Central City", true),
    new Episode("Arrow", 5, 13, "Spectre Of The Gun", true),
    new Episode("DC Legends of Tomorrow", 2, 12, "Camelot/3000", true),
    new Episode("DC Legends of Tomorrow", 2, 13, "Land Of The Lost", true),
    new Episode("Arrow", 5, 14, "The Sin-Eater", true),
    new Episode("Arrow", 5, 15, "Fighting Fire With Fire", true),
    new Episode("Supergirl", 2, 15, "Exodus", true),
    new Episode("The Flash", 3, 15, "The Wrath Of Savitar", true),
    new Episode("The Flash", 3, 16, "Into The Speed Force", true),
    new Episode("DC Legends Of Tomorrow", 2, 14, "Moonshot", true),
    new Episode("Arrow", 5, 16, "Checkmate", true),
    new Episode("Supergirl", 2, 16, "Star-Crossed", true),
    new Episode("The Flash", 3, 17, "Duet", true),
    new Episode("DC Legends Of Tomorrow", 2, 15, "Fellowship Of The Spear", true),
    new Episode("Arrow", 5, 17, "Kapiushon", true),
    new Episode("Arrow", 5, 18, "Disbanded", true),
    new Episode("Supergirl", 2, 17, "Distant Sun", true),
    new Episode("The Flash", 3, 18, "Abra Kadabra", true),
    new Episode("The Flash", 3, 19, "The Once And Future Flash", true),
    new Episode("The Flash", 3, 20, "I Know Who You Are", true),
    new Episode("The Flash", 3, 21, "Cause And Effects", true),
    new Episode("The Flash", 3, 22, "Infantina Street", true),
    new Episode("The Flash", 3, 23, "Finish Line", true),
    new Episode("Arrow", 5, 19, "Dangerous Liaisons", true),
    new Episode("Arrow", 5, 20, "Underneath", true),
    new Episode("DC Legends Of Tomorrow", 2, 16, "Doomworld", true),
    new Episode("DC Legends Of Tomorrow", 2, 17, "Aruba", true),
    new Episode("Supergirl", 2, 18, "Ace Reporter", true),
    new Episode("Supergirl", 2, 19, "Alex", true),
    new Episode("Supergirl", 2, 20, "City Of Lost Children", true),
    new Episode("Supergirl", 2, 21, "Resist", true),
    new Episode("Supergirl", 2, 22, "Nevertheless, She Persisted", true),
    new Episode("Arrow", 5, 21, "Honor Thy Fathers", true),
    new Episode("Arrow", 5, 22, "Missing", true),
    new Episode("Arrow", 5, 23, "Lian Yu", true),
];

const collapse5seen = true;
const collapse5 = [new Episode("DC Legends Of Tommorow", 3, 1, "Aruba-Con", true),
    new Episode("Arrow", 6, 1, "Fallout", true),
    new Episode("Arrow", 6, 2, "Tribute", true),
    new Episode("Arrow", 6, 3, "Next Of Kin", true),
    new Episode("Supergirl", 3, 1, "The Girl Of Steel", true),
    new Episode("The Flash", 4, 1, "The Flash Reborn", true),
    new Episode("The Flash", 4, 2, "Mixed Signals", true),
    new Episode("Supergirl", 3, 2, "Triggers", true),
    new Episode("DC Legends Of Tommorow", 3, 2, "Freakshow", true),
    new Episode("Supergirl", 3, 3, "Farm From The Tree", true),
    new Episode("The Flash", 4, 3, "Luck Be A Lady", true),
    new Episode("DC Legends Of Tommorow", 3, 3, "Zari", true),
    new Episode("Supergirl", 3, 4, "The Faithful", true),
    new Episode("The Flash", 4, 4, "Elongated Journey Into Night", true),
    new Episode("DC Legends Of Tommorow", 3, 4, "Phone Home", true),
    new Episode("DC Legends Of Tommorow", 3, 5, "Return Of The Mack", true),
    new Episode("Supergirl", 3, 5, "Damage", true),
    new Episode("Supergirl", 3, 6, "Midvale", true),
    new Episode("The Flash", 4, 5, "Girls Night Out", true),
    new Episode("Arrow", 6, 4, "Reversal", true),
    new Episode("Arrow", 6, 5, "Deathstroke Returns", true),
    new Episode("Arrow", 6, 6, "Promises Kept", true),
    new Episode("The Flash", 4, 6, "When Harry Met Harry...", true),
    new Episode("The Flash", 4, 7, "Therefore I Am"),
    new Episode("DC Legends Of Tommorow", 3, 6, "Helen Hunt", true),
    new Episode("Supergirl", 3, 7, "Wake Up", true),
    new Episode("DC Legends Of Tommorow", 3, 7, "Welcome To The Jungle", true),
    new Episode("Arrow", 6, 7, "Thanksgiving", true),
    new Episode("Supergirl", 3, 8, "Crisis On Earth-X, Part 1", true),
    new Episode("Arrow", 6, 8, "Crisis On Earth-X, Part 2", true),
    new Episode("The Flash", 4, 8, "Crisis On Earth-X, Part 3", true),
    new Episode("DC Legends Of Tommorow", 3, 8, "Crisis On Earth-X, Part 4", true),
    new Episode("Arrow", 6, 9, "Irreconcilable Differences", true),
    new Episode("Supergirl", 3, 9, "Reign", true),
    new Episode("The Flash", 4, 9, "Don't Run", true),
    new Episode("DC Legends Of Tommorow", 3, 9, "Beebo The God Of War", true),
    new Episode("DC Legends Of Tommorow", 3, 10, "Daddy Dharkest", true),
    new Episode("Supergirl", 3, 10, "Legion Of Superheroes", true),
    new Episode("Supergirl", 3, 11, "Fort Rozz", true),
    new Episode("The Flash", 4, 10, "The Trial Of The Flash", true),
    new Episode("Arrow", 6, 10, "Divided", true),
    new Episode("DC Legends Of Tommorow", 3, 11, "Here I Go Again", true),
    new Episode("The Flash", 4, 11, "The Elongated Knight Rises", true),
    new Episode("Arrow", 6, 11, "We Fall", true),
    new Episode("DC Legends Of Tommorow", 3, 12, "The Curse Of The Earth Totem", true),
    new Episode("DC Legends Of Tommorow", 3, 13, "No Country For Old Dads", true),
    new Episode("Supergirl", 3, 12, "For Good", true),
    new Episode("Supergirl", 3, 13, "Both Sides Now", true),
    new Episode("The Flash", 4, 12, "Honey, I Shrunk Team Flash", true),
    new Episode("Arrow", 6, 12, "All For Nothing", true),
    new Episode("The Flash", 4, 13, "True Colors", true),
    new Episode("Arrow", 6, 13, "The Devil's Greatest Trick", true),
    new Episode("Supergirl", 3, 14, "Schott Through The Heart", true),
    new Episode("Supergirl", 3, 15, "In Search Of Lost Time", true),
    new Episode("Supergirl", 3, 16, "Of Two Minds", true),
    new Episode("Supergirl", 3, 17, "Trinity", true),
    new Episode("Supergirl", 3, 18, "Shelter From The Storm", true),
    new Episode("Supergirl", 3, 19, "The Fanatical", true),
    new Episode("Supergirl", 3, 20, "Dark Side Of The Moon", true),
    new Episode("Supergirl", 3, 21, "Not Kansas", true),
    new Episode("Supergirl", 3, 22, "Make It Reign", true),
    new Episode("Supergirl", 3, 23, "Battles Lost And Won", true),
    new Episode("DC Legends Of Tommorow", 3, 14, "Amazing Grace", true),
    new Episode("DC Legends Of Tommorow", 3, 15, "Necromancing The Stone", true),
    new Episode("DC Legends Of Tommorow", 3, 16, "I, Ava", true),
    new Episode("DC Legends Of Tommorow", 3, 17, "Guest Starring John Noble", true),
    new Episode("DC Legends Of Tommorow", 3, 18, "The Good, The Bad And The Cuddly", true),
    new Episode("The Flash", 4, 14, "Subject 9", true),
    new Episode("Arrow", 6, 14, "Collision Course", true),
    new Episode("Arrow", 6, 15, "Doppelganger", true),
    new Episode("The Flash", 4, 15, "Enter Flashtime", true),
    new Episode("The Flash", 4, 16, "Run, Iris, Run", true),
    new Episode("Arrow", 6, 16, "The Thanatos Guild", true),
    new Episode("Arrow", 6, 17, "Brothers In Arms", true),
    new Episode("Arrow", 6, 18, "Fundamentals", true),
    new Episode("The Flash", 4, 17, "Null And Annoyed", true),
    new Episode("The Flash", 4, 18, "Lose Yourself", true),
    new Episode("The Flash", 4, 19, "Fury Rogue", true),
    new Episode("Arrow", 6, 19, "The Dragon", true),
    new Episode("Arrow", 6, 20, "Shifting Allegiances", true),
    new Episode("The Flash", 4, 20, "Therefore She Is", true),
    new Episode("Arrow", 6, 21, "Docket No. 11-19-41-73", true),
    new Episode("The Flash", 4, 21, "Harry And The Harrisons", true),
    new Episode("Arrow", 6, 22, "The Ties That Bind", true),
    new Episode("Arrow", 6, 23, "Life Sentence", true),
    new Episode("The Flash", 4, 22, "Think Fast", true),
    new Episode("The Flash", 4, 23, "We Are The Flash", true)
];

const collapse6seen = true;
const collapse6 = [new Episode("The Flash", 5, 1, "Nora", true),
    new Episode("The Flash", 5, 2, "Blocked", true),
    new Episode("The Flash", 5, 3, "The Death Of Vibe", true),
    new Episode("Supergirl", 4, 1, "American Alien", true),
    new Episode("The Flash", 5, 4, "News Flash", true),
    new Episode("Supergirl", 4, 2, "Fallout", true),
    new Episode("Supergirl", 4, 3, "Man Of Steel", true),
    new Episode("The Flash", 5, 5, "All Doll'd Up", true),
    new Episode("Supergirl", 4, 4, "Ahimsa", true),
    new Episode("Supergirl", 4, 5, "Parasite Lost", true),
    new Episode("The Flash", 5, 6, "The Icicle Cometh", true),
    new Episode("DC Legends Of Tomorrow", 4, 1, "The Virgin Gary", true),
    new Episode("DC Legends Of Tomorrow", 4, 2, "Witch Hunt", true),
    new Episode("Arrow", 7, 1, "Inmate 4587", true),
    new Episode("Arrow", 7, 2, "The Longbow Hunters", true),
    new Episode("Arrow", 7, 3, "Crossing Lines", true),
    new Episode("DC Legends Of Tomorrow", 4, 3, "Dancing Queen", true),
    new Episode("Arrow", 7, 4, "Level 2", true),
    new Episode("DC Legends Of Tomorrow", 4, 4, "Wet Hot American Bummer", true),
    new Episode("The Flash", 5, 7, "O Come, All Ye Thankful", true),
    new Episode("Supergirl", 4, 6, "Call To Action", true),
    new Episode("DC Legends Of Tomorrow", 4, 5, "Tagumo Attacks!!!", true),
    new Episode("Supergirl", 4, 7, "Rather The Fallen Angel", true),
    new Episode("DC Legends Of Tomorrow", 4, 6, "Tender Is The Nate", true),
    new Episode("Arrow", 7, 5, "The Demon", true),
    new Episode("Arrow", 7, 6, "Due Process", true),
    new Episode("Arrow", 7, 7, "The Slabside Redemption", true),
    new Episode("The Flash", 5, 8, "What's Past Is Prologue", true),
    new Episode("Supergirl", 4, 8, "Bunker Hill", true),
    new Episode("Arrow", 7, 8, "Unmasked", true),
    new Episode("The Flash", 5, 9, "Elseworlds Part 1", true),
    new Episode("Arrow", 7, 9, "Elseworlds Part 2", true),
    new Episode("Supergirl", 4, 9, "Elseworlds Part 3", true),
    new Episode("DC Legends Of Tomorrow", 4, 7, "Hell No, Dolly!", true),
    new Episode("DC Legends Of Tomorrow", 4, 8, "Legends Of To-Meow-Meow", true),
    new Episode("DC Legends Of Tomorrow", 4, 9, "Lucha De Apuestas", true),
    new Episode("DC Legends Of Tomorrow", 4, 10, "The Getaway", true),
    new Episode("The Flash", 5, 10, "The Flash & The Furious", true),
    new Episode("DC Legends Of Tomorrow", 4, 11, "Séance And Sensibility", true),
    new Episode("Supergirl", 4, 10, "Suspicious Minds", true),
    new Episode("DC Legends Of Tomorrow", 4, 12, "The Eggplant, The Witch & The Wardrobe", true),
    new Episode("Arrow", 7, 10, "My Name Is Emiko Queen", true),
    new Episode("DC Legends Of Tomorrow", 4, 13, "Egg MacGuffin", true),
    new Episode("DC Legends Of Tomorrow", 4, 14, "Nip/Stuck", true),
    new Episode("DC Legends Of Tomorrow", 4, 15, "Terms Of Service", true),
    new Episode("DC Legends Of Tomorrow", 4, 16, "Hey, World!", true),
    new Episode("The Flash", 5, 11, "Seeing Red", true),
    new Episode("Supergirl", 4, 11, "Blood Memory", true),
    new Episode("Arrow", 7, 11, "Past Sins", true),
    new Episode("The Flash", 5, 12, "Memorabilia", true),
    new Episode("Arrow", 7, 12, "Emerald Archer", true),
    new Episode("Arrow", 7, 13, "Star City Slayer", true),
    new Episode("The Flash", 5, 13, "Goldfaced", true),
    new Episode("The Flash", 5, 14, "Cause And XS", true),
    new Episode("Supergirl", 4, 12, "Menagerie", true),
    new Episode("Supergirl", 4, 13, "What's So Funny About Truth, Justice, And The American Way?", true),
    new Episode("Arrow", 7, 14, "Brothers & Sisters", true),
    new Episode("The Flash", 5, 15, "King Shark Vs. Gorilla Grodd", true),
    new Episode("Supergirl", 4, 14, "Stand And Deliver", true),
    new Episode("Supergirl", 4, 15, "O Brother, Where Art Thou?", true),
    new Episode("Supergirl", 4, 16, "The House of L", true),
    new Episode("Supergirl", 4, 17, "All About Eve", true),
    new Episode("Supergirl", 4, 18, "Crime And Punishment", true),
    new Episode("Arrow", 7, 15, "Training Day", true),
    new Episode("Arrow", 7, 16, "Star City 2040", true),
    new Episode("Supergirl", 4, 19, "American Dreamer", true),
    new Episode("Supergirl", 4, 20, "Will The Real Miss Tessmacher Please Stand Up?", true),
    new Episode("Supergirl", 4, 21, "Red Dawn", true),
    new Episode("Supergirl", 4, 22, "The Quest For Peace", true),
    new Episode("The Flash", 5, 16, "Failure Is An Orphan", true),
    new Episode("The Flash", 5, 17, "Time Bomb", true),
    new Episode("The Flash", 5, 18, "Godspeed", true),
    new Episode("The Flash", 5, 19, "Snow Pack", true),
    new Episode("Arrow", 7, 17, "Inheritance", true),
    new Episode("The Flash", 5, 20, "Gone Rogue", true),
    new Episode("The Flash", 5, 21, "The Girl With The Red Lightning", true),
    new Episode("The Flash", 5, 22, "Legacy", true),
    new Episode("Arrow", 7, 18, "Lost Canary", true),
    new Episode("Arrow", 7, 19, "Spartan", true),
    new Episode("Arrow", 7, 20, "Confessions", true),
    new Episode("Arrow", 7, 21, "Living Proof", true),
    new Episode("Arrow", 7, 22, "You Have Saved This City", true)
];

const collapse7seen = false;
const collapse7 = [new Episode("Supergirl", 5, 1, "Event Horizon", true),
    new Episode("The Flash", 6, 1, "Into The Void", true),
    new Episode("Arrow", 8, 1, "Starling City", true),
    new Episode("Arrow", 8, 2, "Welcome To Hong Kong", true),
    new Episode("Arrow", 8, 3, "Leap Of Faith", true),
    new Episode("Arrow", 8, 4, "Present Tense", false),
    new Episode("Arrow", 8, 5, "Prochnost", false),
    new Episode("Arrow", 8, 6, "Reset", false),
    new Episode("Arrow", 8, 7, "Purgatory", false),
    new Episode("Supergirl", 5, 2, "Stranger Beside Me", true),
    new Episode("Supergirl", 5, 3, "Blurred Lines", true),
    new Episode("Supergirl", 5, 4, "In Plain Sight", true),
    new Episode("Supergirl", 5, 5, "Dangerous Liaisons", false),
    new Episode("Supergirl", 5, 6, "Confidence Women", false),
    new Episode("Supergirl", 5, 7, "Tremors", false),
    new Episode("Supergirl", 5, 8, "The Wrath Of Rama Kahn", false),
    new Episode("Batwoman", 1, 1, "Pilot", true),
    new Episode("Batwoman", 1, 2, "The Rabbit Hole", true),
    new Episode("Batwoman", 1, 3, "Down Down Down", true),
    new Episode("Batwoman", 1, 4, "Who Are You?", true),
    new Episode("Batwoman", 1, 5, "Mine Is A Long And A Sad Tale", false),
    new Episode("Batwoman", 1, 6, "I'll Be Judge, I'll Be Jury", false),
    new Episode("Batwoman", 1, 7, "Tell Me The Truth", false),
    new Episode("Batwoman", 1, 8, "N/A", false),
    new Episode("The Flash", 6, 2, "A Flash Of The Lightning", true),
    new Episode("The Flash", 6, 3, "Dead Man Running", true),
    new Episode("The Flash", 6, 4, "There Will Be Blood", true),
    new Episode("The Flash", 6, 5, "Kiss Kiss Breach Breach", false),
    new Episode("The Flash", 6, 6, "License To Elongate", false),
    new Episode("The Flash", 6, 7, "The Last Temptation Of Barry Allen Part 1", false),
    new Episode("The Flash", 6, 8, "The Last Temptation Of Barry Allen Part 2", false),
    new Episode("Supergirl", 5, 9, "Crisis On Infinite Earths Hour One", false),
    new Episode("Batwoman", 1, 9, "Crisis On Infinite Earths Hour Two", false),
    new Episode("The Flash", 6, 9, "Crisis On Infinite Earths Part 3", false),
    new Episode("Arrow", 8, 8, "Crisis On Infinite Earths Part 4", false),
    new Episode("DC Legends Of Tomorrow", 5, 0, "Crisis On Infinite Earths Part 5", false),
    new Episode("Arrow", 8, 9, "What They Become", false),
    new Episode("Arrow", 8, 10, "N/A", false),
    new Episode("DC Legends Of Tomorrow", 5, 1, "Meet The Legends", false),
    new Episode("DC Legends Of Tomorrow", 5, 2, "Miss Me, Kiss Me, Love Me", false),
    new Episode("DC Legends Of Tomorrow", 5, 3, "Slay Anything", false),
    new Episode("DC Legends Of Tomorrow", 5, 4, "A Head Of Her Time", false),
    new Episode("DC Legends Of Tomorrow", 5, 5, "Mortal Khanbat", false),
    new Episode("DC Legends Of Tomorrow", 5, 6, "Mr Parker's Cul-De-Sac", false),
    new Episode("DC Legends Of Tomorrow", 5, 7, "Romeo Versus Juliet: Dawn Of Justness", false),
];

const collapses = [collapse1, collapse2, collapse3, collapse4, collapse5, collapse6, collapse7];
const collapsesSeen = [collapse1seen, collapse2seen, collapse3seen, collapse4seen, collapse5seen, collapse6seen, collapse7seen];

function init() {
    for (let iterator = 1; iterator <= collapses.length; iterator++) {
        //Create the creater
        const creater = new TableCreater(document.getElementById(`collapse${iterator}`), document.createElement("table"), iterator);
        //Create thead element
        creater.createHeader();
        //Create tbody element
        creater.createBody();
    }
}

window.onload = init;
