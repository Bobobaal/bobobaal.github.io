/*
TO DO:
- Array of all collapses
- Redo autoclasses little simplified in here when creating table row with DOM
*/
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
    new Episode("THe Flash", 1, 11, "The Sounds And The Fury", true),
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